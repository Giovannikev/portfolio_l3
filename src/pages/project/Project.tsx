import { projects } from '@/data/ProjectData';
import { ProjectCard } from '@/components/project/ProjectCard';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export function ProjectPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background/50 selection:bg-orange-500/30">
      <div className="container mx-auto py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16 sm:mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            {t('projects.title').split(' ')[0]} <span className="text-orange-600">{t('projects.title').split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            {t('projects.subtitle')}
          </motion.p>
        </header>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute left-[135px] top-0 bottom-0 w-px bg-linear-to-b from-orange-600/50 via-border to-transparent"></div>

          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
