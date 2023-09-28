import '../../globals.css';
import type { Metadata } from 'next';
import { Logo } from '@/components/ui';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Byro - Proces',
  description: 'Documente necesare proceselor birocratice',
};

export default function ProcessesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className='px-24 pt-12'>
        <Link href='/procese' className='inline-flex items-center gap-x-6'>
          <ArrowLeftIcon className='w-6 h-6' />
          <Logo />
        </Link>
      </div>
      {children}
    </main>
  );
}
