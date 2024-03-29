import { FC } from 'react';
import clsx from 'clsx';

type LogoColor = 'color' | 'black' | 'white';
type LogoType = 'icon' | 'wordmark';
type LogoProps = {
  color?: LogoColor;
  type?: LogoType;
  className?: string;
};

const LogoColorMap = {
  color: {
    icon: 'fill-vermilion',
    text: 'text-primary',
  },
  black: {
    icon: 'fill-primary',
    text: 'text-primary',
  },
  white: {
    icon: 'fill-white',
    text: 'text-white',
  },
};

export const Logo: FC<LogoProps> = ({
  color = 'color',
  type = 'wordmark',
  className,
}) => {
  return (
    <div
      className={clsx(
        'flex items-center font-semibold text-lg',
        type === 'wordmark' && 'space-x-2',
        className
      )}
    >
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 117.1 114.3'
        xmlSpace='preserve'
        className={clsx(
          '2xl:w-8 xl:w-8 w-7 2xl:h-8 xl:h-8 h-7',
          LogoColorMap[color].icon
        )}
      >
        <path
          d='M108,66.6l0.1-0.2c10.5-10.7,10.5-27.9-0.1-38.5c-7.4-7.4-18.1-9.7-27.5-6.8c-0.1-5.1-2.1-10.2-6-14
	C67-0.3,55.2-0.8,47.2,5.6c0,0,0,0-0.1,0l0,0l-3,3l-0.2,0.2l-6.2,6.2l22.3,22.3l6.6,6.6l3.2,3.2l6.5,6.4L95.8,73
	c7.1,7.1,7,18.6-0.1,25.7c-7.1,7.1-18.6,7.1-25.8,0L50.6,79.4L40.4,69.1l-5-5.1L28.3,57l-6.5-6.4l-3.3-3.3l-5-4.9
	c-0.5-0.5-1-1-1.4-1.7c-3-4.5-2.6-10.5,1.3-14.4c3.9-3.9,10-4.5,14.3-1.4c0.6,0.4,1.2,0.9,1.8,1.4l46.6,46.6
	c0.9,0.9,1.3,2.1,1.3,3.2c0,1.2-0.4,2.3-1.3,3.2c-1.8,1.8-4.6,1.8-6.5,0L47.4,56.8C46,55.3,43.7,55,42,56c-0.4,0.2-0.8,0.4-1,0.8
	c-0.4,0.4-0.5,0.6-0.8,1c-1,1.7-0.6,4,0.8,5.4l22.5,22.5c5.4,5.4,14,5.4,19.3,0c5.4-5.4,5.4-14,0-19.3L41,24.6l-6.5-6.3
	c-8-6.5-19.8-6-27.2,1.5c-7.6,7.5-8.1,19.4-1.6,27.4c0.4,0.5,0.9,1,1.5,1.6l8.2,8.2l6.5,6.5l16,16l6.4,6.5l19.5,19.3
	c10.7,10.7,28,10.7,38.6,0c9.7-9.7,10.6-24.9,2.6-35.6L108,66.6z M69.5,27.7l-3.1,3.1l-8.7-8.6l-0.9-0.9l-6.2-6.2l3-3
	c4.5-2.9,10.5-2.6,14.4,1.3C71.8,17.3,72.5,23.4,69.5,27.7z M88.2,52.4L76.4,40.7l0,0L73,37.4l3-3l0.5-0.5l0.2-0.2
	c7.2-6.3,18-6,24.9,0.9c7,7,7.1,18.4,0.2,25.6l-0.1,0.1l-2.8,2.8L88.2,52.4z'
        />
      </svg>
      {type !== 'icon' ? (
        <span
          className={clsx(
            'font-josefin-sans font-bold 2xl:text-2xl xl:text-2xl text-xl',
            LogoColorMap[color].text
          )}
        >
          Byro
        </span>
      ) : null}
    </div>
  );
};
