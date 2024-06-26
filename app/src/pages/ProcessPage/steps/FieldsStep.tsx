import { Alert, Button } from '@/components/ui';
import { useProcess, useSteps } from '@/stores';
import { renderField } from '@/utils/render';
import { useTranslation } from 'react-i18next';

export interface FieldsStepProps {}

const FieldsStep: React.FC<FieldsStepProps> = () => {
  const { currentStep, nextStep } = useSteps();
  const { t } = useTranslation();
  const { setFieldValue, fields } = useProcess();

  return currentStep ? (
    <div className='flex flex-col justify-between gap-y-24'>
      <div className='flex flex-col gap-y-12'>
        <Alert
          icon='Info'
          title={t('platform:process.steps.check_fields_alert.title')}
          text={t('platform:process.steps.check_fields_alert.text')}
        />
        <div className='flex flex-col gap-y-6'>
          {(currentStep.fields || []).map((field) =>
            renderField(field, t, setFieldValue, fields[field.name])
          )}
        </div>
      </div>
      <div className='flex justify-end items-center'>
        <Button rightIcon='ArrowRight' onClick={nextStep}>
          {t('platform:process.steps.continue')}
        </Button>
      </div>
    </div>
  ) : null;
};

export { FieldsStep };
