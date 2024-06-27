import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/helpers';
import { IconIcons } from '../Icon/Icon.types';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { AlertColors } from './Alert.types';
import { achromaticColors } from '../theme';

const alertVariants = (color: AlertColors) =>
  cva(
    [
      'relative w-fit',
      'py-4 pl-4 pr-6',
      'rounded-md',
      [
        // @ts-ignore
        achromaticColors.includes(color)
          ? [
              color === 'black' && `bg-stone-100`,
              color === 'gray' && `bg-gray-100`,
              color === 'white' && `bg-white`,
            ]
          : `bg-${color}-100`,
      ],
      '[&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
    ],
    {
      variants: {},
      defaultVariants: {},
    }
  );

export interface AlertRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  color: AlertColors;
}

const Root = React.forwardRef<HTMLDivElement, AlertRootProps>(
  ({ className, color, ...props }, ref) => (
    <div
      ref={ref}
      role='alert'
      className={cn(alertVariants(color)(), className)}
      {...props}
    />
  )
);
Root.displayName = 'Root';

export interface AlertStyleProps {
  color?: AlertColors;
}

export interface AlertProps extends AlertStyleProps {
  icon?: IconIcons;
  title: string;
  text: string;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  icon,
  title,
  text,
  color = 'gray',
  className,
}) => {
  return (
    <Root className={cn(className)} color={color}>
      {icon && (
        <Icon
          icon={icon}
          color={achromaticColors.includes(color) ? 'black' : color}
          className='w-5 h-5'
        />
      )}
      <Text
        size='sm'
        color={achromaticColors.includes(color) ? 'black' : color}>
        {title}
      </Text>
      <Text size='sm' color={achromaticColors.includes(color) ? 'gray' : color}>
        {text}
      </Text>
    </Root>
  );
};
Alert.displayName = 'Alert';

export { Alert };
