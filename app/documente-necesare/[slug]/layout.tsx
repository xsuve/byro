import type { Metadata } from 'next';
import { getProcess } from '@/utils/db';
import { Side } from '@/components';

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

export default async function DocumenteNecesareSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const process = await getProcess(params.slug);

  return (
    <main className='2xl:h-screen bg-white grid 2xl:grid-cols-3 grid-cols-1'>
      <div className='col-span-1 flex'>
        <Side process={process} />
      </div>
      <div className='col-span-2 flex'>{children}</div>
    </main>
  );
}
