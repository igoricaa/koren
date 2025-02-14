'use client';

import { categoryColors, Project } from '@/data';
import { projects } from '@/data';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import useMediaQuery from '@/hooks/useMediaQuery';
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
        <div className='space-y-6'>
          {projects.map((project: Project) => (
            <div
              key={project.title}
              onMouseEnter={() => setSelectedProject(project.slug)}
              className='relative w-fit'
            >
              <p
                className={cn(
                  'w-fit text-5xl font-light text-grey whitespace-nowrap',
                  selectedProject === project.slug &&
                    'text-black dark:text-accent'
                )}
              >
                {project.title}
              </p>

              {project.categories.map((category, categoryIndex: number) => (
                <span
                  key={category.name}
                  className={cn(
                    `absolute text-[13px] px-4 py-1 rounded-4xl whitespace-nowrap opacity-0 invisible transition-all duration-200 ease translate-y-2`,
                    categoryIndex === 0
                      ? `-top-6 left-1/2 -translate-x-1/2`
                      : categoryIndex === 1
                      ? `-top-3 -right-16`
                      : `-bottom-6 right-1/5`,
                    selectedProject === project.slug &&
                      'opacity-100 visible translate-y-0'
                  )}
                  style={{
                    backgroundColor: categoryColors[category.slug].background,
                    color: categoryColors[category.slug].text,
                    transitionDelay: `${categoryIndex * 60}ms`,
                  }}
                >
                  {category.name}
                </span>
              ))}
            </div>
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
