// hooks/useGalleryPro.ts
import { useCallback, useEffect, useRef, useState } from "react";

type Options = { autoPlay?: boolean; delay?: number; length: number };

export function useGalleryPro({
  autoPlay = true,
  delay = 4000,
  length,
}: Options) {
  const [index, setIndex] = useState(0);
  const lockRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef(performance.now());
  const elapsed = useRef(0);
  const paused = useRef(false);
  const visible = useRef(true);

  const unlock = useCallback(() => {
    lockRef.current = false;
  }, []);

  const next = useCallback(() => {
    if (lockRef.current) return;
    lockRef.current = true;
    setIndex((p) => (p + 1) % length);
    setTimeout(unlock, 300);
  }, [length, unlock]);

  const prev = useCallback(() => {
    if (lockRef.current) return;
    lockRef.current = true;
    setIndex((p) => (p - 1 + length) % length);
    setTimeout(unlock, 300);
  }, [length, unlock]);

  const goTo = useCallback(
    (i: number) => {
      if (lockRef.current) return;
      lockRef.current = true;
      setIndex(i % length);
      setTimeout(unlock, 300);
    },
    [length, unlock],
  );

  useEffect(() => {
    if (!autoPlay) return;
    const onVisibility = () => {
      visible.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    const loop = (time: number) => {
      if (!paused.current && visible.current && !lockRef.current) {
        const delta = time - lastRef.current;
        elapsed.current += delta;
        if (elapsed.current >= delay) {
          next();
          elapsed.current = 0;
        }
      }
      lastRef.current = time;
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [autoPlay, delay, next]);

  // touch handlers simple
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    paused.current = true;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
    paused.current = false;
  };

  return { index, next, prev, goTo, onTouchStart, onTouchEnd, setIndex };
}
