import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type HeadingType = 'landing-title' | 'page-title' | 'section' | 'label';
type HeadingProps = {
  type: HeadingType;
  children: ReactNode;
  className?: string;
};

const HeadingTypeMap = {
  'landing-title': {
    tag: 'h1',
    className: 'font-baskervville text-7xl leading-tight',
  },
  'page-title': {
    tag: 'h2',
    className: 'text-2xl font-semibold tracking-tight',
  },
  section: {
    tag: 'h3',
    className: 'text-base font-semibold',
  },
  label: {
    tag: 'h6',
    className: 'text-xs text-secondary uppercase tracking-widest font-semibold',
  },
};

export const Heading: FC<HeadingProps> = ({ type, children, className }) => {
  const HeadingTag = HeadingTypeMap[type].tag as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={clsx(HeadingTypeMap[type].className, className)}>
      {children}
    </HeadingTag>
  );
};
