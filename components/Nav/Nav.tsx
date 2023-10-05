'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';
import { Logo, Text } from '../ui';
import Link from 'next/link';
import {
  Bars3Icon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import { NavLink, NavLinkProps } from './NavLink';
import { NavSublink } from './NavSublink';

type NavProps = {};

const links: NavLinkProps[] = [
  {
    href: '/despre',
    title: 'Despre',
  },
  {
    href: '#',
    title: 'Produse',
    sublinks: [
      {
        href: '/documente-necesare',
        icon: <DocumentTextIcon />,
        title: 'Documente necesare',
        text: 'Verifică documentele necesare proceselor birocratice',
        disabled: false,
      },
      {
        href: '#',
        icon: <DocumentDuplicateIcon />,
        title: 'Modele documente',
        text: 'În curând!',
        disabled: true,
      },
      {
        href: '#',
        icon: <IdentificationIcon />,
        title: 'Extrage date',
        text: 'În curând!',
        disabled: true,
      },
      {
        href: '/contribuie',
        title: 'Propune soluție',
        text: 'Vino cu o idee de funcționalitate pentru nevoile tale',
        disabled: false,
      },
    ],
  },
  {
    href: '/contribuie',
    title: 'Contribuie',
  },
];

export const Nav: FC<NavProps> = () => {
  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <nav
      className={clsx(
        'bg-white py-6 2xl:px-48 xl:px-24 px-6 grid grid-cols-2 gap-x-12'
      )}
    >
      <div className='flex items-center gap-x-24'>
        <div className='flex justify-start items-center'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <div className='2xl:flex xl:flex hidden justify-start items-center gap-x-10'>
          {links.map((link, index) =>
            link.sublinks ? (
              <div className='cursor-pointer relative group' key={index}>
                <div className='flex gap-x-2 items-center'>
                  <Text type='primary-bold'>{link.title}</Text>
                  <ChevronDownIcon className='w-4 h-4' />
                </div>
                <div className='hidden group-hover:block'>
                  <div className='grid grid-cols-2 gap-5 bg-white p-5 elevation-overlay rounded-lg absolute min-w-[700px]'>
                    {link.sublinks.map((sublink, index) => (
                      <NavSublink
                        key={index}
                        href={sublink.href}
                        title={sublink.title}
                        text={sublink.text}
                        icon={sublink.icon}
                        disabled={sublink.disabled}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink href={link.href} title={link.title} key={index} />
            )
          )}
        </div>
      </div>
      <div className='flex justify-end items-center'>
        <div className='2xl:flex xl:flex hidden justify-end items-center gap-x-10'>
          <Link href='/contact'>
            <Text type='primary-bold'>Contact</Text>
          </Link>
        </div>
        <div className='2xl:hidden xl:hidden flex justify-end items-center'>
          <Bars3Icon
            className='w-6 h-6 text-secondary cursor-pointer'
            onClick={() => setMenuToggled(!menuToggled)}
          />
        </div>
      </div>
      <div
        className={clsx(
          menuToggled
            ? '2xl:hidden xl:hidden flex flex-col gap-y-2 col-span-2'
            : 'hidden',
          'py-6'
        )}
      >
        {links.map((link, index) =>
          link.sublinks ? (
            <div key={index} className='flex flex-col gap-y-4 order-1 mt-2'>
              {link.sublinks.map((sublink, index) => (
                <NavSublink
                  key={index}
                  href={sublink.href}
                  title={sublink.title}
                  text={sublink.text}
                  icon={sublink.icon}
                  disabled={sublink.disabled}
                />
              ))}
            </div>
          ) : (
            <NavLink
              href={link.href}
              title={link.title}
              className='order-0'
              key={index}
            />
          )
        )}
      </div>
    </nav>
  );
};
