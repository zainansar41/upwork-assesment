export const PLP_FRAME = { width: 1440, height: 2202 } as const

export const marqueeSegments = [
  { text: "US shipping", icon: true },
  { text: "only free shipping on orders over $200", icon: true },
  { text: "all season sales", icon: true },
  { text: "sales all season", icon: true },
] as const

export type ProductCardSpec = {
  id: string
  mediaHeightPx: number
  showShowMoreLink?: boolean
  /** Override default rotated Unsplash image */
  imageSrc?: string
}

/** Eight columns, top-to-bottom card stacks — matches Figma auto-layout columns. */
export const productColumns: ProductCardSpec[][] = [
  [
    { id: "c0-0", mediaHeightPx: 120 },
    { id: "c0-1", mediaHeightPx: 120 },
    { id: "c0-2", mediaHeightPx: 120 },
    { id: "c0-3", mediaHeightPx: 156 },
  ],
  [
    { id: "c1-0", mediaHeightPx: 174, showShowMoreLink: true },
    { id: "c1-1", mediaHeightPx: 172 },
    { id: "c1-2", mediaHeightPx: 120 },
    { id: "c1-3", mediaHeightPx: 208 },
  ],
  [
    { id: "c2-0", mediaHeightPx: 151 },
    { id: "c2-1", mediaHeightPx: 120 },
    { id: "c2-2", mediaHeightPx: 190 },
    { id: "c2-3", mediaHeightPx: 168 },
  ],
  [
    { id: "c3-0", mediaHeightPx: 120 },
    { id: "c3-1", mediaHeightPx: 190 },
    { id: "c3-2", mediaHeightPx: 190 },
  ],
  [
    { id: "c4-0", mediaHeightPx: 142 },
    { id: "c4-1", mediaHeightPx: 120 },
    { id: "c4-2", mediaHeightPx: 120 },
    { id: "c4-3", mediaHeightPx: 120 },
  ],
  [
    { id: "c5-0", mediaHeightPx: 120 },
    { id: "c5-1", mediaHeightPx: 172 },
    { id: "c5-2", mediaHeightPx: 168 },
    { id: "c5-3", mediaHeightPx: 95 },
  ],
  [
    { id: "c6-0", mediaHeightPx: 120 },
    { id: "c6-1", mediaHeightPx: 156 },
    { id: "c6-2", mediaHeightPx: 192 },
    { id: "c6-3", mediaHeightPx: 120 },
  ],
  [
    { id: "c7-0", mediaHeightPx: 120 },
    { id: "c7-1", mediaHeightPx: 120 },
    { id: "c7-2", mediaHeightPx: 214 },
    { id: "c7-3", mediaHeightPx: 231 },
  ],
]

export const productCopy = {
  name: "Khaki & Black Paneled Blazer",
  sizes: "Size: L, M, S, XL",
  brand: "FENG CHEN WANG",
  priceCurrent: "$750",
  priceWas: "$800",
} as const

export const footerColumns = {
  connect: {
    title: "Connect",
    links: ["Instagram", "Bluesky", "TikTok", "Reddit", "RedSeries"],
  },
  care: {
    title: "Care",
    links: ["Terms Of Service", "Privacy Policy", "FAQs"],
  },
  awareness: {
    title: "Awareness",
    links: ["Sustainability", "Impact-stats", "Partnerships", "About"],
  },
} as const

export const newsletter = {
  title: "Subscribe to our newsletter",
  subtitle: "Do not be a stranger",
  placeholder: "Your email...",
} as const

export const copyright = "© 2026 Do Not Wish. All Rights Reserved."
