import { FC, ReactNode, cloneElement } from 'react';
import clsx from 'clsx';
import { Heading, Text } from '..';
import { LinkTarget } from '../Text/Text';

type EmptyStateLink = {
  text: string;
  href: string;
  target: LinkTarget;
};
type EmptyStateProps = {
  icon: JSX.Element;
  heading: string;
  text: string;
  ctas?: ReactNode[];
  link?: EmptyStateLink;
  className?: string;
};

export const EmptyState: FC<EmptyStateProps> = ({
  icon,
  heading,
  text,
  ctas,
  link,
  className,
}) => {
  return (
    <div
      className={clsx(
        'p-12 rounded w-full',
        'ring-1 ring-inset ring-layout-border',
        className
      )}>
      <div className='flex-col text-center space-y-4 max-w-md mx-auto'>
        {cloneElement(icon, { size: 'lg', className: 'inline-block' })}

        <Heading type='section'>{heading}</Heading>

        <Text type='primary'>{text}</Text>

        {ctas && <div className='space-x-2 py-1'>{ctas}</div>}

        {link && (
          <Text type='link' href={link.href} target={link.target}>
            {link.text}
          </Text>
        )}
      </div>
    </div>
  );
};
