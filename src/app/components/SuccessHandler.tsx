"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

/**
 * SuccessHandler
 * 
 * Watches the URL for a payment success flag.
 * If found, unlocks the 'Pro' status in localStorage and cleans the URL.
 */
export default function SuccessHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get("success");

    if (success === "true") {
      // 1. Persist the 'Pro' status
      localStorage.setItem("isPremium", "true");
      localStorage.setItem("templatehub_premium", "true");
      
      // 2. Alert the user
      toast.success("Welcome to Pro! Unlimited downloads unlocked.", {
        duration: 5000,
        icon: '🚀',
      });

      // 3. Clean the URL (remove ?success=true)
      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);

      // 4. Force a re-render or notification across the app
      // We can use a custom event or just let components poll on focus/mount
      window.dispatchEvent(new Event("storage"));
    }
  }, [searchParams]);

  return null;
}
