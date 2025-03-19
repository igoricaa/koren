import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/ui/icons/logo';
import { ProjectGallery } from '@/components/gallery/projects-gallery';
import Services from '@/components/services/services';
import ServicesMobile from '@/components/services/services-mobile';
import CalButton from '@/components/cal-button';
import { AnimatedText } from '@/components/animated-text';
import HoverCircleWrapper from '@/components/hover-circle-wrapper';

export default function Home() {
  return (
    <main className='bg-background px-side space-y-5 pb-3 lg:pb-10'>
      {/* Hero Section */}
      <section className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-10 lg:gap-5 lg:h-[580px]'>
        <div className='col-span-full lg:col-span-5 bg-black dark:bg-grey-bg p-5 pt-6 pb-10 sm:p-8 lg:py-10 lg:px-6 rounded-2xl flex flex-col justify-between relative overflow-hidden'>
          <Image
            src='/roots-bg.png'
            alt='Koren Studio'
            fill
            sizes='(max-width: 1024px) 100vw, 45vw'
            priority
            className='object-cover'
          />
          <h1 className='text-[40px] sm:text-[44px] lg:text-5xl 4xl:!text-6xl font-light text-white mb-48 lg:mb-8 z-10'>
            Deeply rooted.
          </h1>
          <p className='text-white/70 text-lg 4xl:text-2xl z-10'>
            We're a creative studio that builds purposeful digital products —
            from creative websites to robust e-commerce solutions, web apps, and
            mobile applications, we deliver seamless experiences.
          </p>
        </div>

        <Services />
        <ServicesMobile />
      </section>

      <ProjectGallery />

      <section className='bg-grey-bg rounded-2xl px-6 pt-6 sm:pt-6 pb-6 sm:pb-6'>
        <div className='flex flex-col sm:flex-row justify-between items-center relative'>
          <p className='text-sm sm:text-xs 4xl:!text-base text-foreground order-2 sm:order-1 mt-2 sm:mt-0'>
            Design & Development <br className='hidden sm:block' />
            Creative Studio
          </p>
          <Logo className='order-1 sm:order-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2 w-24 4xl:w-40' />
          <p className='text-sm sm:text-xs 4xl:!text-base text-foreground order-3 text-end'>
            Available for projects <br className='hidden sm:block' />
            January 2025
          </p>
        </div>

        <HoverCircleWrapper>
          <div className='text-center mt-15 sm:mt-25 lg:mt-40 mb-8 sm:mb-20 lg:mb-28'>
            <h2 className='text-3xl lg:text-5xl 4xl:!text-6xl mb-4'>
              Interested in
              <br />
              working together?
            </h2>

            <p className='text-2xl lg:text-lg 4xl:!text-2xl text-grey mb-1'>
              Drop us an email:
            </p>
            <Link
              href='mailto:hello@koren.digital'
              className='text-xl 4xl:!text-3xl text-foreground underline'
            >
              hello@koren.digital
            </Link>
          </div>
        </HoverCircleWrapper>

        <div className='flex flex-col sm:flex-row justify-between items-center relative'>
          <div className='order-2 sm:order-1 text-center sm:text-start'>
            <p className='sm:text-xs 4xl:!text-base text-foreground'>
              [temporary website]
            </p>
          </div>
          <CalButton
            variant='outline'
            size='sm'
            className='rounded-full sm:absolute sm:left-1/2 sm:-translate-x-1/2 order-1 sm:order-2 mb-15 sm:mb-0'
          >
            <AnimatedText text='Schedule a meeting' className='leading-5' />
          </CalButton>
          <div className='order-3 sm:order-3 text-center sm:text-end'>
            <p className='sm:text-xs 4xl:!text-base text-foreground'>
              © 2024 Koren Studio | All rights reserved
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
