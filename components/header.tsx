import { ThemeSwitcher } from './theme/theme-switcher';
import LogoHeader from './ui/icons/logo-header';
import CalButton from './cal-button';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-3 sm:px-6 lg:px-20 pt-5 pb-7 sm:py-7 sm:pb-9 lg:py-12'>
      <div className='flex items-center gap-2'>
        <LogoHeader className='w-32 h-7 sm:w-40 sm:h-8 lg:w-[185px] lg:h-10' />
      </div>
      <div className='flex items-center gap-4'>
        <ThemeSwitcher />
        <CalButton variant='outline' className='rounded-full'>
          Work with us
        </CalButton>
      </div>
    </header>
  );
}
