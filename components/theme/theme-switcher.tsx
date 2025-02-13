'use client';

import { useTheme } from 'next-themes';

import { useState } from 'react';
import { useEffect } from 'react';
import Sun from '../ui/icons/sun';
import Moon from '../ui/icons/moon';

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
    // <button
    //   onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    //   name='Theme switcher'
    //   className='relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center'
    // >
    //   <Sun
    //     className={`h-5 sm:h-6 w-5 sm:w-6 transition-all ${
    //       theme === 'dark' ? ' scale-0' : 'scale-100'
    //     }`}
    //   />
    //   <Moon
    //     className={`absolute h-5 sm:h-6 w-5 sm:w-6 transition-all ${
    //       theme === 'dark' ? 'scale-100' : ' scale-0'
    //     }`}
    //   />
    // </button>

    // --gray-5:#010101; /*dark*/
    // --gray-10:#040404;
    // --gray-15:#070808;
    // --gray-20:#0D0D0E;
    // --gray-25:#141516;
    // --gray-30:#1E2022;
    // --gray-35:#2D2F31;
    // --gray-40:#404346;
    // --gray-45:#5B5E62;
    // --gray-50:#7C8084;
    // --gray-55:#9DA1A5;
    // --gray-60:#B9BDC1;
    // --gray-65:#CDD1D5;
    // --gray-70:#DCE0E3;
    // --gray-75:#E7EAED;
    // --gray-80:#EFF2F5;
    // --gray-85:#F4F7FA;
    // --gray-90:#F7FAFD;
    // --gray-95:#FCFEFE; /*light*/

    <div
      className='inline-flex items-center select-none relative cursor-pointer overflow-hidden rounded-2xl transition-all ease-out duration-200'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {/* <div className='w-12 h-7 overflow-hidden rounded-2xl inline-block bg-[#404346] transition-all ease-out duration-1000 dark:bg-[#DCE0E3] before:content-[""] before:block before:w-5 before:h-5 before:rounded-xl before:transition-all before:ease-out before:duration-1000 before:bg-[#DCE0E3] before:absolute before:top-1 before:left-6 dark:before:bg-[#2D2F31] dark:before:left-1 after:content-[""] after:block after:w-[1px] after:h-[1px] after:rounded-[0.5px] after:bg-[#404346] after:absolute after:top-[14px] after:right-0.5 after:transition-all after:ease-out after:duration-1000 dark:after:w-8 dark:after:h-8 dark:after:rounded-2xl dark:after:bg-[#DCE0E3] dark:after:-top-0.5 dark:after:right-0.5'></div> */}
      <div
        className={`w-12 h-7 overflow-hidden rounded-2xl inline-block transition-all ease-out duration-200 ${
          theme === 'light' ? 'bg-[#404346]' : 'bg-[#DCE0E3]'
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 rounded-xl transition-all ease-out duration-200 ${
            theme === 'dark' ? 'bg-[#2D2F31] left-1' : 'left-6 bg-[#DCE0E3]'
          }`}
        ></div>
        <div
          className={`absolute transition-all ease-out duration-200 ${
            theme === 'dark'
              ? 'w-8 h-8 rounded-2xl bg-[#DCE0E3] -top-0.5 right-0.5'
              : 'bg-[#404346] top-[14px] right-0.5 w-[1px] h-[1px] rounded-[0.5px]'
          }`}
        ></div>
      </div>
    </div>
  );
}
