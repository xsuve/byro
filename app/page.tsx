import { Nav } from '@/components';
import { Button, Heading, Text } from '@/components/ui';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <div className='flex justify-center items-center 2xl:py-24 xl:py-24 py-12'>
        <div className='flex flex-col justify-center items-center gap-y-6'>
          <div className='text-aquamarine bg-aquamarine/10 rounded-2xl inline-flex font-semibold 2xl:text-sm xl:text-sm text-xs px-3 py-1.5'>
            Toate procesele sunt verificate săptămânal!
          </div>
          <div className='2xl:w-2/3 xl:w-2/3 w-full 2xl:px-0 xl:px-0 px-6 mx-auto text-center flex flex-col items-center gap-y-10'>
            <Heading type='landing-title'>
              Documente necesare proceselor birocratice.
            </Heading>
            <Text type='landing-text'>
              Verifică documentele necesare pentru orice proces în România, de
              la înmatriculare autovehicul sau schimbare buletin și pana la
              eliberare pașaport.
            </Text>
            <Link href='/documente-necesare'>
              <Button>Încearcă acum</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-x-12 2xl:gap-y-0 gap-y-6 2xl:px-24 xl:px-24 px-6 2xl:pb-24 pb-12 2xl:pt-12 pt-6'>
        <div className='rounded-2xl 2xl:p-12 xl:p-12 p-8 bg-creamy flex flex-col justify-between gap-y-10'>
          <div className='flex flex-col items-start gap-y-6'>
            <div className='text-primary bg-vermilion/30 rounded-full inline-flex font-semibold 2xl:text-sm xl:text-sm text-xs px-4 py-2'>
              Documente necesare
            </div>
            <Heading
              type='landing-title'
              className='2xl:!text-4xl xl:!text-4xl !text-3xl !leading-tight'>
              Verifică documentele necesare pentru nevoile tale
            </Heading>
            <Text type='landing-text'>
              Tot ce trebuie să conțină dosarul tău pentru procesul birocratic
              pe care îl desfășori.
            </Text>
          </div>
          <Link href='/documente-necesare'>
            <Button>Verifică documente</Button>
          </Link>
        </div>
        <div className='rounded-2xl 2xl:p-12 xl:p-12 p-8 bg-creamy flex flex-col justify-between gap-y-10'>
          <div className='flex flex-col items-start gap-y-6'>
            <div className='text-primary bg-aquamarine/30 rounded-full inline-flex font-semibold 2xl:text-sm xl:text-sm text-xs px-4 py-2'>
              Modele documente
            </div>
            <Heading
              type='landing-title'
              className='2xl:!text-4xl xl:!text-4xl !text-3xl !leading-tight'>
              Descarcă modelele uzuale de documente
            </Heading>
            <Text type='landing-text'>
              Modele și documente disponibile pentru descărcare și pentru a le
              folosi în procese.
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
