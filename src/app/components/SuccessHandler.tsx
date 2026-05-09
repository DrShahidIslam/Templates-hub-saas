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
      // 1. Alert the user
      toast.success("Welcome to Pro! Unlimited downloads unlocked.", {
        duration: 5000,
        icon: '🚀',
      });

      // 2. Clean the URL (remove ?success=true)
      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);

      // 3. Refresh the page to ensure server components recognize the new session cookie
      window.location.reload();
    }
  }, [searchParams]);

  return null;
}
