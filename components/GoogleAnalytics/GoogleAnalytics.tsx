import Script from 'next/script';
import { FC } from 'react';

export const GoogleAnalytics: FC = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-V89DLBT3YM'
      ></Script>
      <Script strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-V89DLBT3YM');
        `}
      </Script>
    </>
  );
};
