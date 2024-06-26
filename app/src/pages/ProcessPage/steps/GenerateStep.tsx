import { Alert, Button, Text } from '@/components/ui';
import { useProcess, useSteps } from '@/stores';
import { renderField } from '@/utils/render';
import { useTranslation } from 'react-i18next';

export interface GenerateStepProps {}

const GenerateStep: React.FC<GenerateStepProps> = () => {
  const { currentStep, prevStep } = useSteps();
  const { t } = useTranslation();
  const { fields, setFieldValue } = useProcess();

  return currentStep ? (
    <div className='flex flex-col justify-between gap-y-24'>
      <div className='flex flex-col gap-y-12'>
        <Alert
          icon='Info'
          title={t('platform:process.steps.check_fields_alert.title')}
          text={t('platform:process.steps.check_fields_alert.text')}
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
        <Button rightIcon='Download' onClick={() => console.log(fields)}>
          {t('platform:process.steps.download')}
        </Button>
      </div>
    </div>
  ) : null;
};

export { GenerateStep };
