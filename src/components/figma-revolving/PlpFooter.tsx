import { Input } from "@/components/ui/input"
import {
  copyright,
  footerColumns,
  newsletter,
} from "@/data/revolving-text-screen"

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: readonly string[]
}) {
  return (
    <div className="flex w-max flex-col gap-2.5">
      <p className="whitespace-nowrap text-[14px] font-medium leading-6 tracking-[-0.084px] text-white">
        {title}
      </p>
      <div className="flex flex-col gap-0">
        {links.map((link) => (
          <p
            key={link}
            className="whitespace-nowrap text-[14px] font-normal leading-6 tracking-[-0.084px] text-white/80"
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  )
}

export function PlpFooter() {
  return (
    <footer className="relative mt-auto h-[338px] w-full shrink-0 overflow-hidden bg-black text-white dark:border-t dark:border-white/10">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"
        aria-hidden
      />
      <div className="relative z-[1] flex h-full flex-col px-16 pt-10">
        <div className="flex flex-1 justify-between gap-8">
          <div className="flex gap-8">
            <FooterColumn
              title={footerColumns.connect.title}
              links={footerColumns.connect.links}
            />
            <FooterColumn
              title={footerColumns.care.title}
              links={footerColumns.care.links}
            />
            <FooterColumn
              title={footerColumns.awareness.title}
              links={footerColumns.awareness.links}
            />
          </div>
          <div className="flex w-[212px] flex-col gap-4">
            <div className="flex flex-col gap-0.5 whitespace-nowrap text-white">
              <p className="text-[14px] font-medium tracking-[-0.084px]">
                {newsletter.title}
              </p>
              <p className="text-[11px] font-normal tracking-[-0.066px] opacity-80">
                {newsletter.subtitle}
              </p>
            </div>
            <div className="w-full rounded-lg border border-white">
              <Input
                readOnly
                placeholder={newsletter.placeholder}
                className="h-[34px] border-0 bg-transparent px-2.5 text-[12px] text-white/80 placeholder:text-white/80 focus-visible:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="mt-auto flex h-[54px] items-center border-t border-white/10 pl-4">
          <p className="text-[16px] font-normal leading-6 tracking-[-0.096px] text-white">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
