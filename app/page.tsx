import { Nav } from '@/components';
import { Button, Heading, Text } from '@/components/ui';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <div className='flex justify-center items-center py-24'>
        <div className='flex flex-col justify-center items-center gap-y-6'>
          <div className='text-status-new bg-status-new-muted rounded-2xl inline-flex font-semibold text-sm px-3 py-1.5'>
            Toate procesele sunt actualizate săptămânal!
          </div>
          <div className='w-2/3 mx-auto text-center flex flex-col items-center gap-y-10'>
            <Heading type='landing-title'>
              Documente necesare proceselor birocratice.
            </Heading>
            <Text type='landing-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor consectetur.
            </Text>
            <Link href='/documente-necesare'>
              <Button>Încearcă acum</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
