import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { HexColorField } from "@/types"

export function tw(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

export const getHighlightColor = (highlight?: HexColorField) => {
  if (!highlight)
    return {
      bg: "bg-foreground",
      text: "text-foreground",
      before: "before:bg-foreground",
    }

  switch (highlight.hex) {
    case "#E86840":
      return {
        bg: "bg-accent",
        text: "text-accent",
        before: "before:bg-accent",
      }
    case "#090E43":
      return {
        bg: "bg-primary",
        text: "text-primary",
        before: "before:bg-accent",
      }
    default:
      return
  }
}

export const getOverlay = (color: HexColorField) => {
  if (!color.hex) return "bg-pink-500"

  switch (color.hex) {
    case "#000000":
      return "bg-black"
    case "#FFFFFF":
      return "bg-white"
    case "#E86840":
      return "bg-accent"
    case "#090E43":
      return "bg-primary"
    default:
      return
  }
}
