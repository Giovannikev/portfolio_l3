'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?:
    | 'default'
    | 'link'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | null
    | undefined;
}

interface HeroProps {
  badge?: {
    text: string;
  };
  title: string;
  description: string;
  actions: HeroAction[];
  download_cv: string;
}

export function HeroSection({ badge, title, description, actions, download_cv }: HeroProps) {
  const handleDownloadCV = () => {
    const pdfPath = '/cv.pdf'
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = 'Giovanni-Kevin-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.open(pdfPath, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      className={cn(
        'bg-background text-foreground relative overflow-hidden',
        'py-28 px-4',
        'fade-bottom'
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: '5%',
            top: '20%',
          }}
        />
        <motion.div
          className="absolute h-96 w-96 rounded-full bg-orange-600/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            right: '5%',
            top: '10%',
          }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 relative z-10">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/contact">
              {badge && (
                <Badge variant="outline" className="gap-2 px-4 py-1.5 border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 transition-colors cursor-pointer">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span className="text-orange-600 font-medium">{badge.text}</span>
                </Badge>
              )}
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-212.5 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="inline-block bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {title.split(' ').slice(0, -2).join(' ')}
            </span>
            <br />
            <span className="inline-block bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg relative z-10 max-w-162.5 font-medium text-muted-foreground sm:text-xl leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 mt-4"
          >
            {actions.map((action, index) => (
              <Button 
                key={index} 
                variant={action.variant || (index === 0 ? 'default' : 'outline')} 
                size="lg" 
                asChild
                className={cn(
                  "h-12 px-8 text-base font-semibold transition-all duration-300",
                  index === 0 ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-1" : "hover:bg-muted hover:-translate-y-1"
                )}
              >
                <Link to={action.href} className="flex items-center gap-2">
                  {action.text}
                  {action.icon}
                </Link>
              </Button>
            ))}
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="h-12 px-8 text-base font-semibold transition-all duration-300 hover:bg-muted hover:-translate-y-1"
           >
              <span className="flex items-center gap-2">
                {download_cv}
                <Download className="size-4" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
