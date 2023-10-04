import { Nav } from '@/components';
import { Button, Heading, Text } from '@/components/ui';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <div className='flex justify-center items-center py-24'>
        <div className='flex flex-col justify-center items-center gap-y-6'>
          <div className='text-aquamarine bg-aquamarine/10 rounded-2xl inline-flex font-semibold text-sm px-3 py-1.5'>
            Toate procesele sunt verificate săptămânal!
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
      <div className='grid grid-cols-2 gap-x-12 px-24 pb-24 pt-12'>
        <div className='rounded-2xl p-12 bg-creamy flex flex-col justify-between gap-y-10'>
          <div className='flex flex-col items-start gap-y-6'>
            <div className='text-primary bg-vermilion/30 rounded-full inline-flex font-semibold text-sm px-4 py-2'>
              Documente necesare
            </div>
            <Heading type='landing-title' className='!text-5xl !leading-tight'>
              Verifică documentele necesare pentru nevoile tale
            </Heading>
            <Text type='landing-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </div>
          <Link href='/documente-necesare'>
            <Button>Verifică documente</Button>
          </Link>
        </div>
        <div className='rounded-2xl p-12 bg-creamy flex flex-col justify-between gap-y-10'>
          <div className='flex flex-col items-start gap-y-6'>
            <div className='text-primary bg-aquamarine/30 rounded-full inline-flex font-semibold text-sm px-4 py-2'>
              Modele documente
            </div>
            <Heading type='landing-title' className='!text-5xl !leading-tight'>
              Descarcă modelele uzuale de documente
            </Heading>
            <Text type='landing-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </div>
          <Link href='/modele-documente'>
            <Button>Descarcă modele</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
