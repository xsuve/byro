import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type HeadingType = 'landing-title' | 'page-title' | 'section' | 'label';
type HeadingProps = {
  type: HeadingType;
  children: ReactNode;
  tag?: string;
  className?: string;
};

const HeadingTypeMap = {
  'landing-title': {
    tag: 'h1',
    className:
      'font-baskervville 2xl:text-7xl xl:text-7xl text-5xl leading-tight',
  },
  'page-title': {
    tag: 'h2',
    className: '2xl:text-2xl xl:text-2xl text-xl font-semibold tracking-tight',
  },
  section: {
    tag: 'h3',
    className: '2xl:text-base xl:text-base text-sm font-semibold',
  },
  label: {
    tag: 'h6',
    className: 'text-xs text-secondary uppercase tracking-widest font-semibold',
  },
};

export const Heading: FC<HeadingProps> = ({
  type,
  children,
  tag,
  className,
}) => {
  const HeadingTag = (tag ||
    HeadingTypeMap[type].tag) as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={clsx(HeadingTypeMap[type].className, className)}>
      {children}
    </HeadingTag>
  );
};
