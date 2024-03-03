import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { os } from "@tauri-apps/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const platform = await os.platform();
