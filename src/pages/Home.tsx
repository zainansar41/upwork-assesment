import { RevolvingTextScreen } from "@/components/figma-revolving/RevolvingTextScreen"

/** Main storefront PLP — edge-to-edge, no app chrome. */
export function HomePage() {
  return (
    <div className="min-h-svh w-full bg-white">
      <RevolvingTextScreen />
    </div>
  )
}
