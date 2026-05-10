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

/** Rotating idle lines before the user taps into the email field. */
const IDLE_INTERVAL_MS = 3200

type IdleSlide = 0 | 1 | 2

type WaitlistDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [email, setEmail] = useState("")
  /** Before first interaction, show timed text; then real email input. */
  const [emailFieldActive, setEmailFieldActive] = useState(false)
  const [idleSlide, setIdleSlide] = useState<IdleSlide>(0)
  const emailInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) {
      setEmail("")
      setEmailFieldActive(false)
      setIdleSlide(0)
    }
  }, [open])

  useEffect(() => {
    if (!open || emailFieldActive) return
    const id = window.setInterval(() => {
      setIdleSlide((s) => ((((s + 1) % 3) as IdleSlide)))
    }, IDLE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [open, emailFieldActive])

  useLayoutEffect(() => {
    if (open && emailFieldActive) {
      emailInputRef.current?.focus()
    }
  }, [open, emailFieldActive])

  function activateEmailField() {
    setEmailFieldActive(true)
  }

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
                "flex min-h-14 w-full cursor-text items-center justify-center rounded-none border px-3 text-center outline-none transition-colors",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                idleSlide === 0 &&
                  "border-neutral-300 bg-white text-base font-medium tracking-wide text-neutral-500 uppercase hover:bg-neutral-50 dark:bg-white! dark:text-neutral-500",
                idleSlide === 1 &&
                  "border-black bg-black text-sm font-semibold tracking-wide text-white uppercase hover:bg-black/90 dark:border-black dark:bg-black",
                idleSlide === 2 &&
                  "border-neutral-300 bg-white text-sm font-medium uppercase leading-snug tracking-wide text-neutral-800 dark:bg-white! dark:text-neutral-800",
              )}
              aria-label="Enter your email address"
              onClick={activateEmailField}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault()
                  activateEmailField()
                }
              }}
            >
              <span
                key={idleSlide}
                className="animate-in fade-in-0 duration-300"
              >
                {idleSlide === 0 ? (
                  "ENTER EMAIL"
                ) : idleSlide === 1 ? (
                  "JOIN THE WAITLIST"
                ) : (
                  `WE'LL LET YOU KNOW WHEN WE'RE OPEN`
                )}
              </span>
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
