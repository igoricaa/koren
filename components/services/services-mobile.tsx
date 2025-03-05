import Link from 'next/link';
import { projectColors, Service, services } from '@/data';
import { cn } from '@/lib/utils';

const Services = () => {
  return (
    <section className='lg:hidden col-span-full mb-5'>
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
        className={cn(
          `w-full h-[500px] relative px-5 pt-6 pb-9 rounded-2xl flex flex-col justify-between`
        )}
        style={{
          backgroundColor: projectColors[service.color],
          top: `calc(-15% + ${index * 5}rem)`,
        }}
      >
        <div>
          <h2 className='text-3xl text-white'>{service.title}</h2>
          <div className='mt-5'>
            <service.icon />
          </div>
        </div>
        <div>
          <p className='text-lg sm:text-xl text-white'>{service.description}</p>
          <Link
            href='#'
            className='text-lg sm:text-xl text-white dark:text-accent underline mt-9 block'
          >
            Schedule a meeting
          </Link>
        </div>
      </div>
    </article>
  );
};
