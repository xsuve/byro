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
    <div className='sticky top-0 left-0 2xl:h-screen w-full 2xl:px-24 px-6 2xl:py-12 py-6 flex 2xl:flex-col justify-between bg-layout-background'>
      <div className='flex 2xl:flex-col 2xl:gap-y-24 2xl:gap-x-0 gap-x-6 items-center'>
        <div>
          <Link
            href='/documente-necesare'
            className='flex items-center gap-x-4'
          >
            <ArrowLeftIcon className='2xl:w-6 w-5 2xl:h-6 h-5 text-secondary' />
            <Heading type='label' className='2xl:block hidden'>
              Procese
            </Heading>
          </Link>
        </div>
        <div className='flex flex-col gap-y-12'>
          <Link href='/' className='2xl:block hidden'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-y-4'>
            <Heading type='section'>
              Documente necesare {process.title.toLowerCase()}
            </Heading>
            <Text type='tertiary' className='2xl:block hidden'>
              {process.description}
            </Text>
          </div>
        </div>
      </div>
      <Link href='/contact' className='flex items-center gap-x-4 2xl:pl-0 pl-6'>
        <FlagIcon className='2xl:w-6 w-5 2xl:h-6 h-5' />
        <Text type='primary-bold' className='2xl:block hidden'>
          Raportează o problemă
        </Text>
      </Link>
    </div>
  );
};
