import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();
  const pageText = t('notFound.title').split(' ');

  return (
    <div className=" flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="text-sm font-light tracking-wider">{t('notFound.stopover')}</div>

          <div className="space-y-4">
            <div className="text-[12rem] lg:text-[16rem] font-bold leading-none tracking-tight">
              404
            </div>
            <div className="text-4xl lg:text-5xl font-light tracking-wider">
              {t('notFound.error')}
            </div>
          </div>
        </div>

        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-end space-y-2">
            <div className="text-6xl lg:text-8xl font-bold opacity-30 transform rotate-12">
              {pageText[0]}
            </div>
            <div className="text-4xl lg:text-6xl font-bold opacity-40 transform -rotate-6">
              {pageText[1]}
            </div>
            <div className="text-5xl lg:text-7xl font-bold opacity-35 transform rotate-3">
              {pageText[2]}
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-end space-y-1">
            <div className="text-5xl lg:text-7xl font-bold transform -rotate-3">
              {pageText[0]}
            </div>
            <div className="text-3xl lg:text-5xl font-bold transform rotate-2">
              {pageText[1]}
            </div>
            <div className="text-4xl lg:text-6xl font-bold transform -rotate-1">
              {pageText[2]}
            </div>
          </div>

          <div className="absolute top-10 right-20 text-2xl lg:text-4xl font-bold opacity-20 transform rotate-45">
            {pageText[1]}
          </div>
          <div className="absolute bottom-20 right-10 text-3xl lg:text-5xl font-bold opacity-25 transform -rotate-12">
            {pageText[0]}
          </div>
          <div className="absolute top-1/2 right-32 text-xl lg:text-3xl font-bold opacity-30 transform rotate-90">
            {pageText[2]}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <Button variant="outline">{t('notFound.backHome')}</Button>
        </Link>
      </div>
    </div>
  );
}
