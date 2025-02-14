'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';
import { useEffect } from 'react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className='inline-flex items-center select-none relative cursor-pointer overflow-hidden rounded-2xl transition-all ease-out duration-200'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div
        className='w-12 h-7 overflow-hidden rounded-2xl inline-block bg-[#404346] transition-all ease-out duration-200 dark:bg-[#DCE0E3] 
      before:content-[""] before:block before:w-5 before:h-5 before:rounded-xl before:transition-all before:ease-out before:duration-200 before:bg-[#DCE0E3] before:absolute before:top-1 before:left-6 dark:before:bg-[#2D2F31] dark:before:left-1 
      
      after:content-[""] after:block after:w-[1px] after:h-[1px] after:rounded-[0.5px] after:bg-[#404346] after:absolute after:top-[14px] after:right-0.5 after:transition-all after:ease-out after:duration-200 dark:after:w-8 dark:after:h-8 dark:after:rounded-2xl dark:after:bg-[#DCE0E3] dark:after:-top-0.5 dark:after:right-0.5'
      ></div>
    </div>
  );
}
