'use client';

import { Project } from '@/data';
import { projects } from '@/data';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Accordion } from '../ui/accordion';
import ProjectsGalleryMobile from './projects-gallery-mobile';

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<string>(
    projects[0].slug
  );
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return isDesktop ? (
    <section className='hidden lg:grid grid-cols-12 gap-11 py-5 h-full'>
      <div className='col-span-5 bg-grey-bg p-10 flex flex-col gap-20 justify-between rounded-2xl'>
        <h2 className='text-5xl text-foreground'>Recent projects:</h2>
        <div className='space-y-4'>
          {projects.map((project: Project) => (
            <p
              key={project.title}
              className={cn(
                'w-fit text-5xl font-light text-grey',
                selectedProject === project.slug &&
                  'text-black dark:text-accent'
              )}
              onMouseEnter={() => setSelectedProject(project.slug)}
            >
              {project.title}
            </p>
          ))}
        </div>
      </div>
      <div className='col-span-7 flex gap-8 px-10 py-12'>
        <Link
          href={
            projects.find((project) => project.slug === selectedProject)
              ?.link ?? ''
          }
          target='_blank'
          className={cn(buttonVariants({ variant: 'outline' }), 'rounded-full')}
        >
          Visit website
        </Link>
        <div className='w-full h-full aspect-[803/651] relative'>
          {projects.map((project: Project) => {
            const projectSlug = project.slug;

            return (
              <div
                key={projectSlug}
                className={`absolute inset-0 grid grid-cols-2 gap-5 group ${
                  selectedProject === project.slug && 'active'
                }`}
              >
                {project.images.map((image, index) => (
                  <ProjectImage
                    key={index}
                    src={image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                    isVisible={selectedProject === project.slug}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  ) : (
    <ProjectsGalleryMobile />
  );
};

const ProjectImage = ({
  src,
  alt,
  className,
  isVisible,
}: {
  src: string;
  alt: string;
  className?: string;
  isVisible: boolean;
}) => {
  return (
    <div
      className={cn(
        'relative w-full h-full aspect-[391/314.5] transition-all ease-out duration-[1200ms]',
        'opacity-0 invisible blur-xl',
        isVisible && 'opacity-100 visible blur-none'
      )}
    >
      <Image src={src} alt={alt} fill className={`${className} object-cover`} />
    </div>
  );
};
