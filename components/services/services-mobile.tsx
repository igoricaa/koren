import Link from 'next/link';
import { Service, services } from '@/data';
import { cn } from '@/lib/utils';

const Services = () => {
  return (
    <section className='lg:hidden col-span-full mb-[5vh]'>
      {services.map((service, index) => {
        return <Card key={index} service={service} index={index} />;
      })}
    </section>
  );
};

export default Services;

const colors: {
  [key: string]: string;
} = {
  web: 'var(--color-grey-1)',
  app: 'var(--color-grey-2)',
  design: 'var(--color-grey-3)',
  product: 'var(--color-grey-4)',
  brand: 'var(--color-grey-5)',
};

const Card = ({ service, index }: { service: Service; index: number }) => {
  return (
    <article className='w-full h-screen flex items-center justify-center sticky top-0'>
      <div
        className={cn(`w-full h-[500px] relative px-5 pt-6 pb-9 rounded-2xl `)}
        style={{
          backgroundColor: colors[service.color],
          top: `calc(-15% + ${index * 5}rem)`,
        }}
      >
        <h2 className='text-3xl text-white'>{service.title}</h2>
        <div className='my-10'>
          <service.icon />
        </div>
        <p className='text-xl text-white'>{service.description}</p>
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
