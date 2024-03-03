import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils.ts";

export type IconProps = HTMLAttributes<HTMLElement> & {
  icon: string;
};

export function Icon({ icon, className = "w-4 h-4", ...props }: IconProps) {
  return (
    <i
      {...props}
      className={cn("fi", `fi-br-${icon}`, "inline-block", className)}
    />
  );
}
