import * as React from 'react';
import { cn } from '@/utils/helpers';
import { Icon, Text, Badge } from '@/components/ui';
import { IconIcons } from '@/components/ui/Icon/Icon.types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Process } from '@shared/models/Process';

export interface ProcessCardProps extends Process {}

const ProcessCard: React.FC<ProcessCardProps> = ({
  slug,
  category,
  icon,
  title,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <Link to={`/process/${t(slug)}`}>
      <div
        className={cn(
          'flex flex-col gap-y-4',
          'w-fit p-6',
          'border border-zinc-200 rounded-lg'
        )}>
        <div className='flex flex-col gap-y-3'>
          <Icon icon={icon as IconIcons} color='vermilion' size='md' />
          <div className='flex flex-col gap-y-1'>
            <Text size='lg'>{t(title)}</Text>
            <Text size='sm' color='gray'>
              {t(description)}
            </Text>
          </div>
        </div>
        <div
          className={cn(
            'flex justify-between items-center',
            'p-4',
            'border border-zinc-200 rounded-md'
          )}>
          <div className={cn('flex flex-col')}>
            <Text size='sm' color='gray'>
              {t('platform:process_last_updated')}
            </Text>
            <Text size='sm'>11 noiembrie, 2024</Text>
          </div>
          <Badge variant='soft'>{t(category.title)}</Badge>
        </div>
      </div>
    </Link>
  );
};
ProcessCard.displayName = 'ProcessCard';

export { ProcessCard };
