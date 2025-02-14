'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Button } from './ui/button';

export default function CalButton({
  children,
  variant,
  size,
  className,
}: {
  children: React.ReactNode;
  variant?: 'outline' | 'default';
  size?: 'sm' | null;
  className?: string;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: 'discovery-session-w-koren-studio',
      });
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#292929' },
          dark: { 'cal-brand': '#fff' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);
  return (
    <Button
      variant={variant ?? 'default'}
      size={size}
      className={className}
      data-cal-namespace='discovery-session-w-koren-studio'
      data-cal-link='korenstudio/discovery-session-w-koren-studio'
      data-cal-config='{"layout":"month_view","theme":"auto"}'
    >
      {children}
    </Button>
  );
}
