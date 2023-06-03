export function TailwindColors() {
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="rounded-full0 fixed bottom-1 right-1 z-50 flex gap-1 text-xs">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-background p-3 font-mono text-foreground">
        f
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted p-3 font-mono text-muted-foreground">
        m
      </div>
      <div className="bg-popover text-popover-foreground flex h-6 w-6 items-center justify-center rounded-full p-3 font-mono">
        p
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-border p-3 font-mono" />
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-input p-3 font-mono" />
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary p-3 font-mono text-primary-foreground">
        pr
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary p-3 font-mono text-secondary-foreground">
        s
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent p-3 font-mono text-accent-foreground">
        a
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive p-3 font-mono text-destructive-foreground">
        d
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ring p-3 font-mono" />
    </div>
  )
}
