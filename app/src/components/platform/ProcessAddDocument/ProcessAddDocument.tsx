import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Icon } from '@/components/ui';
import { cn } from '@/utils/helpers';
import { v4 as uuidv4 } from 'uuid';
import { getAddDocumentQRCode } from '@/services/document.service';
import { LoadingPage } from '@/pages';
import useSWR from 'swr';

export interface ProcessAddDocumentProps {
  onChange: (files: FileList | null) => void;
}

const ProcessAddDocument: React.FC<ProcessAddDocumentProps> = ({
  onChange,
}) => {
  const [uuid, _] = useState<string>(uuidv4());

  const {
    data: qrCode,
    error,
    isLoading,
  } = useSWR(`/document/qrcode/${uuid}`, () => getAddDocumentQRCode(uuid));

  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    throw error;
  }

  return (
    <div className='grid grid-cols-7 items-stretch'>
      <div className='relative overflow-hidden col-span-3'>
        <input
          type='file'
          name='document_files'
          onChange={(e) => onChange(e.target.files)}
          className={cn(
            'absolute w-full h-full top-0 left-0 cursor-pointer opacity-0',
            'focus:outline-none'
          )}
        />
        <div
          className={cn(
            'border border-dashed border-zinc-300 p-4 rounded-md h-full',
            'flex flex-col items-center justify-center gap-y-4',
            'cursor-pointer'
          )}>
          <div className='flex flex-col items-center gap-y-4'>
            <Icon icon='CloudUpload' color='gray' />
            <div className='flex flex-col items-center gap-y-2 text-center'>
              <Text size='md'>
                {t('platform:process_add_document.choose_document')}
              </Text>
              <Text size='xs' color='gray'>
                {t('platform:process_add_document.file_type_max_size')}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center h-full'>
        <div className='flex flex-col items-center gap-y-2 h-full py-6'>
          <div className='h-full w-px bg-zinc-200'>&nbsp;</div>
          <Text>{t('platform:process_add_document.or')}</Text>
          <div className='h-full w-px bg-zinc-200'>&nbsp;</div>
        </div>
      </div>
      <div className='col-span-3'>
        <div className='flex flex-col gap-y-4 justify-center items-center'>
          <img src={qrCode} alt='' className='max-w-full' />
          <div className='flex flex-col items-center gap-y-2 text-center'>
            <Text size='md'>
              {t('platform:process_add_document.scan_documents')}
            </Text>
            <Text size='xs' color='gray'>
              {t('platform:process_add_document.scan_qrcode_upload_documents')}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
ProcessAddDocument.displayName = 'ProcessAddDocument';

export { ProcessAddDocument };
