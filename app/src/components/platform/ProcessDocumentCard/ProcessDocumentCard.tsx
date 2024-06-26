import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProcessDocument } from '@shared/models/Document';
import { Button, Dialog, Icon, Text } from '@/components/ui';
import { cn, sleep } from '@/utils/helpers';
import { ProcessAddDocument } from '@/components';

export interface ProcessDocumentCardProps extends ProcessDocument {
  userHasDocument: boolean;
}

const ProcessDocumentCard: React.FC<ProcessDocumentCardProps> = ({
  label,
  userHasDocument,
}) => {
  const { t } = useTranslation();
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [_userHasDocument, setUserHasDocument] = useState(userHasDocument);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='flex justify-between items-center gap-x-4'>
      <div className='flex items-center gap-x-3'>
        <div
          className={cn(
            'w-6 h-6 rounded-full flex justify-center items-center',
            _userHasDocument ? 'bg-vermilion-100' : 'bg-zinc-200'
          )}>
          <Icon
            icon={_userHasDocument ? 'Check' : 'X'}
            size='xs'
            color={_userHasDocument ? 'vermilion' : 'black'}
          />
        </div>
        <Text size='md'>{t(label)}</Text>
      </div>
      <div className='flex items-center gap-x-2'>
        {!_userHasDocument && (
          <Dialog.Root open={isDialogOpened}>
            <Dialog.Trigger asChild onClick={() => setIsDialogOpened(true)}>
              <Button
                leftIcon={isLoading ? undefined : 'CloudUpload'}
                isLoading={isLoading}
                disabled={isLoading}
                size='sm'
                color='vermilion'
                variant='ghost'>
                {isLoading ? t('platform:uploading') : t('platform:upload')}
              </Button>
            </Dialog.Trigger>
            <Dialog.Content onCloseClick={() => setIsDialogOpened(false)}>
              <Dialog.Header>
                <Dialog.Title asChild>
                  <Text size='lg'>
                    {t('platform:upload')} {t(label)}
                  </Text>
                </Dialog.Title>
                <Dialog.Description asChild>
                  <Text size='md' color='gray'>
                    {t(
                      'platform:process_add_document.upload_required_document'
                    )}
                  </Text>
                </Dialog.Description>
              </Dialog.Header>
              <ProcessAddDocument
                onChange={async (files) => {
                  if (files) {
                    setFile(files[0]);
                    setIsLoading(true);

                    // TODO:
                    await sleep(2000);
                    setUserHasDocument(true);
                  }

                  setIsDialogOpened(false);
                }}
              />
            </Dialog.Content>
          </Dialog.Root>
        )}
      </div>
    </div>
  );
};
ProcessDocumentCard.displayName = 'ProcessDocumentCard';

export { ProcessDocumentCard };
