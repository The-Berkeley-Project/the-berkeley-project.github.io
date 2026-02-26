"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  autoScroll?: boolean
  autoScrollInterval?: number
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  autoScroll?: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      autoScroll = false,
      autoScrollInterval = 3000,
      ...props
    },
    ref
  ) => {
    const loopEnabled = opts?.loop ?? true
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        loop: loopEnabled,
        axis: orientation === "horizontal" ? "x" : "y",
        align: opts?.align ?? "start",
        slidesToScroll: opts?.slidesToScroll ?? 1,
        dragFree: autoScroll ? true : false, // Enable dragFree for smooth auto-scroll
        containScroll: autoScroll ? "keepSnaps" : "trimSnaps",
        watchDrag: !autoScroll, // Disable drag watching when auto-scrolling
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(loopEnabled)
    const [canScrollNext, setCanScrollNext] = React.useState(loopEnabled)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      // With loop enabled, we can always scroll, but we still track the state
      // for potential UI feedback
      if (loopEnabled) {
        setCanScrollPrev(true)
        setCanScrollNext(true)
      } else {
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
      }
    }, [loopEnabled])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api.off("select", onSelect)
      }
    }, [api, onSelect])

    // Auto-scroll functionality - continuous smooth scrolling with infinite loop
    React.useEffect(() => {
      if (!api || !autoScroll) {
        return
      }

      let animationFrameId: number | null = null
      let isScrolling = true
      let isPaused = false
      const scrollSpeed = 1.5 // pixels per frame

      const scroll = () => {
        if (!isScrolling) {
          return
        }

        if (isPaused) {
          animationFrameId = requestAnimationFrame(scroll)
          return
        }

        try {
          // Access the Embla viewport directly
          const viewport = api.containerNode()
          if (!viewport) {
            animationFrameId = requestAnimationFrame(scroll)
            return
          }

          const currentScroll = viewport.scrollLeft
          const scrollWidth = viewport.scrollWidth
          const clientWidth = viewport.clientWidth
          const maxScroll = scrollWidth - clientWidth

          // Only scroll if there's scrollable content
          if (maxScroll > 0) {
            let newScroll = currentScroll + scrollSpeed
            
            // For infinite loop - reset at halfway point since we duplicated items
            const halfPoint = maxScroll / 2
            if (newScroll >= halfPoint) {
              newScroll = newScroll - halfPoint
            }
            
            // Ensure we don't exceed bounds
            if (newScroll > maxScroll) {
              newScroll = 0
            }
            
            viewport.scrollLeft = newScroll
            animationFrameId = requestAnimationFrame(scroll)
          } else {
            // Retry if not ready yet
            animationFrameId = requestAnimationFrame(scroll)
          }
        } catch (error) {
          console.error('Carousel scroll error:', error)
          // Retry on error
          animationFrameId = requestAnimationFrame(scroll)
        }
      }

      // Wait for carousel to be ready using Embla's ready event
      const startAutoScroll = () => {
        const viewport = api.containerNode()
        if (viewport && viewport.scrollWidth > viewport.clientWidth) {
          // Start scrolling immediately
          animationFrameId = requestAnimationFrame(scroll)
        } else {
          // Wait a bit more if not ready
          setTimeout(startAutoScroll, 200)
        }
      }

      // Listen for Embla ready event
      const onReady = () => {
        startAutoScroll()
      }

      api.on('reInit', onReady)
      
      // Also try to start after initial delay
      const timeoutId = setTimeout(() => {
        startAutoScroll()
      }, 800)

      // Handle hover pause
      const container = document.getElementById('carousel-container')
      if (container) {
        const handleMouseEnter = () => {
          isPaused = true
        }
        const handleMouseLeave = () => {
          isPaused = false
        }
        
        container.addEventListener('mouseenter', handleMouseEnter)
        container.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          isScrolling = false
          clearTimeout(timeoutId)
          if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId)
          }
          container.removeEventListener('mouseenter', handleMouseEnter)
          container.removeEventListener('mouseleave', handleMouseLeave)
        }
      }

      return () => {
        isScrolling = false
        clearTimeout(timeoutId)
        api.off('reInit', onReady)
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId)
        }
      }
    }, [api, autoScroll])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          autoScroll,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className, autoScroll && "pointer-events-none select-none")}
          role="region"
          aria-label="Carousel"
          style={autoScroll ? { userSelect: 'none', touchAction: 'none' } : undefined}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation, autoScroll } = useCarousel()
  
  return (
    <div 
      ref={carouselRef} 
      className={cn("overflow-hidden", autoScroll && "pointer-events-none select-none")}
      style={autoScroll ? { userSelect: 'none', touchAction: 'none', overflow: 'hidden' } : undefined}
    >
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    basis?: string
  }
>(({ className, basis, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0",
        basis || "basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev, opts } = useCarousel()
  const loopEnabled = opts?.loop ?? true

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!loopEnabled && !canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext, opts } = useCarousel()
  const loopEnabled = opts?.loop ?? true

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!loopEnabled && !canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

