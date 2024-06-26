import { Icon } from '@/components/ui';

export default function LoadingPage() {
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50'>
      <Icon icon='LoaderCircle' size='lg' color='vermilion' isSpinning />
    </div>
  );
}
