import { ProcessCard } from '@/components';
import { Process } from '@shared/models/Process';
import { getAllProcesses } from '@/services/process.service';
import { useEffect, useState } from 'react';

export default function Landing() {
  const [processes, setProcesses] = useState<Process[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProcesses = async () => {
      setIsLoading(true);
      const _processes = await getAllProcesses();
      setIsLoading(false);
      setProcesses(_processes);
    };

    fetchProcesses();
  }, []);

  return (
    <div className='p-12'>
      {isLoading ? (
        'Loading'
      ) : (
        <div className='grid grid-cols-3 gap-x-6'>
          {processes.map((process) => (
            <ProcessCard key={process.slug} {...process} />
          ))}
        </div>
      )}
    </div>
  );
}
