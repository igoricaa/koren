'use client';

import { categoryColors, Project } from '@/data';
import { projects } from '@/data';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/useMediaQuery';
import ProjectsGalleryMobile from './projects-gallery-mobile';
import { Button, buttonVariants } from '../ui/button';
import ArrowIcon from '../ui/icons/arrow-icon';
import Link from 'next/link';

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return isDesktop ? (
    <section className='hidden lg:grid grid-cols-12 gap-5 h-full'>
      <div className='col-span-5 bg-grey-bg py-10 px-6 flex flex-col gap-20 justify-between rounded-2xl'>
        <div className='flex justify-between items-center'>
          <p className='text-xl 3xl:text-3xl text-foreground'>
            Recent projects:
          </p>
          <Link
            href={selectedProject.link}
            target='_blank'
            className={cn(buttonVariants({ variant: 'textual' }))}
          >
            Visit website
            <ArrowIcon
              className='size-4 -rotate-45'
              pathClassName='stroke-black dark:stroke-accent'
            />
          </Link>
        </div>
        <div className='space-y-4'>
          {projects.map((project: Project) => (
            <div
              key={project.title}
              onMouseEnter={() => setSelectedProject(project)}
              className='relative w-fit'
            >
              <h3
                className={cn(
                  'w-fit text-3xl 3xl:text-5xl font-light text-grey whitespace-nowrap',
                  selectedProject.slug === project.slug &&
                    'text-black dark:text-accent'
                )}
              >
                {project.title}
              </h3>

              <div className='absolute top-0 left-0 w-5/6 mr-auto h-[250%] -translate-y-1/4 rounded-lg pill-grid pointer-events-none z-20'>
                {project.categories.map((category, categoryIndex: number) => (
                  <span
                    key={category.name}
                    className={cn(
                      `absolute text-xxs 3xl:text-base px-2 3xl:px-4 py-0.5 3xl:py-1 rounded-4xl whitespace-nowrap scale-0 transition-all duration-300 ease`,
                      categoryIndex === 0
                        ? `-top-4 left-1/2 -translate-x-1/2`
                        : categoryIndex === 1
                        ? `-top-2 -right-16`
                        : `-bottom-5 right-1/5`,
                      selectedProject.slug === project.slug &&
                        'scale-100'
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
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-7 flex gap-5'>
        <div className='w-full h-full aspect-[803/651] relative'>
          {projects.map((project: Project) => {
            const projectSlug = project.slug;

            return (
              <div
                key={projectSlug}
                className={`absolute inset-0 grid grid-cols-2 gap-5 group ${
                  selectedProject.slug === project.slug && 'active'
                }`}
              >
                {project.images.map((image, index) => (
                  <ProjectImage
                    key={index}
                    src={image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                    isVisible={selectedProject.slug === project.slug}
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
        'relative w-full aspect-[391/315] transition-all ease-out duration-[1200ms] rounded-[10px] overflow-hidden',
        'opacity-0 invisible blur',
        isVisible && 'opacity-100 visible blur-none'
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='35vw'
        className={`${className} object-cover`}
      />
    </div>
  );
};
