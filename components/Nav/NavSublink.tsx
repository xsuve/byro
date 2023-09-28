import { FC, cloneElement } from 'react';
import { Text } from '../ui';
import Link from 'next/link';
import clsx from 'clsx';

export type NavSublinkProps = {
  href: string;
  icon?: JSX.Element;
  title: string;
  text?: string;
  disabled?: boolean;
};

export const NavSublink: FC<NavSublinkProps> = ({
  href,
  icon = null,
  title,
  text,
  disabled = false,
}) => {
  return (
    <Link href={href}>
      <div className='flex justify-start items-center gap-x-3 rounded-md p-3 ring-1 ring-inset ring-layout-border h-full'>
        {icon ? (
          <div
            className={clsx(
              'w-10 h-10 rounded-full flex justify-center items-center flex-shrink-0',
              disabled ? 'bg-status-neutral-muted' : 'bg-status-new-muted'
            )}>
            {cloneElement(icon, {
              className: `w-5 h-5 ${
                disabled ? 'text-status-neutral' : 'text-accent-primary'
              }`,
            })}
          </div>
        ) : null}
        <div className={clsx('flex flex-col gap-y-0.5', icon ? '' : 'px-3')}>
          <Text type='primary-bold'>{title}</Text>
          {text ? <Text type='tertiary'>{text}</Text> : null}
        </div>
      </div>
    </Link>
  );
};
