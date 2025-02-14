import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Lenis from '@/components/lenis';

const ttcommons = localFont({
  src: [
    {
      path: '../fonts/TTCommons-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-ttcommons',
});

const neuemontreal = localFont({
  src: [
    {
      path: '../fonts/NeueMontreal-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-neuemontreal',
});

const bigdailyshort = localFont({
  src: [
    {
      path: '../fonts/BigDailyShort-Light.woff2',
      weight: '300',
    },
  ],
  variable: '--font-bigdailyshort',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://koren.digital'),

  title: {
    default: 'Koren Studio',
    template: '%s | Koren Studio',
  },
  description:
    'Koren Studio is a dynamic creative studio specializing in video, photo and animation production.',
  openGraph: {
    title: 'Koren Studio',
    description:
      'Koren Studio is a dynamic creative studio specializing in video, photo and animation production.',
    url: 'https://koren.digital',
    siteName: 'Koren Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Koren Studio',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${ttcommons.variable} ${neuemontreal.variable} ${bigdailyshort.variable} antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Lenis>
            <Header />
            {children}
          </Lenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
