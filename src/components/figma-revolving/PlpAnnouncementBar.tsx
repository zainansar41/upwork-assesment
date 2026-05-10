import { marqueeSegments } from "@/data/revolving-text-screen"
import { Sparkles, Sun } from "lucide-react"

function MarqueeStrip() {
  return (
    <div className="flex shrink-0 items-start gap-[30px]">
      {marqueeSegments.map((seg, i) => (
        <div key={`${seg.text}-${i}`} className="flex items-start gap-[30px]">
          <p className="whitespace-nowrap text-[18px] font-medium uppercase leading-none tracking-[-0.108px] text-black dark:text-white">
            {seg.text}
          </p>
          {seg.icon ? (
            <Sparkles
              className="mt-0.5 size-5 shrink-0 text-black dark:text-white"
              strokeWidth={1.5}
              aria-hidden
            />
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function PlpAnnouncementBar() {
  return (
    <div
      className="flex w-full flex-col items-center justify-center overflow-hidden py-3.5"
      style={{ backgroundColor: "#c71414" }}
    >
      <div className="plp-marquee flex w-max items-start">
        <div className="flex shrink-0 items-start gap-[30px] pr-[30px]">
          <MarqueeStrip />
          <Sun
            className="mt-0.5 size-5 shrink-0 text-black dark:text-white"
            strokeWidth={1.5}
            aria-hidden
          />
          <MarqueeStrip />
          <Sparkles
            className="mt-0.5 size-5 shrink-0 text-black dark:text-white"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <div className="flex shrink-0 items-start gap-[30px] pr-[30px]" aria-hidden>
          <MarqueeStrip />
          <Sun
            className="mt-0.5 size-5 shrink-0 text-black dark:text-white"
            strokeWidth={1.5}
            aria-hidden
          />
          <MarqueeStrip />
          <Sparkles
            className="mt-0.5 size-5 shrink-0 text-black dark:text-white"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
      </div>
    </div>
  )
}
