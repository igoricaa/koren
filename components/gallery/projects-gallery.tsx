'use client';

import { categoryColors, Project } from '@/data';
import { projects } from '@/data';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/useMediaQuery';
import ProjectsGalleryMobile from './projects-gallery-mobile';
import { buttonVariants } from '../ui/button';
import ArrowIcon from '../ui/icons/arrow-icon';
import Link from 'next/link';

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [categoriesPositions, setCategoriesPositions] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { height, width, left, top } = ref.current!.getBoundingClientRect();
      const { clientX, clientY } = e;

      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      const moveX = (middleX / (width / 2)) * 3;
      const moveY = (middleY / height) * 5;

      setCategoriesPositions({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return isDesktop ? (
    <section className='hidden lg:grid grid-cols-12 gap-5 h-full'>
      <div className='col-span-5 bg-grey-bg py-10 px-6 flex flex-col gap-20 justify-between rounded-2xl'>
        <div className='flex justify-between items-center'>
          <p className='text-xl 4xl:text-3xl text-foreground'>
            Recent projects:
          </p>
          <Link
            href={selectedProject.link}
            target='_blank'
            className={cn(buttonVariants({ variant: 'textual' }), 'group')}
          >
            Visit website
            <ArrowIcon
              className='size-4 -rotate-45 group-hover:rotate-0 transition-all ease duration-300'
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
                  'w-fit text-3xl lg:text-4xl xl:text-[40px] 2xl:text-5xl 3xl:!text-6xl 4xl:!text-[64px] font-light text-grey whitespace-nowrap',
                  selectedProject.slug === project.slug &&
                    'text-black dark:text-accent'
                )}
              >
                {project.title}
              </h3>

              <div
                ref={ref}
                className='absolute top-0 left-0 w-full mr-auto h-[250%] -translate-y-1/4 rounded-lg pill-grid pointer-events-none z-20'
                style={{
                  transform: `translate(${categoriesPositions.x}px, ${categoriesPositions.y}px)`,
                }}
              >
                {project.categories.map((category, categoryIndex: number) => (
                  <span
                    key={category.name}
                    className={cn(
                      `absolute text-xxs xl:text-base px-2 xl:px-4 py-0.5 xl:py-1.5 rounded-4xl whitespace-nowrap scale-0 transition-all duration-300 ease`,
                      project.categoriesPositions[categoryIndex],

                      selectedProject.slug === project.slug && 'scale-100'
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
                className={`absolute inset-0 grid grid-cols-2 gap-5 group invisible opacity-0 ${
                  selectedProject.slug === project.slug && 'active visible opacity-100'
                }`}
              >
                {project.images.map((image, index) => (
                  <ProjectImage
                    key={index}
                    src={image}
                    alt={project.title}
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
