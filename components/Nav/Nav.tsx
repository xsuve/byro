import { FC } from 'react';
import clsx from 'clsx';
import { Logo, Text } from '../ui';
import Link from 'next/link';

type NavProps = {};

export const Nav: FC<NavProps> = () => {
  return (
    <nav className={clsx('bg-white py-6 px-24 grid grid-cols-3 gap-x-12')}>
      <div className='flex justify-start items-center gap-x-10'>
        <Link href='/despre'>
          <Text type='primary-bold'>Despre</Text>
        </Link>
        <Link href='/produse'>
          <Text type='primary-bold'>Produse</Text>
        </Link>
        <Link href='/contribuie'>
          <Text type='primary-bold'>Contribuie</Text>
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <div className='flex justify-end items-center gap-x-10'>
        <Link href='/contact'>
          <Text type='primary-bold'>Contact</Text>
        </Link>
      </div>
    </nav>
  );
};
