import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type TextType =
  | 'landing-text'
  | 'primary'
  | 'primary-bold'
  | 'secondary'
  | 'tertiary'
  | 'link';
type BaseTextProps = {
  children: ReactNode;
  className?: string;
};
type ParagraphTextProps = {
  type: Exclude<TextType, 'link'>;
  href?: never;
  target?: never;
};
export type LinkTarget = '_blank' | '_self';
type LinkTextProps = {
  type: 'link';
  href: string;
  target?: LinkTarget;
};
type TextProps = BaseTextProps & (ParagraphTextProps | LinkTextProps);

const TextTypeMap = {
  'landing-text': 'text-primary text-lg',
  primary: '',
  'primary-bold': 'font-medium',
  secondary: 'text-secondary',
  tertiary: 'text-xs text-secondary',
  link: '',
};

export const Text: FC<TextProps> = ({
  type,
  children,
  href,
  target = '_self',
  className,
}) => {
  return (
    <>
      {type === 'link' ? (
        <a
          href={href}
          target={target}
          className={clsx('inline-block cursor-pointer', className)}
        >
          <p className='font-medium text-accent-primary hover:text-primary'>
            {children}
          </p>
        </a>
      ) : (
        <p className={clsx(TextTypeMap[type], className)}>{children}</p>
      )}
    </>
  );
};
