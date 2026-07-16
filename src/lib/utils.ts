import { type ClassValue, clsx } from "cnfast";
import { twMerge } from "cnfast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
