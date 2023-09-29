import clsx from 'clsx';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Byro - Documente necesare proceselor birocratice',
  description: 'Documente necesare proceselor birocratice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(poppins.className, 'antialiased text-sm text-primary')}
      >
        {children}
      </body>
    </html>
  );
}
