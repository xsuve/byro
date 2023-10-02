import type { Metadata } from 'next';
import { Heading, Text, Logo } from '@/components/ui';
import { ArrowLeftIcon, FlagIcon } from '@heroicons/react/24/outline';
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
        <div className='flex items-center gap-x-12'>
          <Link
            href='/documente-necesare'
            className='flex items-center gap-x-4'
          >
            <ArrowLeftIcon className='w-6 h-6' />
            <Heading type='section'>Procese</Heading>
          </Link>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <Link href='/contact' className='flex items-center gap-x-4'>
          <FlagIcon className='w-6 h-6' />
          <Text type='primary-bold'>Raportează o problemă</Text>
        </Link>
      </div>
      {children}
    </main>
  );
}
