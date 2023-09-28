import { Process } from '@/components';

import db from '../../public/db.json';

export default function ProcessesPage() {
  return (
    <div className='grid grid-cols-4 gap-6'>
      {db.processes.map((process) => (
        <Process
          key={process.slug}
          slug={process.slug}
          icon={process.icon}
          title={process.title}
          description={process.description}
          updatedAt={process.updatedAt}
        />
      ))}
    </div>
  );
}
