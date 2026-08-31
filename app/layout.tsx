import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://2d0ts.github.io/18th/'),
  title: '18 Months Under the City Lights',
  description: 'A little monthsary letter for Bubbyy, beneath the city lights.',
  openGraph: {
    title: '18 Months Under the City Lights',
    description: 'A little monthsary letter for Bubbyy, beneath the city lights.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: '18 Months Under the City Lights — For my Bubbyy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '18 Months Under the City Lights',
    description: 'A little monthsary letter for Bubbyy, beneath the city lights.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
