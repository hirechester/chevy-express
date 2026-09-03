import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const socialImage = siteUrl ? new URL('/og.png', siteUrl).toString() : undefined;

export const metadata: Metadata = {
  title: '2012 Chevrolet Express 3500 for Sale',
  description: 'Private-party listing for a 2012 Chevrolet Express 3500. View details, condition, maintenance history, and photos.',
  openGraph: {
    title: '2012 Chevrolet Express 3500 for Sale',
    description: 'Private-party listing with vehicle details, condition, maintenance history, and photos.',
    type: 'website',
    ...(socialImage ? { images: [{ url: socialImage, width: 1200, height: 630 }] } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: '2012 Chevrolet Express 3500 for Sale',
    description: 'Private-party listing with vehicle details, condition, maintenance history, and photos.',
    ...(socialImage ? { images: [socialImage] } : {}),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
