"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselProps } from '@/types'

export default function EmblaCarousel({ players }: CarouselProps) {
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
          {
            players.map((player, i) => (
              <div key={i}
                className="min-w-0 h-24 rounded-md bg-slate-600 content-center text-center"
                style={{ flex: "0 0 100%" }}
              >
                {player.username}
              </div>))
          }
        </div>
      </div>
      <div className='flex mt-2 justify-center space-x-2'>
        <button className="min-w-16 bg-slate-500 rounded-full p-2" onClick={scrollPrev}>
          Prev
        </button>
        <button className="min-w-16 bg-slate-500 rounded-full p-2" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  )
}