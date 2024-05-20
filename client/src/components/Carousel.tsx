"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselProps } from '@/types'
import { bowlby_one_sc, usePrevNextButtons } from '@/utils'

export default function EmblaCarousel({ players }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const {
    prevBtnDisabled,
    nextBtnDisabled
  } = usePrevNextButtons(emblaApi)

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
                className={`${bowlby_one_sc.className} min-w-0 h-24 rounded-md bg-slate-600 content-center text-center font-bold text-lg text-white`}
                style={{ flex: "0 0 100%" }}
              >
                {player.username}
              </div>))
          }
        </div>
      </div>
      <div className='flex mt-2 justify-center space-x-2'>
        <button
          className={prevBtnDisabled ? button.disabled : button.enabled}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          Prev
        </button>
        <button
          className={nextBtnDisabled ? button.disabled : button.enabled}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          Next
        </button>
      </div>
    </div>
  )
}