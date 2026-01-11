import { Facebook, Instagram, Linkedin } from 'lucide-react';
import type { Footer7Props } from '@/types/index';
import { useTranslation } from 'react-i18next';

export const Footer = ({
  socialLinks,
  copyright,
}: Footer7Props) => {
  const { t } = useTranslation();

  const defaultSocialLinks = [
    {
      icon: <Facebook size={20} />,
      href: 'https://www.facebook.com/giovanni.kevin884/',
      label: 'Facebook',
    },
    {
      icon: <Instagram size={20} />,
      href: 'https://www.instagram.com/giovannikev_/',
      label: 'Instagram',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/giovanni-kevin-204422300/',
      label: 'Linkedin',
    },
  ];

  const actualSocialLinks = socialLinks || defaultSocialLinks;
  const actualCopyright = copyright || t('footer.copyright');

  return (
    <section className=" py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-800 py-6 md:flex-row">
          <p className="text-sm font-normal text-gray-600 dark:text-gray-50">
            {actualCopyright}
          </p>
          <ul className="flex items-center space-x-8">
            {actualSocialLinks.map((social, idx) => (
              <li key={idx}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 transition-colors duration-200 hover:text-orange-500"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
