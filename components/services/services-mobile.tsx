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

const Card = ({ service, index }: { service: Service; index: number }) => {
  return (
    <article className='w-full h-screen flex items-center justify-center sticky top-0'>
      <div
        className={cn(`w-full h-[500px] relative px-5 pt-6 pb-9 rounded-2xl `)}
        style={{
          backgroundColor: `var(--color-${service.color})`,
          top: `calc(-15% + ${index * 5}rem)`,
        }}
      >
        <h2 className='text-3xl text-black dark:text-accent'>
          {service.title}
        </h2>
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
