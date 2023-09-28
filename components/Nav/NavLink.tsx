import { FC } from 'react';
import { Text } from '../ui';
import Link from 'next/link';
import { NavSublinkProps } from './NavSublink';

export type NavLinkProps = {
  href: string;
  title: string;
  sublinks?: NavSublinkProps[];
};

export const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href}>
      <Text type='primary-bold'>{title}</Text>
    </Link>
  );
};
