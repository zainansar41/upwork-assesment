import { useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Send } from "lucide-react"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const PANEL_W = "w-[min(90vw,520px)]"

type WaitlistDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [email, setEmail] = useState("")
  /** Before first interaction, show static label; then real email input. */
  const [emailFieldActive, setEmailFieldActive] = useState(false)
  const emailInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) {
      setEmail("")
      setEmailFieldActive(false)
    }
  }, [open])

  useLayoutEffect(() => {
    if (open && emailFieldActive) {
      emailInputRef.current?.focus()
    }
  }, [open, emailFieldActive])

  function submitEmail() {
    const trimmed = email.trim()
    if (!trimmed || !EMAIL_RE.test(trimmed)) return
    setEmail("")
    setEmailFieldActive(false)
  }

  const showSend = emailFieldActive && email.trim().length > 0

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

        <div className={cn("flex flex-col", PANEL_W)}>
          {!emailFieldActive ? (
            <button
              type="button"
              className={cn(
                "flex h-14 w-full cursor-text items-center justify-center rounded-none border border-neutral-300 bg-white text-center text-base font-medium tracking-wide text-neutral-500 uppercase",
                "outline-none transition-colors hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "dark:bg-white! dark:text-neutral-500",
              )}
              aria-label="Enter your email address"
              onClick={() => setEmailFieldActive(true)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault()
                  setEmailFieldActive(true)
                }
              }}
            >
              ENTER EMAIL
            </button>
          ) : (
            <div className="relative">
              <Input
                ref={emailInputRef}
                type="email"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                placeholder="ENTER EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    submitEmail()
                  }
                }}
                className={cn(
                  "h-14 rounded-none border-neutral-300 bg-white pr-12 text-center text-base font-medium tracking-wide text-neutral-900 normal-case",
                  "placeholder:text-neutral-500 placeholder:uppercase placeholder:tracking-wide",
                  "dark:bg-white! dark:text-neutral-900",
                )}
                aria-label="Email address"
              />
              {showSend ? (
                <button
                  type="button"
                  className={cn(
                    "absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-none text-neutral-900",
                    "outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-ring",
                    "dark:text-neutral-900 dark:hover:bg-neutral-200",
                  )}
                  aria-label="Send email"
                  onClick={() => submitEmail()}
                >
                  <Send className="size-5" strokeWidth={1.75} aria-hidden />
                </button>
              ) : null}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
