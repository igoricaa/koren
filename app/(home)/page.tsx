import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/icons/logo';
import { ProjectGallery } from '@/components/gallery/projects-gallery';
import Services from '@/components/services/services';
import ServicesMobile from '@/components/services/services-mobile';

export default function Home() {
  return (
    <main className='bg-background px-side'>
      {/* Hero Section */}
      <section className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-11 pb-5 h-fit'>
        <div className='col-span-full lg:col-span-5 bg-black dark:bg-grey-bg p-5 pt-7 pb-10 sm:p-8 lg:p-12 rounded-2xl flex flex-col justify-between relative'>
          <Image
            src='/roots-bg.png'
            alt='Koren Studio'
            fill
            priority
            className='object-cover'
          />
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-48 lg:mb-8'>
            Deeply rooted.
          </h1>
          <p className='text-white/70 text-xl sm:text-2xl lg:text-3xl lg:max-w-[75%]'>
            We're a creative studio that builds purposeful digital products —
            from creative websites to robust e-commerce solutions, web apps, and
            mobile applications, we deliver seamless experiences.
          </p>
        </div>

        <Services />
        <ServicesMobile />
      </section>

      <ProjectGallery />

      {/* Contact Section */}
      <section className='bg-grey-bg rounded-t-2xl mt-3 sm:mt-4 lg:mt-5 px-side pt-15 sm:pt-8 pb-7 sm:pb-6'>
        <div className='flex flex-col sm:flex-row justify-between items-center relative'>
          <p className='sm:text-sm text-foreground order-2 sm:order-1 mt-2 sm:mt-0'>
            Design & Development <br className='hidden sm:block' />
            Creative Studio
          </p>
          <Logo
            className='order-1 sm:order-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2'
            size={115}
          />
          <p className='sm:text-sm text-foreground order-3 text-end'>
            Available for projects <br className='hidden sm:block' />
            January 2025
          </p>
        </div>
        <div className='text-center mt-15 sm:mt-25 lg:mt-40 mb-8 sm:mb-20 lg:mb-28'>
          <h2 className='text-5xl sm:text-6xl lg:text-7xl mb-8 sm:mb-10 lg:mb-11'>
            Interested in
            <br />
            working together?
          </h2>
          <p className='text-xl text-grey mb-2'>Drop us an email:</p>
          <Link
            href='mailto:hello@koren.digital'
            className='text-3xl text-foreground underline'
          >
            hello@koren.digital
          </Link>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center relative'>
          <div className='order-2 sm:order-1 text-center sm:text-start'>
            <p className='sm:text-sm text-foreground'>
              Design:{' '}
              <a
                href='https://www.nikolapetrovic.co/'
                target='_blank'
                className='underline'
              >
                Nikola
              </a>
            </p>
            <p className='sm:text-sm text-foreground'>
              Development: <span className='underline'>Igor</span>
            </p>
          </div>
          <Button
            variant='outline'
            size='sm'
            className='rounded-full sm:absolute sm:left-1/2 sm:-translate-x-1/2 order-1 sm:order-2 mb-15 sm:mb-0'
          >
            Schedule a meeting
          </Button>
          <div className='order-3 sm:order-3 text-center sm:text-end flex flex-col-reverse sm:flex-col'>
            <p className='sm:text-sm text-foreground'>[temporary website]</p>
            <p className='sm:text-sm text-foreground'>
              © 2024 Koren Studio | All rights reserved
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
