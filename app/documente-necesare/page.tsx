import { Nav, Process, Section } from '@/components';

import db from '../../public/db.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Byro - Documente și acte necesare',
  description: 'Documente și acte necesare',
};

export default function DocumenteNecesarePage() {
  return (
    <main>
      <Nav />
      <Section
        title='Documente necesare'
        text='Lorem ipsum dolor amet consilur'
      >
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 gap-6'>
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
