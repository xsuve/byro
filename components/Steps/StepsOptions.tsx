import { Document, ProcessStep } from '@/types';
import { FC } from 'react';
import { Text } from '../ui';
import { StepsOption } from './StepsOption';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type StepsOptionsProps = {
  currentStep: ProcessStep;
  currentStepDocuments: Document[] | null;
  onOptionClick: (optionNext: string | null, optionId: string) => void;
};

export const StepsOptions: FC<StepsOptionsProps> = ({
  currentStep,
  currentStepDocuments,
  onOptionClick,
}) => {
  return (
    <>
      {currentStep.options ? (
        <div className='flex flex-col items-center gap-4'>
          {currentStep.options.map((option, index) => (
            <StepsOption
              key={index}
              option={option}
              onOptionClick={onOptionClick}
            />
          ))}
        </div>
      ) : (
        currentStepDocuments && (
          <ul className='space-y-8 pl-4'>
            {currentStepDocuments.map((document, index) => (
              <li key={index} className='list-decimal leading-loose pl-2'>
                <Text type='primary-bold'>{document.title}</Text>
                {document.description &&
                  document.description.map((description, index) => (
                    <Text key={index} type='secondary'>
                      {description}
                    </Text>
                  ))}
                {document.download && (
                  <Link
                    href={document.download}
                    className='flex justify-start items-center gap-x-2 w-fit mt-2'>
                    <ArrowDownTrayIcon className='w-4 h-4 text-vermilion' />
                    <Text type='tertiary' className='text-vermilion'>
                      Descarcă
                    </Text>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
};
