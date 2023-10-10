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
    'Verifică documentele necesare pentru orice proces în România, de la înmatriculare autovehicul sau schimbare buletin și pana la eliberare pașaport.',
  keywords: 'documente necesare, acte necesare',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GoogleAnalytics />
      <body
        className={clsx(poppins.className, 'antialiased text-sm text-primary')}>
        {children}
      </body>
    </html>
  );
}
