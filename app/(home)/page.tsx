import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/icons/logo';
import { ProjectGallery } from '@/components/gallery/projects-gallery';
import Services from '@/components/services/services';

export default function Home() {
  return (
    <main className='bg-background px-side '>
      {/* Hero Section */}
      <section className='grid grid-cols-12 gap-11 pb-5 h-full max-h-[750px]'>
        <div className='col-span-5 bg-black dark:bg-grey-bg p-12 rounded-2xl flex flex-col justify-between relative'>
          <Image
            src='/roots-bg.png'
            alt='Koren Studio'
            fill
            priority
            className='object-cover'
          />
          <h1 className='text-7xl font-light text-white mb-8'>
            Deeply rooted.
          </h1>
          <p className='text-white/70 text-3xl max-w-[75%]'>
            We're a creative studio that builds purposeful digital products —
            from creative websites to robust e-commerce solutions, web apps, and
            mobile applications, we deliver seamless experiences.
          </p>
        </div>

        <Services />
      </section>

      <ProjectGallery />

      {/* Contact Section */}
      <section className='bg-grey-bg rounded-t-2xl mt-5 px-side pt-8 pb-6'>
        <div className='flex justify-between items-center relative'>
          <div>
            <p className='text-sm text-foreground'>Design & Development</p>
            <p className='text-sm text-foreground'>Creative Studio</p>
          </div>
          <Logo className='absolute left-1/2 -translate-x-1/2' size={115} />
          <div className='text-end'>
            <p className='text-sm text-foreground'>Available for projects</p>
            <p className='text-sm text-foreground'>January 2025</p>
          </div>
        </div>
        <div className='text-center mt-40 mb-28'>
          <h2 className='text-7xl mb-11'>
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
        <div className='flex justify-between items-center relative'>
          <div>
            <p className='text-sm text-foreground'>
              Design: <span className='underline'>Nikola</span>
            </p>
            <p className='text-sm text-foreground'>
              Development: <span className='underline'>Igor</span>
            </p>
          </div>
          <Button
            variant='outline'
            size='sm'
            className='rounded-full absolute left-1/2 -translate-x-1/2'
          >
            Schedule a meeting
          </Button>
          <div className='text-end'>
            <p className='text-sm text-foreground'>[temporary website]</p>
            <p className='text-sm text-foreground'>
              © 2024 Koren Studio | All rights reserved
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
