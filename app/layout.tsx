import clsx from 'clsx';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@/components';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Byro - Documente și acte necesare proceselor birocratice în România',
  description:
    'Verifică documentele necesare pentru orice proces în România - Înmatriculare autovehicul, schimbare buletin, eliberare pașaport și multe altele.',
  keywords:
    'documente necesare, acte necesare, inmatriculare auto, schimbare buletin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='XVEbn4hMfszAwogzxk5BGgErMPNNwkHWO20cD9Dq5es'
        />
        <GoogleAnalytics />
      </head>
      <body
        className={clsx(poppins.className, 'antialiased text-sm text-primary')}>
        {children}
      </body>
    </html>
  );
}
