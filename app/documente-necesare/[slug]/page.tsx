import { Steps } from '@/components';
import { getDocuments, getProcess } from '@/utils/db';

export default async function DocumenteNecesareSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const process = await getProcess(params.slug);
  const documents = await getDocuments();

  return (
    <div className='2xl:px-12 xl:px-12 px-6 py-12 w-full'>
      <Steps steps={process.steps} documents={documents} />
    </div>
  );
}
