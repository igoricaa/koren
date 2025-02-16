import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { categoryColors, projects } from '@/data';
import Image from 'next/image';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';

const ProjectsGalleryMobile = () => {
  return (
    <section className='lg:hidden bg-grey-bg px-side py-4 rounded-2xl'>
      <p className='text-2xl'>Recent projects</p>
      <Accordion type='single' collapsible className='mt-4'>
        {projects.map((project) => (
          <AccordionItem key={project.slug} value={project.slug}>
            <AccordionTrigger className='text-3xl whitespace-nowrap'>
              {project.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className='mt-1 mb-3 flex gap-2'>
                {project.categories.map((category) => (
                  <span
                    key={category.name}
                    className='text-[13px] px-4 py-1 rounded-4xl whitespace-nowrap'
                    style={{
                      backgroundColor: categoryColors[category.slug].background,
                      color: categoryColors[category.slug].text,
                    }}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              <div className='grid grid-cols-2 gap-2'>
                {project.images.map((image) => (
                  <ProjectImage key={image} src={image} alt={project.title} />
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
