import { FC } from 'react';
import { Text } from '../ui';
import Link from 'next/link';
import { NavSublinkProps } from './NavSublink';
import clsx from 'clsx';

export type NavLinkProps = {
  href: string;
  title: string;
  sublinks?: NavSublinkProps[];
  className?: string;
};

export const NavLink: FC<NavLinkProps> = ({ href, title, className }) => {
  return (
    <Link href={href} className={clsx(className)}>
      <Text type='primary-bold'>{title}</Text>
    </Link>
  );
};
