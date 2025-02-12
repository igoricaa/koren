export type Project = {
  slug: string;
  title: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: 'thundertopteam',
    title: 'thundertopteam.com',
    images: ['/ttt/1.jpg', '/ttt/2.jpg', '/ttt/3.jpg', '/ttt/4.jpg'],
  },
  {
    slug: 'starvision',
    title: 'starvision.rs',
    images: [
      '/starvision/1.jpg',
      '/starvision/2.jpg',
      '/starvision/3.jpg',
      '/starvision/4.jpg',
    ],
  },
];
