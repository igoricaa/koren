'use client';

import { email } from '@/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useEffect, useRef, useState } from 'react';

const HoverCircle = ({ children }: { children: React.ReactNode }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
      });
  };

  if (!isMounted) return null;

  return (
    <div className='relative w-fit mx-auto'>
      <div className='peer cursor-pointer' onClick={handleCopyEmail}>
        {children}
      </div>
      {isDesktop && (
        <div
          ref={circleRef}
          className='w-36 h-36 bg-accent/75 backdrop-blur-sm rounded-full fixed inset-0 flex items-center justify-center text-black text-xl -translate-x-1/2 -translate-y-1/2 transition-transform will-change-transform duration-300 ease-out scale-0 peer-hover:scale-100 pointer-events-none'
          style={{
            top: position.y,
            left: position.x,
          }}
        >
          {copied ? 'Copied!' : 'Copy Email'}
        </div>
      )}
    </div>
  );
};

export default HoverCircle;
