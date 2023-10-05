import { FC } from 'react';

type SectionProps = {
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className='2xl:px-48 xl:px-24 px-6 2xl:py-24 xl:py-24 py-6 flex flex-col gap-y-6'>
      {children}
    </section>
  );
};
