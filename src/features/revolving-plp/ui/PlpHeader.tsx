import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { Search, ShoppingBag, SlidersHorizontal } from "lucide-react"
import { plpAssets } from "../plp-assets"

/** Search / Filter / Cart — kept at z-[54] so the waitlist scrim (z-[55]) sits above these only. */
function PlpHeaderActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative flex min-w-0 shrink-0 items-center justify-end gap-2 sm:gap-2.5",
        className,
      )}
      {...props}
    >
      <button
        type="button"
        className="flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#f6f3f0] px-3 py-2.5 dark:border-sidebar-border"
      >
        <Search
          className="size-4 shrink-0 text-[#252c32] dark:text-sidebar-foreground"
          strokeWidth={1.75}
          aria-hidden
        />
        <span className="hidden text-[14px] font-normal tracking-[-0.084px] text-[#252c32] dark:text-sidebar-foreground sm:inline">
          Search
        </span>
      </button>
      <div className="relative flex shrink-0 items-center gap-2 sm:gap-2.5">
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 rounded-full border border-[#f6f3f0] bg-black px-3 py-2.5 dark:border-sidebar-border dark:bg-secondary"
        >
          <SlidersHorizontal
            className="size-4 shrink-0 text-white dark:text-secondary-foreground"
            strokeWidth={1.75}
            aria-hidden
          />
          <span className="text-[14px] font-normal tracking-[-0.084px] text-white dark:text-secondary-foreground">
            Filter
          </span>
        </button>
        <button
          type="button"
          className={cn(
            "relative flex items-center justify-center gap-1.5 overflow-hidden rounded-full border border-white/20 bg-[#ff3232] px-3 py-2.5",
            "shadow-[0px_0px_10px_5px_#ffb5b5]",
          )}
        >
          <ShoppingBag
            className="relative size-4 shrink-0 text-white"
            strokeWidth={1.75}
            aria-hidden
          />
          <span className="relative text-[14px] font-normal tracking-[-0.084px] text-white">
            Cart
          </span>
          <span
            className="absolute left-[19px] top-[3px] flex size-[13px] items-center justify-center rounded-full bg-[#c71414] text-[10px] font-normal leading-none text-white ring-1 ring-white/40"
            aria-label="3 items in cart"
          >
            3
          </span>
          <div
            className="pointer-events-none absolute inset-0 rounded-full border border-white"
            aria-hidden
          />
        </button>
        <div className="absolute -right-2 -top-1.5 flex items-center justify-center rounded-full border-[0.5px] border-[#c71414] bg-white px-1.5 py-0.5 dark:bg-card sm:-right-8">
          <span className="text-[9px] font-normal tracking-[-0.054px] text-[#ff3232]">
            Good Job
          </span>
        </div>
      </div>
    </div>
  )
}

export function PlpHeader() {
  return (
    <div className="relative isolate">
      {/* Top chrome + nav + logo stay above the waitlist scrim (z-[55]). */}
      <div className="relative z-60">
        <div className="h-[50px] w-full shrink-0 bg-[#f6f3f0] dark:bg-sidebar" />
        <div className="relative px-4 pb-3 pt-1 sm:px-8 lg:px-[100px]">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="flex min-w-0 gap-6 text-[12px] font-bold uppercase leading-none tracking-[-0.072px] text-[#252c32] dark:text-sidebar-foreground sm:gap-8">
              <span>WOMENSWEAR</span>
              <span>MENSWEAR</span>
            </div>
            <div className="pointer-events-auto relative z-10 flex shrink-0 justify-center">
              <div className="h-[62px] w-[200px] max-w-[265px] translate-y-[-6px] sm:w-[265px]">
                <div
                  className="h-[72px] w-full bg-black dark:bg-white"
                  style={{
                    WebkitMaskImage: `url(${plpAssets.logoMask})`,
                    maskImage: `url(${plpAssets.logoMask})`,
                    WebkitMaskSize: "100% 62.08px",
                    maskSize: "100% 62.08px",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center 0",
                    maskPosition: "center 0",
                  }}
                />
              </div>
            </div>
            {/* Layout width only; real controls are in the z-[54] layer below. */}
            <div
              className="invisible pointer-events-none flex min-w-0 justify-end"
              aria-hidden
              inert
            >
              <PlpHeaderActions />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[50px] bottom-0 z-54 flex items-center justify-end px-4 pb-3 pt-1 sm:px-8 lg:px-[100px]">
        <PlpHeaderActions className="pointer-events-auto" />
      </div>
    </div>
  )
}
