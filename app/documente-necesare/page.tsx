import { Nav, Process, Section } from '@/components';
import db from '../../public/db.json';
import { Metadata } from 'next';
import { Heading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Byro - Documente și acte necesare',
  description: 'Documente și acte necesare',
};

export default function DocumenteNecesarePage() {
  return (
    <main>
      <Nav />
      <Section>
        <Heading type='page-title'>Documente necesare</Heading>
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-1 gap-6'>
          {db.processes.map((process, index) => (
            <Process
              key={index}
              slug={process.slug}
              icon={process.icon}
              title={process.title}
              description={process.description}
              updatedAt={process.updatedAt}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
