import { Badge, Icon, Logo, Steps, Text } from '@/components/ui';
import { cn } from '@/utils/helpers';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProcess } from '@/services/process.service';
import { renderStep } from '@/utils/render';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useSteps, useProcess } from '@/stores';

export default function ProcessPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const {
    data: process,
    error,
    isLoading,
  } = useSWR(`/process/${slug}`, () => getProcess(slug));

  const { setSteps, currentStep, currentStepIndex } = useSteps();
  const { setProcess, setFieldValue } = useProcess();

  useEffect(() => {
    if (!process) {
      return;
    }

    setProcess(process);
    setSteps(process.steps);

    process.steps.map(
      (step) =>
        step.fields &&
        step.fields.map((field) =>
          setFieldValue(
            field.name,
            field.type === 'boolean'
              ? field.checked || false
              : field.type === 'select'
                ? field.options && field.options[0].value
                : ''
          )
        )
    );
  }, [process]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    throw error;
  }

  return process && currentStep ? (
    <div className='grid grid-cols-3 h-screen'>
      <aside className='col-span-1'>
        <div
          className={cn(
            'sticky top-0 left-0 z-50',
            'bg-zinc-100 h-screen p-12'
          )}>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col items-start gap-y-12'>
              <div className='flex flex-col gap-y-8'>
                <Text
                  link='/'
                  color='gray'
                  size='md'
                  className='flex items-center gap-x-2'>
                  <Icon icon='ArrowLeft' color='gray' size='xs' />
                  {t('platform:back_home')}
                </Text>
                <Logo link='/' />
              </div>
              <div className='flex flex-col items-start gap-y-6'>
                <Badge variant='soft'>{t(process.category.title)}</Badge>
                <div className='flex flex-col gap-y-2'>
                  <Text size='lg'>{t(process.title)}</Text>
                  <Text size='md' color='gray'>
                    {t(process.description)}
                  </Text>
                </div>
              </div>
            </div>
            <div>
              <Link
                to={process.official.link}
                target='_blank'
                className='flex items-start gap-x-3'>
                <Icon icon='ExternalLink' size='xs' className='mt-0.5' />
                <Text>{t(process.official.title)}</Text>
              </Link>
            </div>
          </div>
        </div>
      </aside>
      <main className='col-span-2 h-full'>
        <Steps.Root className='h-full'>
          <Steps.List />
          {process.steps.map((step, index) => (
            <Steps.Content
              isActive={currentStepIndex === index}
              key={step.slug}>
              {renderStep(step)}
            </Steps.Content>
          ))}
        </Steps.Root>
      </main>
    </div>
  ) : null;
}
