"use client";

import { useState } from "react";
import { Check, Square } from "lucide-react";

interface ChecklistItemProps {
  label: string;
  id: string;
}

export default function ChecklistItem({ label, id }: ChecklistItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group ${
        checked
          ? "bg-accent-light/60"
          : "hover:bg-muted"
      }`}
    >
      <button
        id={id}
        role="checkbox"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className="mt-0.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
      >
        {checked ? (
          <div className="w-5 h-5 rounded-md bg-accent flex items-center justify-center check-animate">
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </div>
        ) : (
          <Square className="w-5 h-5 text-border group-hover:text-accent/50 transition-colors" strokeWidth={1.5} />
        )}
      </button>
      <span
        className={`text-[15px] leading-snug transition-all duration-200 ${
          checked
            ? "text-muted-foreground line-through"
            : "text-foreground"
        }`}
      >
        {label}
      </span>
    </label>
  );
}
