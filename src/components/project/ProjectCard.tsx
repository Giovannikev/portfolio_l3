import { memo } from 'react';
import type { Project } from '@/types';
import { motion } from 'motion/react';
import { Calendar, Code2, CheckCircle2, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16"
    >
      {/* Timeline Connector */}
      <div className="hidden lg:flex absolute left-[135px] top-8 -translate-x-1/2 items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full bg-orange-600 ring-4 ring-orange-500/20 shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
      </div>

      {/* Date Desktop */}
      <div className="hidden lg:block w-24 pt-7 text-right">
        <span className="text-sm font-bold text-orange-600 tracking-tight">{project.date}</span>
      </div>

      {/* Card Content */}
      <div className="flex-1 bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 shadow-xl hover:shadow-orange-500/5 flex flex-col sm:flex-row">
        {/* Image Section */}
        <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
          <img 
            src={project.image} 
            alt={t(`projects.list.${project.key}.title`)} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent"></div>
          
          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.types.map((type) => (
              <Badge key={type} variant="secondary" className="bg-background/80 backdrop-blur-md border-none text-[10px] uppercase tracking-wider font-bold">
                {type}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
              <Calendar size={14} />
              <span>{project.date}</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {t('projects.version')} {project.version}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
            {t(`projects.list.${project.key}.title`)}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
            {t(`projects.list.${project.key}.description`)}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 text-xs font-bold text-foreground uppercase tracking-widest">
              <Code2 size={14} className="text-orange-600" />
              <span>{t('projects.technologies')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-orange-500/5 border border-orange-500/10 text-orange-600 text-xs font-medium hover:bg-orange-500/10 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 text-xs font-bold text-foreground uppercase tracking-widest">
              <CheckCircle2 size={14} className="text-orange-600" />
              <span>{t('projects.features_title')}</span>
            </div>
            <ul className="space-y-2">
              {(t(`projects.list.${project.key}.features`, { returnObjects: true }) as string[]).slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight size={14} className="mt-1 text-orange-500 shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';
