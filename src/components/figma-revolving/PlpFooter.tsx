import type { ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import {
  copyright,
  footerColumns,
  newsletter,
} from "@/data/revolving-text-screen"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { FaInstagram, FaReddit, FaTiktok } from "react-icons/fa"
import { SiBluesky } from "react-icons/si"
import footerGrass from "@/data/images/footer.png"

function FooterLink({ children }: { children: string }) {
  return (
    <a
      href="#"
      className="whitespace-nowrap text-[14px] font-normal leading-6 tracking-[-0.084px] text-white/80 transition-colors hover:text-white"
    >
      {children}
    </a>
  )
}

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
          <FooterLink key={link}>{link}</FooterLink>
        ))}
      </div>
    </div>
  )
}

const SOCIAL_ICONS = [
  { label: "Instagram", href: "#", Icon: FaInstagram, className: "text-white" },
  { label: "Bluesky", href: "#", Icon: SiBluesky, className: "text-white" },
  { label: "TikTok", href: "#", Icon: FaTiktok, className: "text-white" },
  {
    label: "Reddit",
    href: "#",
    Icon: FaReddit,
    className: "text-[#ff4500]",
  },
] as const

function ConnectMobileBody() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-nowrap items-center gap-2 md:hidden">
        {SOCIAL_ICONS.map(({ label, href, Icon, className }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-90"
          >
            <Icon className={cn("size-6", className)} aria-hidden />
          </a>
        ))}
        <a
          href="#"
          className="shrink-0 text-[11px] font-normal leading-4 tracking-[-0.066px] text-white/80 transition-colors hover:text-white"
        >
          RedSeries
        </a>
      </div>
      <div className="hidden flex-col gap-0 md:flex">
        {footerColumns.connect.links.map((link) => (
          <FooterLink key={link}>{link}</FooterLink>
        ))}
      </div>
    </div>
  )
}

/** Collapsible below lg; closed content is hidden (no height animation). */
function FooterAccordionSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <Collapsible
      defaultOpen
      className="group py-5 first:pt-0"
    >
      <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between gap-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">
          {title}
        </span>
        <ChevronDown
          className="size-4 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:hidden pt-3">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}

function NewsletterBlock({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col gap-0.5 text-white">
        <p className="text-[14px] font-medium tracking-[-0.084px]">
          {newsletter.title}
        </p>
        <p className="text-[11px] font-normal tracking-[-0.066px] text-white/80">
          {newsletter.subtitle}
        </p>
      </div>
      <div className="w-full rounded-xl border border-white bg-white/10">
        <Input
          readOnly
          placeholder={newsletter.placeholder}
          className="h-10 rounded-xl border-0 bg-transparent px-4 text-[12px] text-white placeholder:text-white/60 focus-visible:ring-0 md:h-[34px]"
        />
      </div>
    </div>
  )
}

export function PlpFooter() {
  const stackBlocks = [
    {
      key: "awareness",
      title: footerColumns.awareness.title,
      links: footerColumns.awareness.links,
    },
    {
      key: "care",
      title: footerColumns.care.title,
      links: footerColumns.care.links,
    },
  ] as const

  return (
    <footer className="relative isolate mt-auto w-full shrink-0 overflow-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${footerGrass})` }}
      />
      <div className="relative z-0 flex min-h-[420px] flex-col lg:min-h-[338px]">
        {/* Desktop */}
        <div className="hidden flex-1 flex-col px-8 pb-0 pt-10 lg:flex lg:px-16">
          <div className="flex flex-1 justify-between gap-10">
            <div className="flex flex-wrap gap-10 xl:gap-12">
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
            <NewsletterBlock className="w-full max-w-[212px] shrink-0" />
          </div>
        </div>

        {/* Tablet + mobile: collapsible sections */}
        <div className="flex flex-1 flex-col px-4 pt-8 md:px-8 lg:hidden">
          {stackBlocks.map(({ key, title, links }) => (
            <FooterAccordionSection key={key} title={title}>
              <div className="flex flex-col gap-0">
                {links.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </div>
            </FooterAccordionSection>
          ))}
          <FooterAccordionSection title={footerColumns.connect.title}>
            <ConnectMobileBody />
          </FooterAccordionSection>
          <div className="mt-6 w-full max-w-md">
            <NewsletterBlock />
          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-0 mt-auto px-4 py-4 md:px-8 lg:px-16 mb-8">
          <div className="">
            <p className="text-[13px] font-normal leading-6 tracking-[-0.078px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] lg:text-[16px] lg:tracking-[-0.096px]">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
