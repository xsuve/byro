import { ProcessStepOption } from '@/types';
import { FC } from 'react';
import { Text } from '../ui';

type StepsOptionProps = {
  option: ProcessStepOption;
  onOptionClick: (optionNext: string | null, optionId: string) => void;
};

export const StepsOption: FC<StepsOptionProps> = ({
  option,
  onOptionClick,
}) => {
  return (
    <button
      className='rounded-md p-3 ring-1 ring-inset ring-layout-border bg-white hover:bg-layout-border'
      onClick={() => onOptionClick(option.next, option.id)}
    >
      <Text type='primary-bold'>{option.label}</Text>
    </button>
  );
};
