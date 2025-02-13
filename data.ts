import ProductIcon from '@/components/ui/icons/services/product-icon';
import WebsiteIcon from './components/ui/icons/services/website-icon';
import AppIcon from './components/ui/icons/services/app-icon';
import DesignIcon from './components/ui/icons/services/design-icon';
import BrandIcon from './components/ui/icons/services/brand-icon';

export type Project = {
  slug: string;
  title: string;
  link: string;
  categories: { name: string; slug: string }[];
  images: string[];
};

export const projects: Project[] = [
  {
    slug: 'thundertopteam',
    title: 'thundertopteam.com',
    link: 'https://thundertopteam.com',
    images: ['/ttt/1.jpg', '/ttt/2.jpg', '/ttt/3.jpg', '/ttt/4.jpg'],
    categories: [
      { name: 'Web Development', slug: 'web' },
      { name: 'UI/UX Design', slug: 'design' },
    ],
  },
  {
    slug: 'starvision',
    title: 'starvision.rs',
    link: 'https://starvision.rs',
    categories: [
      { name: 'Web Development', slug: 'web' },
      { name: 'UI/UX Design', slug: 'design' },
    ],
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
