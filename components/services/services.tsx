'use client';

import { projectColors, Service, services } from '@/data';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/useMediaQuery';

const Services = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return isDesktop ? (
    <section className='hidden lg:flex flex-col justify-between gap-8 col-span-7 bg-grey-bg px-6 pt-10 pb-6 rounded-2xl'>
      <div className='flex flex-col gap-5 mt-2'>
        <p className='text-2xl 3xl:text-3xl text-foreground'>What we do:</p>
        <div className='flex flex-col gap-[10px]'>
          <div className='mt-auto flex flex-wrap gap-[10px]'>
            {services.slice(0, 2).map((service, index) => (
              <h2
                key={service.slug}
                className={cn(
                  `text-lg font-neue text-grey hover:text-dark-green hover:bg-accent whitespace-nowrap border-1 border-grey hover:border-accent rounded-full px-6 py-[10px] transition-all ease-out duration-200`,
                  activeService === index &&
                    'text-dark-green bg-accent border-accent'
                )}
                onMouseEnter={() => setActiveService(index)}
              >
                {service.title}
              </h2>
            ))}
          </div>
          <div className='mt-auto flex flex-wrap gap-[10px]'>
            {services.slice(2).map((service, index) => (
              <h2
                key={service.slug}
                className={cn(
                  `text-lg font-neue text-grey hover:text-dark-green hover:bg-accent whitespace-nowrap border-1 border-grey hover:border-accent rounded-full px-6 py-[10px] transition-all ease-out duration-200`,
                  activeService === index + 2 &&
                    'text-dark-green bg-accent border-accent'
                )}
                onMouseEnter={() => setActiveService(index + 2)}
              >
                {service.title}
              </h2>
            ))}
          </div>
        </div>
      </div>
      <div className='relative w-full h-full'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            isActive={activeService === index}
          />
        ))}
      </div>
    </section>
  ) : null;
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
        'absolute inset-0 flex flex-col gap-16 h-full justify-between rounded-2xl p-6 transition-all ease-out duration-500 opacity-0',
        isActive && 'opacity-100'
      )}
      style={{
        backgroundColor: projectColors[service.color],
      }}
    >
      <div
        className={cn(
          'transition-all ease-out duration-500 opacity-0 ',
          isActive && 'opacity-100'
        )}
      >
        <service.icon className='size-15' />
      </div>
      <div>
        <p
          className={cn(
            'text-white text-lg 3xl:text-2xl transition-all ease-out duration-500 opacity-0',
            isActive && 'opacity-100'
          )}
        >
          {service.description}
        </p>
      </div>
    </article>
  );
};
