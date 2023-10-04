import { FC } from 'react';

type SectionProps = {
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className='2xl:p-24 p-6 flex flex-col 2xl:gap-y-12 gap-y-6'>
      {children}
    </section>
  );
};
