"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselProps } from '@/types'
import { bowlby_one_sc } from '@/utils'

export default function EmblaCarousel({ players }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [index, setIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      setIndex(i => i - 1)
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      setIndex(i => i + 1)
    }
  }, [emblaApi])

  const button = {
    enabled: "min-w-16 bg-slate-500 rounded-full p-2 text-sm",
    disabled: "min-w-16 bg-slate-500 opacity-25 rounded-full p-2 text-sm"
  }

  return (
    <div>
      <p className='text-gray-700 font-medium text-center text-sm'>Players in lobby {`(${players.length})`}:</p>
      <div className="overflow-hidden mt-1" ref={emblaRef}>
        <div className="flex gap-x-2">
          {
            players.map((player, i) => (
              <div
                key={i}
                className={`${bowlby_one_sc.className} min-w-0 h-24 rounded-md bg-slate-600 content-center text-center font-bold text-lg`}
                style={{ flex: "0 0 100%" }}
              >
                {player.username}
              </div>))
          }
        </div>
      </div>
      <div className='flex mt-2 justify-center space-x-2'>
        <button
          className={index == 0 ? button.disabled : button.enabled}
          onClick={scrollPrev}
          disabled={index == 0}
        >
          Prev
        </button>
        <button
          className={index == (players.length - 1) ? button.disabled : button.enabled}
          onClick={scrollNext}
          disabled={index == (players.length - 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}