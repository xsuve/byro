import type { Metadata } from 'next';
import { Logo } from '@/components/ui';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { getProcess } from '@/utils/db';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const process = await getProcess(params.slug);

  return {
    title: `Byro - Documente necesare ${process.title}`,
    description: `Documente necesare pentru ${process.title}`,
  };
}

export default function DocumenteNecesareSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className='px-24 pt-6'>
        <Link
          href='/documente-necesare'
          className='inline-flex items-center gap-x-6'>
          <ArrowLeftIcon className='w-6 h-6' />
          <Logo />
        </Link>
      </div>
      {children}
    </main>
  );
}
