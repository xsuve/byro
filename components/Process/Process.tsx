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
  maxSteps: number;
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
  maxSteps,
}) => {
  return (
    <Link href={`/documente-necesare/${slug}`}>
      <div
        className={clsx(
          'flex flex-col gap-y-4',
          'p-6 rounded-lg',
          'ring-1 ring-inset ring-layout-border'
        )}>
        {cloneElement(ProcessIconMap[icon], {
          className:
            '2xl:w-9 xl:w-9 w-7 2xl:h-9 xl:h-9 h-7 text-vermilion stroke-[1.25]',
        })}
        <div className='flex flex-col gap-y-2'>
          <Heading type='section'>{title}</Heading>
          <Text type='secondary'>{description}</Text>
        </div>
        <div className='flex items-center justify-between p-4 rounded-md ring-1 ring-inset ring-layout-border'>
          <div className='flex flex-col gap-y-1'>
            <Text type='tertiary'>Ultima verificare</Text>
            <Text
              type='primary-bold'
              className='2xl:!text-sm xl:!text-sm text-xs'>
              {DateTime.fromISO(updatedAt)
                .setLocale('ro')
                .toFormat('dd MMMM, yyyy')}
            </Text>
          </div>
          <Lozenge color='aquamarine'>
            max.{' '}
            {`${maxSteps} ${
              maxSteps > 0 ? (maxSteps > 1 ? 'pași' : 'pas') : 'pași'
            }`}
          </Lozenge>
        </div>
      </div>
    </Link>
  );
};
