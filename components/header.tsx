import { ThemeSwitcher } from './theme/theme-switcher';
import CalButton from './cal-button';
import Logo from './ui/icons/logo';
import { AnimatedText } from './animated-text';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-3 sm:px-6 lg:px-12 pt-5 pb-10 sm:py-7 sm:pb-9 lg:py-12'>
      <div className='flex items-center gap-2'>
        <Logo className='w-32 h-7 sm:w-40 sm:h-8 lg:w-36 lg:h-8' markAccent />
      </div>
      <div className='flex items-center gap-4'>
        <ThemeSwitcher />
        <CalButton variant='outline' className='rounded-full'>
          <AnimatedText text='Work with us' className='leading-6' />
        </CalButton>
      </div>
    </header>
  );
}
