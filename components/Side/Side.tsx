import { ArrowLeftIcon, FlagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FC } from 'react';
import { Heading, Logo, Text } from '../ui';
import { Process } from '@/types';

type SideProps = {
  process: Process;
};

export const Side: FC<SideProps> = ({ process }) => {
  return (
    <div className='sticky top-0 left-0 h-screen w-full px-24 py-12 flex flex-col justify-between bg-layout-background'>
      <div className='flex flex-col gap-y-24'>
        <div>
          <Link
            href='/documente-necesare'
            className='flex items-center gap-x-4'
          >
            <ArrowLeftIcon className='w-6 h-6 text-secondary' />
            <Heading type='label'>Procese</Heading>
          </Link>
        </div>
        <div className='flex flex-col gap-y-12'>
          <Link href='/'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-y-4'>
            <Heading type='section'>
              Documente necesare {process.title.toLowerCase()}
            </Heading>
            <Text type='tertiary'>{process.description}</Text>
          </div>
        </div>
      </div>
      <Link href='/contact' className='flex items-center gap-x-4'>
        <FlagIcon className='w-6 h-6' />
        <Text type='primary-bold'>Raportează o problemă</Text>
      </Link>
    </div>
  );
};
