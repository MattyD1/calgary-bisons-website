import React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { tw } from "@/libs/utils"

const buttonVariants = cva("w-fit rounded-sm", {
  variants: {
    hierarchy: {
      default: "text-accent-foreground bg-accent hover:bg-accent/90",
      outline: "text-accent border border-accent hover:bg-accent/10",
      basic:
        "text-primary-foreground bg-transparent hover:text-primary-foreground/90",
    },
    size: {
      default: "px-6 py-4",
    },
    defaultVariants: {
      hierarchy: "default",
      size: "default",
    },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, hierarchy, size, ...props }, ref) => {
    return (
      <button
        className={tw(buttonVariants({ hierarchy, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
