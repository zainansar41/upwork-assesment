/**
 * Figma “image 2” rail width (px) — centered in the card media area
 * (see frame `2324:818` / product Card nodes).
 */
export const PLP_PRODUCT_MEDIA_IMAGE_WIDTH_PX = 85.564

/** Remote product photography (Unsplash) — blazer / fashion editorial. */
export const PLP_PRODUCT_IMAGE_URLS = [
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594938298603-c81490cceb89?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&q=80&auto=format&fit=crop",
] as const

export function imageUrlForProductId(id: string): string {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h + id.charCodeAt(i) * (i + 1)) % 2147483647
  const idx = Math.abs(h) % PLP_PRODUCT_IMAGE_URLS.length
  return PLP_PRODUCT_IMAGE_URLS[idx]!
}
