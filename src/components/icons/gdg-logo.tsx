import * as React from "react";
import { cn } from "@/lib/utils";

export function GdgLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={cn("text-primary", className)}
      fill="currentColor"
      {...props}
    >
      <path d="M8.2,7.2L5.4,10l2.8,2.8L7.1,14L3,10l4.1-4L8.2,7.2z" />
      <path d="M12.9,14l-1.1-1.2L14.6,10l-2.8-2.8L12.9,6L17,10L12.9,14z" />
    </svg>
  );
}
