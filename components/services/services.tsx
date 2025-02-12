'use client';

import Link from 'next/link';
import { Service, services } from '@/data';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Services = () => {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <section className='col-span-7 bg-grey-bg p-10 rounded-2xl flex justify-between gap-8'>
      <div className='flex flex-col gap-16 justify-between h-full mt-2'>
        <p className='text-5xl text-foreground'>What we do:</p>
        <div className='space-y-4 mt-auto'>
          {services.map((service, index) => (
            <h2
              key={service.slug}
              className='text-5xl font-light text-grey hover:text-black dark:hover:text-accent'
              onMouseEnter={() => setActiveService(index)}
            >
              {service.title}
            </h2>
          ))}
        </div>
      </div>
      <div className='relative w-4/10 h-full'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            isActive={activeService === index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({
  service,
  isActive,
}: {
  service: Service;
  isActive: boolean;
}) => {
  return (
    <article
      className={cn(
        'absolute inset-0 flex flex-col gap-16 justify-between rounded-2xl bg-black/75 p-10 transition-all ease-out duration-[1200ms] opacity-0 invisible',
        isActive && 'opacity-100 visible'
      )}
    >
      <div
        className={cn(
          'transition-all ease-out duration-[1200ms] opacity-0 invisible blur-xl',
          isActive && 'opacity-100 visible blur-none'
        )}
      >
        <service.icon />
      </div>
      <div>
        <p
          className={cn(
            'text-white text-xl transition-all ease-out duration-[1200ms] opacity-0 invisible blur-xl',
            isActive && 'opacity-100 visible blur-none'
          )}
        >
          {service.description}
        </p>
        <Link
          href='#'
          className='text-xl text-white dark:text-accent underline mt-16 block'
        >
          Schedule a meeting
        </Link>
      </div>
    </article>
  );
};
