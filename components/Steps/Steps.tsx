'use client';

import { FC, useState, useEffect } from 'react';
import { Heading } from '../ui';
import { ProcessStep } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { StepsLines } from './StepsLines';
import { StepsOptions } from './StepsOptions';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type StepsProps = {
  steps: ProcessStep[];
};

export const Steps: FC<StepsProps> = ({ steps }) => {
  const params = useSearchParams();
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [currentStepId, setCurrentStepId] = useState(steps[0].id);

  useEffect(() => {
    const _params = [];
    for (const item of params.entries()) {
      _params.push(item);
    }

    const updatedOptions = Object.fromEntries(_params);
    setSelectedOptions({ ...updatedOptions });

    if (_params.length > 0) {
      const lastParam = _params[_params.length - 1];
      const step = steps.find((step) => step.id === lastParam[0]);
      if (step && step.options) {
        const lastParamOption = step.options.find(
          (option) => option.id === lastParam[1]
        );
        if (lastParamOption && lastParamOption.next) {
          setCurrentStepId(lastParamOption.next);
        }
      }
    }
  }, [params, steps]);

  const handleOptionClick = (nextStepId: string | null, optionId: string) => {
    const nextStep = steps.find((step) => step.id === nextStepId);
    if (nextStep) {
      setCurrentStepId(nextStep.id);

      const updatedOptions = { ...selectedOptions, [currentStepId]: optionId };
      setSelectedOptions({ ...updatedOptions });

      updateURL(updatedOptions);
    }
  };

  const handleBackClick = () => {
    if (currentStepId !== steps[0].id) {
      const prevStep = steps.find((step) =>
        step.options?.some((option) => option.next === currentStepId)
      );
      if (prevStep) {
        setCurrentStepId(prevStep.id);

        const key = steps.find((step) => step.id === prevStep.id)?.id;
        if (key) {
          const updatedOptions = { ...selectedOptions };
          delete updatedOptions[key];
          setSelectedOptions({ ...updatedOptions });

          updateURL(updatedOptions);
        }
      }
    }
  };

  const updateURL = (updatedOptions: { [key: string]: string }) => {
    const queryParams = Object.keys(updatedOptions)
      .map((key) => `${key}=${updatedOptions[key]}`)
      .join('&');

    router.replace(`?${queryParams}`);
  };

  const currentStep =
    steps.find((step) => step.id === currentStepId) || steps[0];

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center 2xl:gap-y-24 xl:gap-y-24 gap-y-12'>
        {/* <StepsLines steps={steps} currentStep={currentStep} /> */}
        <div className='flex flex-col gap-y-12'>
          <Heading
            type='page-title'
            tag='h2'
            className={clsx(
              currentStep.documents ? 'text-left' : 'text-center'
            )}>
            {currentStep.title}
          </Heading>
          <div className='flex flex-col items-center gap-y-12'>
            <div className='flex justify-end items-center gap-x-4'>
              <StepsOptions
                currentStep={currentStep}
                onOptionClick={(optionNext, optionId) =>
                  handleOptionClick(optionNext, optionId)
                }
              />
            </div>
            <div>
              {currentStep.id !== steps[0].id && (
                <button onClick={handleBackClick}>
                  <div className='flex items-center gap-x-4'>
                    <ArrowLeftIcon className='2xl:w-6 xl:w-6 w-5 2xl:h-6 xl:h-6 h-5 text-secondary' />
                    <Heading type='label'>Înapoi</Heading>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
