'use client';

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
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import ArrowIcon from '../ui/icons/arrow-icon';

const ProjectsGalleryMobile = () => {
  const [marginTop, setMarginTop] = useState('160px');
  const [activeAccordion, setActiveAccordion] = useState(projects[0].slug);
  const accordionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const setMargin = () => {
      const height = window.innerHeight;
      const referenceHeight = 810;
      let marginTop = Math.max(70, (referenceHeight - height) * 1.2) + 'px';

      if (height > referenceHeight) {
        marginTop = (referenceHeight - height) * 1 + 'px';
      }

      setMarginTop(marginTop);
    };

    setMargin();
  }, []);

  const handleAccordionToggle = (value: string) => {
    setActiveAccordion(value);

    if (value && value !== '') {
      setTimeout(() => {
        accordionRefs.current[value]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 150);
    }
  };

  return (
    <section
      className={cn('lg:hidden bg-grey-bg px-side py-6 rounded-2xl')}
      style={{
        marginTop: marginTop,
      }}
    >
      <p className='text-2xl'>Recent projects</p>
      <Accordion
        type='single'
        collapsible
        className='mt-4'
        defaultValue={projects[0].slug}
        value={activeAccordion}
        onValueChange={handleAccordionToggle}
      >
        {projects.map((project) => (
          <AccordionItem
            key={project.slug}
            value={project.slug}
            ref={(el) => {
              accordionRefs.current[project.slug] = el;
            }}
          >
            <AccordionTrigger className='text-[26px] xs:text-3xl whitespace-nowrap'>
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
                className={cn(buttonVariants({ variant: 'textual' }), 'mt-8')}
              >
                Visit website
                <ArrowIcon
                  className='size-4 -rotate-45'
                  pathClassName='stroke-black dark:stroke-accent'
                />
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
        'relative w-full aspect-[391/315] transition-all ease-out duration-[1200ms]'
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='50vw'
        className={`${className} object-cover rounded-xl`}
      />
    </div>
  );
};
