import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNameInitials(name: string): string {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 0) return "";

  const firstInitial = parts[0][0];

  if (parts.length >= 3) {
    const thirdInitial = parts[2][0];
    return (firstInitial + thirdInitial).toUpperCase();
  }
  return firstInitial.toUpperCase();
}

export const sortValues = (values: string[]) => {
  return [...values].sort((a, b) => a.localeCompare(b));
};
