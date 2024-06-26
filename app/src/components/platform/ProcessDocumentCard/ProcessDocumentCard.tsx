import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ProcessDocument } from '@shared/models/Process';
import { Icon, Text } from '@/components/ui';

export interface ProcessDocumentCardProps extends ProcessDocument {}

const ProcessDocumentCard: React.FC<ProcessDocumentCardProps> = ({
  slug,
  label,
}) => {
  const { t } = useTranslation();

  return (
    <div className='flex items-center gap-x-3'>
      <div className='bg-vermilion-100 w-6 h-6 rounded-full flex justify-center items-center'>
        <Icon icon='Check' size='xs' color='vermilion' />
      </div>
      <Text size='md'>{t(label)}</Text>
    </div>
  );
};
ProcessDocumentCard.displayName = 'ProcessDocumentCard';

export { ProcessDocumentCard };
