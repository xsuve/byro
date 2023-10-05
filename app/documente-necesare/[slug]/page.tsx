import { Steps } from '@/components';
import { getProcess } from '@/utils/db';

export default async function DocumenteNecesareSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const process = await getProcess(params.slug);

  return (
    <div className='2xl:px-24 xl:px-12 px-6 py-12 w-full'>
      <Steps steps={process.steps} />
    </div>
  );
}
