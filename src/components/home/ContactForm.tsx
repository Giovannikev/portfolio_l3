import { Mail, Phone, MessageSquare, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function ContactForm() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const project = formData.get('project');

    if (!name || !email || !project) {
      toast.error(t('contact.form.validation_error'));
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        'service_7f9lnxd',
        'template_adtzjxi',
        form.current!,
        {
          publicKey: 'kSFb6MeS1E4ACWZMW',
        }
      );
      toast.success(t('contact.form.success_message'));
      form.current?.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error(t('contact.form.error_message'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email.label'),
      value: 'giovannikevin884@gmail.com',
      description: t('contact.info.email.description')
    },
    {
      icon: Phone,
      label: t('contact.info.phone.label'),
      value: '+261 34 57 294 55',
      description: t('contact.info.phone.description')
    },
    {
      icon: MessageSquare,
      label: t('contact.info.response.label'),
      value: t('contact.info.response.value'),
      description: t('contact.info.response.description')
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600">
                {t('contact.subtitle')}
              </h2>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {t('contact.heading')}<span className="text-orange-600">{t('contact.heading_accent')}</span>
            </h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              {t('contact.description')}
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300 group border border-transparent hover:border-border"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <info.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{info.label}</h3>
                    <p className="text-base font-semibold text-foreground mt-0.5">{info.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold text-foreground ml-1">
                  {t('contact.form.name')}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t('contact.form.name_placeholder')}
                  className="h-12 bg-background/50 border-border focus:border-orange-500/50 focus:ring-orange-500/20 rounded-xl transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground ml-1">
                  {t('contact.form.email')}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t('contact.form.email_placeholder')}
                  className="h-12 bg-background/50 border-border focus:border-orange-500/50 focus:ring-orange-500/20 rounded-xl transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project" className="text-sm font-semibold text-foreground ml-1">
                  {t('contact.form.project')}
                </Label>
                <Textarea
                  id="project"
                  name="project"
                  required
                  placeholder={t('contact.form.project_placeholder')}
                  className="min-h-[150px] bg-background/50 border-border focus:border-orange-500/50 focus:ring-orange-500/20 rounded-xl transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin size-5" />
                    <span>{t('contact.form.submitting')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('contact.form.submit')}</span>
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
