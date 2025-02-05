import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductIcon from '@/components/ui/icons/product-icon';
import Logo from '@/components/ui/icons/logo';

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

        {/* Services Section */}
        <div className='col-span-7 bg-grey-bg p-10 rounded-2xl flex justify-between gap-8'>
          <div className='flex flex-col gap-16 justify-between h-full mt-2'>
            <h2 className='text-5xl text-foreground'>What we do:</h2>
            <div className='space-y-4 mt-auto'>
              <h3 className='text-5xl font-light text-grey'>Web development</h3>
              <h3 className='text-5xl font-light text-grey'>App development</h3>
              <h3 className='text-5xl font-light text-grey'>UI/UX Design</h3>
              <h3 className='text-5xl font-light text-grey'>Product Design</h3>
              <h3 className='text-5xl font-light text-grey'>Brand Design</h3>
            </div>
          </div>
          <div className='flex flex-col gap-16 justify-between h-full rounded-2xl bg-black/75 p-10 w-4/10'>
            <ProductIcon />
            <div>
              <p className='text-white text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href='#'
                className='text-xl text-white dark:text-accent underline mt-16 block'
              >
                Schedula a meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='grid grid-cols-12 gap-11 py-5 h-full'>
        <div className='col-span-5 bg-grey-bg p-10 flex flex-col gap-20 justify-between rounded-2xl'>
          <h2 className='text-5xl text-foreground'>Recent projects:</h2>
          <div className='space-y-4'>
            <p className='text-5xl font-light text-grey'>savadeck.com</p>
            <p className='text-5xl font-light text-grey'>marijavolkman.com</p>
            <p className='text-5xl font-light text-grey'>roger.rs</p>
            <p className='text-5xl font-light text-grey'>bopa.rs</p>
            <p className='text-5xl font-light text-grey'>forests.digital</p>
            <p className='text-5xl font-light text-grey'>realvibestudio.com</p>
            <p className='text-5xl font-light text-grey'>
              hirurgijadrdjokovice.com
            </p>
          </div>
        </div>
        <div className='col-span-7 flex gap-8 px-10 py-12'>
          <Button variant='outline' size='sm' className='rounded-full'>
            Visit website
          </Button>
          <div className='grid grid-cols-2 gap-5 w-full'>
            <div className='relative w-full h-full aspect-[391/314.5]'>
              <Image
                src='/1.jpg'
                alt='Project 1'
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='relative w-full h-full aspect-[391/314.5]'>
              {' '}
              <Image
                src='/2.jpg'
                alt='Project 1'
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='relative w-full h-full aspect-[391/314.5]'>
              {' '}
              <Image
                src='/3.jpg'
                alt='Project 1'
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='relative w-full h-full aspect-[391/314.5]'>
              {' '}
              <Image
                src='/4.jpg'
                alt='Project 1'
                fill
                className='rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='bg-grey-bg rounded-t-2xl mt-5 px-side pt-8 pb-6'>
        <div className='flex justify-between items-center relative'>
          <div>
            <p className='text-sm text-foreground'>Design & Development</p>
            <p className='text-sm text-foreground'>Creative Studio</p>
          </div>
          <Logo className='absolute left-1/2 -translate-x-1/2' />
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
            <p className='text-sm text-foreground'>Design: Nikola</p>
            <p className='text-sm text-foreground'>Development: Igor</p>
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
