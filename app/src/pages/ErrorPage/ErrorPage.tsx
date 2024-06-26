import { Icon, Text } from '@/components/ui';
import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const { t } = useTranslation();
  const error = useRouteError();
  console.error(error);

  return (
    <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50'>
      <div className='flex flex-col gap-y-4 items-center'>
        <Icon icon='CircleX' size='lg' color='vermilion' />
        <Text size='lg'>{t('errors:something_went_wrong')}</Text>
        <Text size='sm' color='gray'>
          {t('platform:error_message')}: {t((error as Error).message)}
        </Text>
        <Text size='sm' color='vermilion' link='/'>
          {t('platform:back_home')}
        </Text>
      </div>
    </div>
  );
}
