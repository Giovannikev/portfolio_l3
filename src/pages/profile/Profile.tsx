import { features } from '@/data/ProfileData';
import Giova from '@/assets/giova.jpeg';
import { motion } from 'motion/react';
import { Sparkles, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProfilePage() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden relative py-24 sm:py-32 bg-background/50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute h-96 w-96 rounded-full bg-orange-500/10 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: '10%',
            top: '20%',
          }}
        />
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            right: '5%',
            bottom: '10%',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            <div className="lg:max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600">
                  <User size={20} />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600">
                  {t('profile.title')}
                </h2>
              </div>
              
              <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t('profile.subtitle').split(' ')[0]} <span className="text-orange-600 bg-clip-text bg-linear-to-r from-orange-600 to-orange-400">{t('profile.subtitle').split(' ').slice(1).join(' ')}</span>
              </p>
              
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t('profile.description')}
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.key} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12 group"
                  >
                    <dt className="inline font-bold text-foreground">
                      <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <feature.icon
                          aria-hidden="true"
                          className="size-6"
                        />
                      </div>
                      {t(`profile.features.${feature.key}.name`)}
                    </dt>{' '}
                    <dd className="inline text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {t(`profile.features.${feature.key}.description`)}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-tr from-orange-600 to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />
            <img
              alt="Portrait de Giovanni, Développeur Full Stack"
              src={Giova}
              loading="lazy"
              width={500}
              height={625}
              className="relative aspect-4/5 w-full max-w-none rounded-2xl bg-gray-900 object-cover shadow-2xl ring-1 ring-white/10 sm:w-[500px]"
            />
            
            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-500/20 text-green-500 animate-pulse">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t('profile.availability.title')}</p>
                  <p className="text-sm font-semibold text-foreground">{t('profile.availability.status')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
