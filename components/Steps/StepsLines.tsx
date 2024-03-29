import { ProcessStep } from '@/types';
import clsx from 'clsx';
import { FC } from 'react';

type StepsLinesProps = {
  steps: ProcessStep[];
  currentStep: ProcessStep;
};

export const StepsLines: FC<StepsLinesProps> = ({ steps, currentStep }) => {
  return (
    <div className='flex gap-x-3'>
      {steps.map(
        (step, index) =>
          step.options && (
            <div
              key={index}
              className={clsx(
                '2xl:w-[100px] xl:w-[100px] w-[80px] h-1 rounded-full',
                currentStep.id === step.id ? 'bg-vermilion' : 'bg-layout-border'
              )}
            ></div>
          )
      )}
    </div>
  );
};
