import { FC, cloneElement } from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';
import { Heading, Lozenge, Text } from '../ui';
import Link from 'next/link';
import { IdentificationIcon, TruckIcon } from '@heroicons/react/24/outline';

type ProcessProps = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  updatedAt: string;
  className?: string;
};

const ProcessIconMap: { [icon: string]: JSX.Element } = {
  truck: <TruckIcon />,
  identification: <IdentificationIcon />,
};

export const Process: FC<ProcessProps> = ({
  slug,
  icon,
  title,
  description,
  updatedAt,
}) => {
  return (
    <Link href={`/documente-necesare/${slug}`}>
      <div
        className={clsx(
          'flex flex-col gap-y-4',
          'p-6 rounded-lg',
          'ring-1 ring-inset ring-layout-border'
        )}
      >
        {cloneElement(ProcessIconMap[icon], {
          className: 'w-9 h-9 text-vermilion stroke-[1.25]',
        })}
        <div className='flex flex-col gap-y-2'>
          <Heading type='section'>{title}</Heading>
          <Text type='secondary'>{description}</Text>
        </div>
        <div className='flex items-center justify-between p-4 rounded-md ring-1 ring-inset ring-layout-border'>
          <div className='flex flex-col gap-y-1'>
            <Text type='tertiary'>Ultima actualizare</Text>
            <Text type='primary-bold'>
              {DateTime.fromISO(updatedAt)
                .setLocale('ro')
                .toFormat('dd MMMM, yyyy')}
            </Text>
          </div>
          <Lozenge color='aquamarine'>3 documente</Lozenge>
        </div>
      </div>
    </Link>
  );
};
