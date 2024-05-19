import { Bowlby_One_SC, Inter } from 'next/font/google'
import { useState, useEffect, useCallback, useRef } from 'react';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const bowlby_one_sc = Bowlby_One_SC({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export const useDimensions = (myRef: any) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!myRef.current) return;

    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    // use ResizeObserver instead of window events
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(myRef.current);
    return () => resizeObserver.disconnect(); // disconnect ResizeObserver when component unmounts or if the effect re-runs.
  }, []);

  return dimensions;
};