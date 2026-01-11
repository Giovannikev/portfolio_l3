import { memo } from 'react';
import type { SkillBadgeProps } from '@/types';
import { motion } from 'motion/react';

export const SkillBadge = memo(function SkillBadge({ skill, delay }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay / 1000,
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-xl hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors duration-300 group"
    >
      <div className="relative">
        <img
          src={skill.logo}
          alt={`Logo ${skill.name}`}
          loading="lazy"
          width={16}
          height={16}
          className="w-4 h-4 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-orange-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
});

