import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  FlagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FC } from 'react';
import { Heading, Logo, Text } from '../ui';
import { Process } from '@/types';

type SideProps = {
  process: Process;
};

export const Side: FC<SideProps> = ({ process }) => {
  return (
    <div className='sticky top-0 left-0 2xl:h-screen xl:h-screen w-full 2xl:px-24 xl:px-12 px-6 2xl:py-12 xl:py-12 py-6 flex 2xl:flex-col xl:flex-col justify-between bg-layout-background'>
      <div className='flex 2xl:flex-col xl:flex-col 2xl:gap-y-24 xl:gap-y-24 2xl:gap-x-0 xl:gap-x-0 gap-x-6 2xl:items-start xl:items-start items-center'>
        <div>
          <Link
            href='/documente-necesare'
            className='flex items-center gap-x-4'>
            <ArrowLeftIcon className='2xl:w-6 xl:w-6 w-5 2xl:h-6 xl:h-6 h-5 text-secondary' />
            <Heading type='label' className='2xl:block xl:block hidden'>
              Procese
            </Heading>
          </Link>
        </div>
        <div className='flex flex-col gap-y-12'>
          <Link href='/' className='2xl:block xl:block hidden'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-y-12'>
            <div className='flex flex-col gap-y-4'>
              <Heading type='section'>
                Documente necesare {process.title.toLowerCase()}
              </Heading>
              <Text type='tertiary' className='2xl:block xl:block hidden'>
                {process.description}
              </Text>
            </div>
            <div className='2xl:flex xl:flex hidden items-center gap-x-2'>
              <ArrowTopRightOnSquareIcon className='w-5 h-5 text-aquamarine' />
              <Text type='link' target='_blank' href={process.official.link}>
                {process.official.title}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-x-4 2xl:pl-0 xl:pl-0 pl-4'>
        <Link
          href={process.official.link}
          target='_blank'
          className='2xl:hidden xl:hidden block'>
          <ArrowTopRightOnSquareIcon className='w-4 h-4' />
        </Link>
        <Link
          href='/contact'
          className='flex items-center gap-x-4 2xl:pl-0 xl:pl-0'>
          <FlagIcon className='2xl:w-6 xl:w-6 w-4 2xl:h-6 xl:h-6 h-4' />
          <Text type='primary-bold' className='2xl:block xl:block hidden'>
            Raportează o problemă
          </Text>
        </Link>
      </div>
    </div>
  );
};
