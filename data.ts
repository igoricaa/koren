import ProductIcon from '@/components/ui/icons/services/product-icon';
import WebsiteIcon from './components/ui/icons/services/website-icon';
import AppIcon from './components/ui/icons/services/app-icon';
import DesignIcon from './components/ui/icons/services/design-icon';
import BrandIcon from './components/ui/icons/services/brand-icon';

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
  color: string;
};

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'We build websites that are fast, secure, and easy to maintain. We build websites that are fast, secure, and easy to maintain. We build websites that are fast, secure, and easy to maintain.',
    icon: WebsiteIcon,
    color: 'web',
  },
  {
    slug: 'app-development',
    title: 'App Development',
    description:
      'We build apps that are fast, secure, and easy to maintain. We build apps that are fast, secure, and easy to maintain. We build apps that are fast, secure, and easy to maintain.',
    icon: AppIcon,
    color: 'app',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'We design user interfaces that are easy to use and navigate. We design user interfaces that are easy to use and navigate. We design user interfaces that are easy to use and navigate.',
    icon: DesignIcon,
    color: 'design',
  },
  {
    slug: 'product-design',
    title: 'Product Design',
    description:
      'We design products that are easy to use and navigate. We design products that are easy to use and navigate. We design products that are easy to use and navigate.',
    icon: ProductIcon,
    color: 'product',
  },
  {
    slug: 'brand-design',
    title: 'Brand Design',
    description:
      'We design brands that are easy to use and navigate. We design brands that are easy to use and navigate. We design brands that are easy to use and navigate.',
    icon: BrandIcon,
    color: 'brand',
  },
];

export const projectsTest = [
  {
    title: 'Matthias Leidinger',
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'rock.jpg',
    link: 'https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/',
    color: '#BBACAF',
  },
  {
    title: 'Clément Chapillon',
    description:
      'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).',
    src: 'tree.jpg',
    link: 'https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/',
    color: '#977F6D',
  },
  {
    title: 'Zissou',
    description:
      'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.',
    src: 'water.jpg',
    link: 'https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/',
    color: '#C2491D',
  },
  {
    title: 'Mathias Svold and Ulrik Hasemann',
    description:
      'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
    src: 'house.jpg',
    link: 'https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/',
    color: '#B62429',
  },
  {
    title: 'Mark Rammers',
    description:
      'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.',
    src: 'cactus.jpg',
    link: 'https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/',
    color: '#88A28D',
  },
];

export const categoryColors: {
  [key: string]: { text: string; background: string };
} = {
  web: { text: 'var(--color-dark-green)', background: 'var(--color-mint)' },
  brand: { text: 'var(--color-mint)', background: 'var(--color-dark-green)' },
  design: { text: 'var(--color-black)', background: 'var(--color-khaki)' },
  product: { text: 'var(--color-white)', background: 'var(--color-grey-5)' },
};

export type Project = {
  slug: string;
  title: string;
  link: string;
  categories: { name: string; slug: string }[];
  categoriesPositions: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    slug: 'thundertopteam',
    title: 'Thunder Top Team',
    link: 'https://thundertopteam.com',
    images: ['/ttt/1.jpg', '/ttt/2.jpg', '/ttt/3.jpg', '/ttt/4.jpg'],
    categories: [
      { name: 'Website Design & Dev', slug: 'web' },
      { name: 'UX/UI Design', slug: 'design' },
    ],
    categoriesPositions: [`-top- left-1`, 'top-2 -right-16'],
  },
  {
    slug: 'marija-volkman',
    title: 'Marija Volkman',
    link: 'https://marijavolkman.com/',
    categories: [
      { name: 'UX/UI Design', slug: 'design' },
      { name: 'Brand Design', slug: 'brand' },
      { name: 'Website Design & Dev', slug: 'web' },
    ],
    categoriesPositions: [
      `-top-0 left-16`,
      '-bottom-4 -right-20',
      '-bottom-5 left-0',
    ],
    images: [
      '/marija-volkman/1.jpg',
      '/marija-volkman/2.jpg',
      '/marija-volkman/3.jpg',
      '/marija-volkman/4.jpg',
    ],
  },
  {
    slug: 'forests-digital',
    title: 'Forests Digital',
    link: 'https://forests.digital',
    categories: [
      { name: 'Brand Design', slug: 'brand' },
      { name: 'Website Design & Dev', slug: 'web' },
      { name: 'UX/UI Design', slug: 'design' },
    ],
    categoriesPositions: [
      `-top-0 left-1/2 -translate-x-1/2`,
      '-bottom-4 -right-16',
      '-bottom-2 left-0',
    ],
    images: [
      '/forests-digital/1.jpg',
      '/forests-digital/2.jpg',
      '/forests-digital/3.jpg',
      '/forests-digital/4.jpg',
    ],
  },
  {
    slug: 'roger',
    title: 'Roger',
    link: 'https://roger.rs',
    categories: [
      { name: 'UX/UI Design', slug: 'design' },
      { name: 'Website Design & Dev', slug: 'web' },
      { name: 'Brand Design', slug: 'brand' },
    ],
    categoriesPositions: [
      `-top-2 left-1/2 -translate-x-1/2`,
      'top-6 -right-50',
      '-bottom-5 right-1/5',
    ],
    images: ['/roger/1.jpg', '/roger/2.jpg', '/roger/3.jpg', '/roger/4.jpg'],
  },
  {
    slug: 'hirurgija-djokovic',
    title: 'Hirurgija dr. Djokovic',
    link: 'https://hirurgijadrdjokovic.com/',
    categories: [
      { name: 'Website Design & Dev', slug: 'web' },
      { name: 'Brand Design', slug: 'brand' },
      { name: 'UX/UI Design', slug: 'design' },
    ],
    categoriesPositions: [
      `-top-2 left-1/2 -translate-x-1/2`,
      '-top-0 -right-16',
      '-bottom-7 right-1/5',
    ],
    images: [
      '/hirurgija-djokovic/1.jpg',
      '/hirurgija-djokovic/2.jpg',
      '/hirurgija-djokovic/3.jpg',
      '/hirurgija-djokovic/4.jpg',
    ],
  },
  {
    slug: 'lybah',
    title: 'LYBAH',
    link: 'https://lybah.rs',
    categories: [
      { name: 'Website Design & Dev', slug: 'web' },
      { name: 'Brand Design', slug: 'brand' },
      { name: 'UX/UI Design', slug: 'design' },
    ],
    categoriesPositions: [
      `-top-3 left-1/2 -translate-x-1/2`,
      'bottom-4 -right-36',
      '-bottom-4 right-1/5',
    ],
    images: ['/lybah/1.jpg', '/lybah/2.jpg', '/lybah/3.jpg', '/lybah/4.jpg'],
  },

  {
    slug: 'realvibe-studio',
    title: 'RealVibe Studio',
    link: 'https://realvibestudio.com',
    categories: [
      { name: 'UX/UI Design', slug: 'design' },
      { name: 'Website Design & Dev', slug: 'web' },
    ],
    categoriesPositions: [
      `-top-2 left-1/2 -translate-x-1/2`,
      '-bottom-0 -right-16',
    ],
    images: [
      '/realvibe-studio/1.jpg',
      '/realvibe-studio/2.jpg',
      '/realvibe-studio/3.jpg',
      '/realvibe-studio/4.jpg',
    ],
  },
  {
    slug: 'savadeck',
    title: 'Savadeck',
    link: 'https://savadeck.com',
    categories: [
      { name: 'Brand Design', slug: 'brand' },
      { name: 'UX/UI Design', slug: 'design' },
      { name: 'Product Design', slug: 'product' },
      { name: 'Website Design & Dev', slug: 'web' },
    ],
    categoriesPositions: [
      `-top-2 -left-2`,
      '-top-0 -right-16',
      'bottom-4 left-0',
      '-bottom-1 -right-16',
    ],
    images: [
      '/savadeck/1.jpg',
      '/savadeck/2.jpg',
      '/savadeck/3.jpg',
      '/savadeck/4.jpg',
    ],
  },
];

export const projectColors: {
  [key: string]: string;
} = {
  web: 'var(--color-grey-1)',
  app: 'var(--color-grey-2)',
  design: 'var(--color-grey-3)',
  product: 'var(--color-grey-4)',
  brand: 'var(--color-grey-5)',
};
