import { FC } from 'react';
import { Heading, Text } from '../ui';

type SectionProps = {
  title: string;
  text: string;
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ title, text, children }) => {
  return (
    <section className='p-24 flex flex-col gap-y-12'>
      <div className='flex flex-col gap-y-2'>
        <Heading type='page-title'>{title}</Heading>
        <Text type='secondary'>{text}</Text>
      </div>
      {children}
    </section>
  );
};
