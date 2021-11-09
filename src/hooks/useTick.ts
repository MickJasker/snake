import type { EffectCallback } from 'react';
import { useEffect, useRef } from 'react';

export default function useTick(callback: EffectCallback, delay: number): void {
  const savedCallback = useRef<EffectCallback>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
