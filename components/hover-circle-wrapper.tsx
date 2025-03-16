'use client';

import { useEffect, useState } from 'react';
import HoverCircle from './hover-circle';
import { email } from '@/data';
import useMediaQuery from '@/hooks/useMediaQuery';

const HoverCircleWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    setIsMounted(true);
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
    <div
      className='relative w-fit mx-auto'
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className='cursor-pointer' onClick={handleCopyEmail}>
        {children}
      </div>
      {isDesktop && (
        <HoverCircle
          isActive={isActive}
          text={copied ? 'Copied!' : 'Copy Email'}
        />
      )}
    </div>
  );
};

export default HoverCircleWrapper;
