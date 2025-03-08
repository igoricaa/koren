import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-accent text-black hover:bg-accent/80',
        outline:
          'border border-black dark:border-accent bg-transparent text-black dark:text-accent hover:bg-black dark:hover:bg-accent hover:text-white dark:hover:text-accent-foreground',
        textual:
          'text-foreground dark:text-accent 4xl:text-2xl flex gap-1 relative after:content-[""] after:absolute after:bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-black dark:after:bg-accent rounded-none !p-0 !h-fit w-fit',
      },
      size: {
        default:
          'h-11 px-5 py-4 sm:h-12 sm:px-6 sm:py-4 lg:h-14 lg:px-10 lg:py-4',
        sm: 'h-12 px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
