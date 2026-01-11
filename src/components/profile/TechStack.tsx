import { skillCategories } from '@/data/ProfileData';
import { SkillCard } from './SkillCard';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TechStackPage() {
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600">
              <Terminal size={20} />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600">
              {t('profile.subtitle')}
            </h2>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
          >
            {t('profile.subtitle').split(' ')[0]} <span className="text-orange-600">{t('profile.subtitle').split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            {t('profile.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <SkillCard
              isVisible
              key={category.key || category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
