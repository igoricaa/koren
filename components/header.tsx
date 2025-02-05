import { Button } from './ui/button';
import { ThemeSwitcher } from './theme/theme-switcher';
import LogoHeader from './ui/icons/logo-header';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-20 py-12'>
      <div className='flex items-center gap-2'>
        <LogoHeader />
      </div>
      <div className='flex items-center gap-4'>
        <ThemeSwitcher />
        <Button variant='outline' className='rounded-full'>
          Work with us
        </Button>
      </div>
    </header>
  );
}
