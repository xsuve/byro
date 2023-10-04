import { FC } from 'react';

type SectionProps = {
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return <section className='p-24 flex flex-col gap-y-12'>{children}</section>;
};
