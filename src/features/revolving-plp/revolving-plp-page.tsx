import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { productColumns } from "./model/plp-content"
import { PlpAnnouncementBar } from "./ui/PlpAnnouncementBar"
import { PlpFooter } from "./ui/PlpFooter"
import { PlpHeader } from "./ui/PlpHeader"
import { PlpProductCard } from "./ui/PlpProductCard"
import { WaitlistDialog } from "./ui/WaitlistDialog"

function GridDensityToggle({
  value,
  onChange,
}: {
  value: 4 | 8
  onChange: (v: 4 | 8) => void
}) {
  return (
    <div className="flex gap-2.5">
      <button
        type="button"
        onClick={() => onChange(4)}
        className={cn(
          "flex h-[37px] w-[37px] items-center justify-center rounded-full border border-[#f6f3f0] px-3 py-2.5 text-[14px] font-semibold tracking-[-0.084px] text-[#252c32] dark:border-border dark:text-foreground",
          value === 4 &&
            "border-[#252c32] bg-[#252c32] text-white dark:border-primary dark:bg-primary dark:text-primary-foreground",
        )}
      >
        4
      </button>
      <button
        type="button"
        onClick={() => onChange(8)}
        className={cn(
          "flex h-[37px] w-[37px] items-center justify-center rounded-full border border-[#252c32] px-3 py-2.5 text-[14px] font-semibold tracking-[-0.084px] dark:border-border",
          value === 8
            ? "border-[#252c32] bg-[#252c32] text-white dark:border-primary dark:bg-primary dark:text-primary-foreground"
            : "border-[#f6f3f0] text-[#252c32] dark:border-border dark:text-foreground",
        )}
      >
        8
      </button>
    </div>
  )
}

function DarkCo2Toggle({
  checked,
  onCheckedChange,
}: {
  checked: boolean
  onCheckedChange: (next: boolean) => void
}) {
  const labelId = "dark-co2-mode-label"

  return (
    <div className="flex items-center gap-px">
      <div
        id={labelId}
        className="flex w-[88px] items-center justify-center rounded-[33px] px-1.5 py-2.5"
      >
        <span className="w-[70px] text-center text-[14px] font-semibold leading-none tracking-[-0.084px] text-[#252c32] dark:text-white">
          Dark Co2 Mode
        </span>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        onClick={() => onCheckedChange(!checked)}
        className="relative h-[38px] w-[92px] shrink-0 rounded-[21px] bg-black text-left outline-none ring-offset-2 transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background"
      >
        <span
          className={cn(
            "pointer-events-none absolute top-[11px] text-[14px] font-semibold tracking-[-0.084px] text-white",
            checked ? "left-3" : "right-3",
          )}
        >
          {checked ? "On" : "off"}
        </span>
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-[6px] top-[3px] h-[30px] w-[29px] rounded-full bg-white transition-transform duration-200 ease-out",
            checked && "translate-x-[51px]",
          )}
        />
      </button>
    </div>
  )
}

const DARK_MODE_STORAGE_KEY = "revolving-plp-dark"

export function RevolvingPlpPage() {
  const [density, setDensity] = useState<4 | 8>(8)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false
    return window.localStorage.getItem(DARK_MODE_STORAGE_KEY) === "true"
  })
  const [waitlistOpen, setWaitlistOpen] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    window.localStorage.setItem(DARK_MODE_STORAGE_KEY, String(darkMode))
  }, [darkMode])

  const visibleColumns =
    density === 8 ? productColumns : productColumns.slice(0, 4)
  const flatSpecs = visibleColumns.flat()

  return (
    <div
      className="relative box-border flex min-h-svh w-full min-w-0 flex-col bg-background text-foreground"
      data-figma-node="2324:818"
    >
      <PlpHeader />
      <PlpAnnouncementBar />
      <div className="relative z-60 flex items-start justify-end gap-10 px-4 pt-6 md:px-6 lg:px-[23px]">
        <div className="hidden lg:block">
          <GridDensityToggle value={density} onChange={setDensity} />
        </div>
        <DarkCo2Toggle checked={darkMode} onCheckedChange={setDarkMode} />
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col gap-10 px-4 pb-12 pt-6 md:px-6 lg:px-[23px]",
          waitlistOpen && "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "grid grid-cols-3 gap-x-2.5 gap-y-5 md:grid-cols-4",
            density === 8 ? "lg:grid-cols-8" : "lg:grid-cols-4",
          )}
        >
          {flatSpecs.map((spec) => (
            <PlpProductCard
              key={spec.id}
              spec={spec}
              onAddToCart={() => setWaitlistOpen(true)}
            />
          ))}
        </div>
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            className="h-[41px] rounded-lg border border-black bg-white px-3.5 py-2.5 text-[14px] font-medium tracking-[-0.28px] text-black shadow-[0px_2px_1px_rgba(16,24,40,0.06)] dark:border-black dark:bg-white! dark:text-black! dark:shadow-[0px_2px_1px_rgba(16,24,40,0.06)] dark:hover:bg-white/90! dark:hover:text-black! dark:aria-expanded:bg-white! dark:aria-expanded:text-black!"
          >
            Load More
          </Button>
        </div>
      </div>
      <PlpFooter />
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  )
}
