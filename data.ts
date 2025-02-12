import ProductIcon from '@/components/ui/icons/services/product-icon';
import WebsiteIcon from './components/ui/icons/services/website-icon';
import AppIcon from './components/ui/icons/services/app-icon';
import DesignIcon from './components/ui/icons/services/design-icon';
import BrandIcon from './components/ui/icons/services/brand-icon';

export type Project = {
  slug: string;
  title: string;
  link: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: 'thundertopteam',
    title: 'thundertopteam.com',
    link: 'https://thundertopteam.com',
    images: ['/ttt/1.jpg', '/ttt/2.jpg', '/ttt/3.jpg', '/ttt/4.jpg'],
  },
  {
    slug: 'starvision',
    title: 'starvision.rs',
    link: 'https://starvision.rs',
    images: [
      '/starvision/1.jpg',
      '/starvision/2.jpg',
      '/starvision/3.jpg',
      '/starvision/4.jpg',
    ],
  },
];
export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
};

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'We build websites that are fast, secure, and easy to maintain. We build websites that are fast, secure, and easy to maintain. We build websites that are fast, secure, and easy to maintain.',
    icon: WebsiteIcon,
  },
  {
    slug: 'app-development',
    title: 'App Development',
    description:
      'We build apps that are fast, secure, and easy to maintain. We build apps that are fast, secure, and easy to maintain. We build apps that are fast, secure, and easy to maintain.',
    icon: AppIcon,
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'We design user interfaces that are easy to use and navigate. We design user interfaces that are easy to use and navigate. We design user interfaces that are easy to use and navigate.',
    icon: DesignIcon,
  },
  {
    slug: 'product-design',
    title: 'Product Design',
    description:
      'We design products that are easy to use and navigate. We design products that are easy to use and navigate. We design products that are easy to use and navigate.',
    icon: ProductIcon,
  },
  {
    slug: 'brand-design',
    title: 'Brand Design',
    description:
      'We design brands that are easy to use and navigate. We design brands that are easy to use and navigate. We design brands that are easy to use and navigate.',
    icon: BrandIcon,
  },
];
