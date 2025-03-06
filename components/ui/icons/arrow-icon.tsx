import { cn } from '@/lib/utils';

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  pathClassName?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  className,
  pathClassName,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='17'
    height='18'
    fill='none'
    viewBox='0 0 17 18'
    className={cn(className)}
    {...props}
  >
    <path
      className={cn(pathClassName)}
      // stroke="#1C1C1C"
      d='M7.778 1.222 15.556 9l-7.778 7.778M15.547 9.24H.652'
    ></path>
  </svg>
);

export default ArrowIcon;
