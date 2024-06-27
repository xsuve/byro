import { Alert, Button, Icon, Text } from '@/components/ui';
import { generatePDFFolder } from '@/services/process.service';
import { useProcess, useSteps } from '@/stores';
import { downloadFile } from '@/utils/helpers';
import { renderField } from '@/utils/render';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export interface GenerateStepProps {}

const GenerateStep: React.FC<GenerateStepProps> = () => {
  const navigate = useNavigate();
  const { currentStep, prevStep, resetSteps } = useSteps();
  const { t } = useTranslation();
  const { process, fields, setFieldValue } = useProcess();
  const [isLoading, setIsLoading] = useState(false);

  const downloadClick = async () => {
    setIsLoading(true);
    const arrayBuffer = await generatePDFFolder(process!.slug, { ...fields });

    if (!arrayBuffer) {
      throw new Error('Failed to generate.');
    }

    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    downloadFile(url);

    resetSteps();
    navigate('/', { replace: true });
  };

  return currentStep ? (
    <div className='flex flex-col justify-between gap-y-24'>
      {isLoading ? (
        <div className='flex flex-col justify-center items-center py-12 gap-y-6 text-center'>
          <Icon icon='LoaderCircle' size='lg' isSpinning />
          <Text size='lg'>
            {t('platform:process.steps.generating_pdf_folder')}...
          </Text>
          <Text size='md' color='gray'>
            {t('platform:process.steps.pdf_folder_generate_text')}
          </Text>
        </div>
      ) : (
        <>
          <div className='flex flex-col gap-y-12'>
            <Alert
              icon='Info'
              title={t('platform:process.steps.configure_pdf_alert.title')}
              text={t('platform:process.steps.configure_pdf_alert.text')}
            />
            <div className='flex flex-col gap-y-4'>
              <Text size='md'>{t('platform:process.steps.options')}</Text>
              <div className='flex flex-col gap-y-4'>
                {(currentStep.fields || []).map((field) =>
                  renderField(field, t, setFieldValue, fields[field.name])
                )}
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <Button leftIcon='ArrowLeft' variant='outline' onClick={prevStep}>
              {t('platform:process.steps.back')}
            </Button>
            <Button rightIcon='Download' onClick={downloadClick}>
              {t('platform:process.steps.download')}
            </Button>
          </div>
        </>
      )}
    </div>
  ) : null;
};

export { GenerateStep };
