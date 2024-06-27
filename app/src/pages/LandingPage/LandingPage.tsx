import { ProcessCard } from '@/components';
import { getAllProcesses } from '@/services/process.service';
import useSWR from 'swr';
import LoadingPage from '../LoadingPage/LoadingPage';
import { Alert, Button, Checkbox, Input, Select, Text } from '@/components/ui';
import { sizes, variants } from '@/components/ui/theme';

export default function LandingPage() {
  const {
    data: processes,
    error,
    isLoading,
  } = useSWR('/processes', getAllProcesses);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    throw error;
  }

  return processes ? (
    <div className='p-12'>
      <div className='grid grid-cols-3 gap-x-6'>
        {processes.map((process) => (
          <ProcessCard key={process.slug} {...process} />
        ))}
      </div>
    </div>
  ) : null;
}
