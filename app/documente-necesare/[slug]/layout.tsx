import type { Metadata } from 'next';
import { Heading, Logo } from '@/components/ui';
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
    title: `Byro - Documente necesare ${process.title.toLowerCase()}`,
    description: `Documente necesare pentru ${process.title.toLowerCase()}`,
  };
}

export default function DocumenteNecesareSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className='px-24 pt-6 flex justify-between'>
        <Link
          href='/documente-necesare'
          className='inline-flex items-center gap-x-4'
        >
          <ArrowLeftIcon className='w-6 h-6' />
          <Heading type='section'>Procese</Heading>
        </Link>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      {children}
    </main>
  );
}
