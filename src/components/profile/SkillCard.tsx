import { memo } from 'react';
import type { SkillCardProps } from '@/types';
import { SkillBadge } from './SkillBadge';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const SkillCard = memo(function SkillCard({ category, index }: SkillCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className={`bg-card rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-border hover:border-orange-500/30 group`}
      >
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-8 rounded-full bg-orange-500 mr-4 group-hover:h-10 transition-all duration-300"></div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {category.key ? t(`profile.categories.${category.key}`) : category.title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, skillIndex) => (
            <SkillBadge
              isVisible
              key={skill.name}
              skill={skill}
              delay={index * 150 + skillIndex * 100}
              index={skillIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
});


