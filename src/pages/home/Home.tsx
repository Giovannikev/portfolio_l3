'use client';

import { Eye } from 'lucide-react';
import { HeroSection } from '@/components/home/Hero';
import { ProfilePage } from '@/pages/profile/Profile';
import { TechStackPage } from '@/components/profile/TechStack';
import { ContactForm } from '@/components/home/ContactForm';
import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <HeroSection
        download_cv={t('home.hero.download_cv')}
        badge={{
          text: t('home.hero.badge'),
        }}
        title={t('home.hero.title')}
        description={t('home.hero.description')}
        actions={[
          {
            text: t('home.hero.cta_projects'),
            href: '/project',
            icon: <Eye className="h-5 w-5" />,
          },
        ]}
      />
      <ProfilePage />
      <TechStackPage />
      <ContactForm />
    </div>
  );
}
