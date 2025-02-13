import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { projects } from '@/data';
import Image from 'next/image';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';

const colors: {
  [key: string]: { text: string; background: string };
} = {
  web: { text: 'var(--color-dark-green)', background: 'var(--color-mint)' },
  brand: { text: 'var(--color-mint)', background: 'var(--color-dark-green)' },
  design: { text: 'var(--color-black)', background: 'var(--color-khaki)' },
};
const ProjectsGalleryMobile = () => {
  return (
    <section className='lg:hidden bg-grey-bg px-side py-4 rounded-2xl'>
      <h3 className='text-2xl'>Recent projects</h3>
      <Accordion type='single' collapsible className='mt-4'>
        {projects.map((project) => (
          <AccordionItem key={project.slug} value={project.slug}>
            <AccordionTrigger className='text-3xl'>
              {project.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className='mt-1 mb-3 flex gap-2'>
                {project.categories.map((category) => (
                  <span
                    key={category.name}
                    className='text-[13px] px-4 py-1 rounded-4xl '
                    style={{
                      backgroundColor: colors[category.slug].background,
                      color: colors[category.slug].text,
                    }}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              <div className='grid grid-cols-2 gap-2'>
                {project.images.map((image) => (
                  <ProjectImage
                    key={image}
                    src={image}
                    alt={project.title}
                  />
                ))}
              </div>
              <Link
                href={project.link}
                target='_blank'
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'rounded-full w-full mt-9'
                )}
              >
                Visit website
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ProjectsGalleryMobile;

const ProjectImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative w-full h-full aspect-[391/314.5] transition-all ease-out duration-[1200ms]'
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} object-cover rounded-xl`}
      />
    </div>
  );
};
