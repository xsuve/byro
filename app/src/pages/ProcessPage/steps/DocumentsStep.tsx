import { ProcessDocumentCard } from '@/components';
import { Alert, Button } from '@/components/ui';
import { useSteps } from '@/stores';
import { useTranslation } from 'react-i18next';

export interface DocumentsStepProps {}

const DocumentsStep: React.FC<DocumentsStepProps> = () => {
  const { currentStep, prevStep, nextStep } = useSteps();
  const { t } = useTranslation();

  return currentStep ? (
    <div className='flex flex-col justify-between gap-y-24'>
      <div className='flex flex-col gap-y-12'>
        <Alert
          icon='Info'
          title={t('platform:process.steps.documents_info_alert.title')}
          text={t('platform:process.steps.documents_info_alert.text')}
        />
        <div className='flex flex-col gap-y-6'>
          {(currentStep.documents || []).map((document) => (
            <ProcessDocumentCard key={document.slug} {...document} />
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <Button leftIcon='ArrowLeft' variant='outline' onClick={prevStep}>
          {t('platform:process.steps.back')}
        </Button>
        <Button rightIcon='ArrowRight' onClick={nextStep}>
          {t('platform:process.steps.continue')}
        </Button>
      </div>
    </div>
  ) : null;
};

export { DocumentsStep };
