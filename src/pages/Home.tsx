import { RevolvingPlpPage } from "@/features/revolving-plp"

/** Main storefront PLP — edge-to-edge, no app chrome. */
export function HomePage() {
  return (
    <div className="min-h-svh w-full bg-white">
      <RevolvingPlpPage />
    </div>
  )
}
