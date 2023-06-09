"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"

import { tw } from "@/libs/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={tw(
        "rounded-md border border-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-accent data-[state=indeterminate]:border-accent data-[state=checked]:bg-accent data-[state=indeterminate]:bg-accent data-[state=checked]:text-accent-foreground data-[state=indeterminate]:text-accent-foreground",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={tw("flex items-center justify-center text-current")}
      >
        {props.checked === "indeterminate" && (
          <Minus className="h-[15px] w-[15px]" />
        )}
        {props.checked === true && <Check className="h-[15px] w-[15px]" />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
