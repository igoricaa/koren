'use client';

import { cn } from '@/lib/utils';
import { useCallback, useEffect, useRef } from 'react';

const HoverCircle = ({
  isActive,
  text,
}: {
  isActive: boolean;
  text: string;
}) => {
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${e.clientX - 64}px, ${
          e.clientY - 64
        }px, 0) ${isActive ? 'scale(1)' : 'scale(0)'}`;
      }
    },
    [isActive]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={circleRef}
      className={cn(
        'fixed top-0 left-0 w-36 h-36 bg-accent/75 backdrop-blur-sm rounded-full flex items-center justify-center text-black text-xl pointer-events-none transition-[transform,visibility] duration-300 ease-out',
        isActive ? 'visible' : 'invisible'
      )}
      style={{
        transform: 'translate3d(-100%, -100%, 0)',
      }}
    >
      {text}
    </div>
  );
};

export default HoverCircle;
