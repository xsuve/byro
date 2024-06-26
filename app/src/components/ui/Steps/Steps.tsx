import * as React from 'react';
import { cn } from '@/utils/helpers';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { useSteps } from '@/stores';
import { useTranslation } from 'react-i18next';
import { ProcessStep } from '@shared/models/Process';
import { Variants } from '../theme';
import { ButtonColors } from '../Button/Button.types';

export interface StepsRootProps {
  children: React.ReactNode;
  className?: string;
}

const Root: React.FC<StepsRootProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};
Root.displayName = 'Root';

export interface StepsListProps {
  className?: string;
}

const List: React.FC<StepsListProps> = ({ className }) => {
  const { t } = useTranslation();
  const { steps, currentStep, currentStepIndex } = useSteps();

  const variantColor = (
    currentStep: ProcessStep,
    step: ProcessStep,
    index: number,
    currentStepIndex: number
  ): { variant: Variants; color: ButtonColors } => {
    if (currentStep.slug === step.slug || index <= currentStepIndex) {
      return { variant: 'solid', color: 'vermilion' };
    }

    return { variant: 'outline', color: 'gray' };
  };

  return currentStep ? (
    <div
      className={cn(
        'sticky top-0 flex justify-between bg-white px-12 py-6 z-50',
        className
      )}>
      {steps.map((step, index) => (
        <div key={step.slug} className={cn('flex items-center gap-x-4')}>
          <Button
            shape='full'
            className='w-8 h-8 px-0'
            {...variantColor(currentStep, step, index, currentStepIndex)}>
            {index + 1}
          </Button>
          <Text
            size='md'
            color={currentStep.slug === step.slug ? 'black' : 'gray'}>
            {t(step.title)}
          </Text>
        </div>
      ))}
    </div>
  ) : null;
};
List.displayName = 'List';

export interface StepsContentProps {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

const Content: React.FC<StepsContentProps> = ({
  isActive = false,
  children,
  className,
}) => {
  const { t } = useTranslation();
  const { currentStep, currentStepIndex } = useSteps();

  return isActive && currentStep ? (
    <div className={cn('px-12 py-12', className)}>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-y-4 w-1/2'>
          <Text size='lg'>
            {currentStepIndex + 1}. {t(currentStep.title)}
          </Text>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};
Content.displayName = 'Content';

const Steps = { Root, List, Content };

export { Steps };
