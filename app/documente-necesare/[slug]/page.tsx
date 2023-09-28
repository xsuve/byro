import { Section } from '@/components';
import { getProcess } from '@/utils/db';

export default async function DocumenteNecesareSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const process = await getProcess(params.slug);

  return (
    <Section title={process.title} text={process.description}>
      text
    </Section>
  );
}
