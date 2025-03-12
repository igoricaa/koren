import { cn } from '@/lib/utils';

export const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const words = text.split(' ');
  let totalLetterIndex = 0;

  return (
    <div className={cn('overflow-clip group', className)}>
      <p className='text-shadow text-shadow-hover space-x-1'>
        {words.map((word, wordIndex) => (
          <span className='relative inline-block' key={wordIndex}>
            {word.split('').map((letter, letterIndex) => {
              const currentIndex = totalLetterIndex++;
              return (
                <span
                  className={cn(
                    'relative inline-block group-hover:-translate-y-[1.25rem] transition-transform duration-700 ease-[cubic-bezier(0.65,0.05,0,1)]'
                  )}
                  style={{
                    transitionDelay: `${((currentIndex * 0.015) / 3) * 2}s`,
                  }}
                  key={letterIndex}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        ))}
      </p>
    </div>
  );
};
