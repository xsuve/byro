import { Nav, Process, Section } from '@/components';
import db from '../../public/db.json';
import { Metadata } from 'next';
import { Heading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Byro - Documente și acte necesare proceselor birocratice în România',
  description:
    'Verifică documentele necesare pentru orice proces în România, de la înmatriculare autovehicul sau schimbare buletin și pana la eliberare pașaport.',
  keywords: 'documente necesare, acte necesare',
};

export default function DocumenteNecesarePage() {
  return (
    <main>
      <Nav />
      <Section>
        <Heading type='page-title' tag='h1'>
          Documente necesare
        </Heading>
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-1 gap-6'>
          {db.processes.map((process, index) => (
            <Process
              key={index}
              slug={process.slug}
              icon={process.icon}
              title={process.title}
              description={process.description}
              updatedAt={process.updatedAt}
              documentsCount={process.steps.reduce(
                (count, step) =>
                  count + (step.documents ? step.documents.length : 0),
                0
              )}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
