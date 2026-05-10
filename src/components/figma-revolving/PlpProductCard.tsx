import {
  imageUrlForProductId,
  PLP_PRODUCT_MEDIA_IMAGE_WIDTH_PX,
} from "@/data/product-images"
import { productCopy, type ProductCardSpec } from "@/data/revolving-text-screen"
import { cn } from "@/lib/utils"
import { FiEye, FiShoppingBag } from "react-icons/fi"

type PlpProductCardProps = {
  spec: ProductCardSpec
  onAddToCart?: () => void
}

export function PlpProductCard({ spec, onAddToCart }: PlpProductCardProps) {
  const { mediaHeightPx, showShowMoreLink } = spec
  const imageSrc = spec.imageSrc ?? imageUrlForProductId(spec.id)

  return (
    <article className="flex w-full flex-col items-center gap-3">
      <div
        className="group relative w-full cursor-pointer overflow-hidden bg-white dark:bg-transparent"
        style={{ height: mediaHeightPx }}
      >
        <div
          className="absolute left-1/2 top-0 h-full -translate-x-1/2 overflow-hidden bg-white dark:bg-transparent"
          style={{ width: PLP_PRODUCT_MEDIA_IMAGE_WIDTH_PX }}
        >
          <img
            src={imageSrc}
            alt=""
            className="size-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            width={Math.round(PLP_PRODUCT_MEDIA_IMAGE_WIDTH_PX)}
            height={mediaHeightPx}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className={cn(
            "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5",
            "pointer-events-none group-hover:pointer-events-auto",
            "bg-black/0 transition-all duration-200",
            "opacity-0 group-hover:bg-black/25 group-hover:opacity-100",
          )}
        >
          <button
            type="button"
            className="flex h-[30px] w-[90px] items-center justify-center gap-1.5 rounded-lg border border-[#f6f3f0] bg-white px-3 py-2 shadow-sm dark:border-border dark:bg-card"
          >
            <FiEye
              className="size-3.5 shrink-0 text-black dark:text-foreground"
              aria-hidden
            />
            <span className="text-[10px] font-normal tracking-[-0.06px] text-black dark:text-foreground">
              View
            </span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart?.()
            }}
            className="flex h-[30px] w-[90px] items-center justify-center gap-1.5 rounded-lg bg-black px-3 py-2 shadow-sm dark:bg-primary dark:text-primary-foreground"
          >
            <FiShoppingBag
              className="size-3.5 shrink-0 text-white dark:text-primary-foreground"
              aria-hidden
            />
            <span className="text-[10px] font-normal tracking-[-0.06px] text-white dark:text-primary-foreground">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
      <div
        className={cn(
          "flex w-full flex-col items-center gap-1.5 text-center text-[10px] font-normal leading-none text-[#777] dark:text-muted-foreground",
          showShowMoreLink && "gap-1.5",
        )}
      >
        <p className="w-[92px]">{productCopy.name}</p>
        <p className="whitespace-nowrap">{productCopy.sizes}</p>
        <p className="whitespace-nowrap text-black dark:text-foreground">
          {productCopy.brand}
        </p>
        {showShowMoreLink ? (
          <div className="border-b border-[#d5d5d5] border-opacity-100 pb-1 dark:border-border">
            <span className="text-[10px] text-black dark:text-foreground">
              Show more
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-black dark:text-foreground">
              {productCopy.priceCurrent}
            </span>
            <span className="text-[#777] line-through dark:text-muted-foreground">
              {productCopy.priceWas}
            </span>
          </div>
        )}
      </div>
    </article>
  )
}
