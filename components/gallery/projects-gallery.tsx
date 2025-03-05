'use client';

import { categoryColors, Project } from '@/data';
import { projects } from '@/data';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/useMediaQuery';
import ProjectsGalleryMobile from './projects-gallery-mobile';

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<string>(
    projects[0].slug
  );
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return isDesktop ? (
    <section className='hidden lg:grid grid-cols-12 gap-5 h-full'>
      <div className='col-span-5 bg-grey-bg py-10 px-6 flex flex-col gap-20 justify-between rounded-2xl'>
        <p className='text-xl text-foreground'>Recent projects:</p>
        <div className='space-y-4'>
          {projects.map((project: Project) => (
            <div
              key={project.title}
              onMouseEnter={() => setSelectedProject(project.slug)}
              className='relative w-fit'
            >
              <h3
                className={cn(
                  'w-fit text-3xl font-light text-grey whitespace-nowrap',
                  selectedProject === project.slug &&
                    'text-black dark:text-accent'
                )}
              >
                {project.title}
              </h3>

              {project.categories.map((category, categoryIndex: number) => (
                <span
                  key={category.name}
                  className={cn(
                    `absolute text-xxs px-2 py-0.5 rounded-4xl whitespace-nowrap opacity-0 invisible transition-all duration-200 ease translate-y-2`,
                    categoryIndex === 0
                      ? `-top-4 left-1/2 -translate-x-1/2`
                      : categoryIndex === 1
                      ? `-top-2 -right-16`
                      : `-bottom-5 right-1/5`,
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
      <div className='col-span-7 flex gap-5'>
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
        'relative w-full h-full aspect-[391/314.5] transition-all ease-out duration-[1200ms] rounded-[10px] overflow-hidden',
        'opacity-0 invisible blur',
        isVisible && 'opacity-100 visible blur-none'
      )}
    >
      <Image src={src} alt={alt} fill className={`${className} object-cover`} />
    </div>
  );
};
