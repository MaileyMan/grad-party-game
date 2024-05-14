"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-x-2">
          <div className="min-w-0 h-24 rounded-md bg-slate-600 content-center text-center" style={{ flex: "0 0 100%" }}>Slide 1</div>
          <div className="min-w-0 h-24 rounded-md bg-slate-600 content-center text-center" style={{ flex: "0 0 100%" }}>Slide 2</div>
          <div className="min-w-0 h-24 rounded-md bg-slate-600 content-center text-center" style={{ flex: "0 0 100%" }}>Slide 3</div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  )
}