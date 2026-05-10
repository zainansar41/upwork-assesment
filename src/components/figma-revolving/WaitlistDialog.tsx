import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type WaitlistStep = "email" | "join" | "done"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const PANEL_W = "w-[min(90vw,520px)]"

type WaitlistDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [step, setStep] = useState<WaitlistStep>("email")
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (!open) {
      setStep("email")
      setEmail("")
    }
  }, [open])

  function tryAdvanceFromEmail() {
    const trimmed = email.trim()
    if (!trimmed || !EMAIL_RE.test(trimmed)) return
    setStep("join")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-neutral-900/50 backdrop-blur-md"
        className={cn(
          "w-max max-w-none rounded-none border-0 bg-transparent p-0 text-neutral-900 shadow-none",
          "gap-0 ring-0 ring-offset-0 sm:max-w-none",
          "dark:bg-transparent",
        )}
      >
        <DialogTitle className="sr-only">Join the waitlist</DialogTitle>

        {step === "email" ? (
          <div className={cn("flex flex-col", PANEL_W)}>
            <Input
              type="email"
              autoComplete="email"
              autoFocus
              placeholder="ENTER EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  tryAdvanceFromEmail()
                }
              }}
              className={cn(
                "h-14 rounded-none border-neutral-300 bg-white text-center text-base font-medium tracking-wide text-neutral-900 uppercase",
                "placeholder:text-neutral-500 placeholder:normal-case dark:bg-white! dark:text-neutral-900",
              )}
              aria-label="Email address"
            />
          </div>
        ) : null}

        {step === "join" ? (
          <div className={cn("flex flex-col items-stretch", PANEL_W)}>
            <Button
              type="button"
              className="h-14 rounded-none bg-black px-6 text-sm font-semibold tracking-wide text-white uppercase hover:bg-black/90"
              onClick={() => setStep("done")}
            >
              JOIN THE WAITLIST
            </Button>
          </div>
        ) : null}

        {step === "done" ? (
          <p
            className={cn(
              PANEL_W,
              "bg-white px-6 py-4 text-center text-base font-medium leading-snug tracking-wide text-neutral-800 uppercase",
            )}
          >
            We&apos;ll let you know when we&apos;re open
          </p>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
