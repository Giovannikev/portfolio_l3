'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './resizableNavbar';
import { useState } from 'react';
import { ModeToggle } from '@/components/modeToggle';
import { NavLink } from 'react-router-dom';
import { User, Briefcase, Mail, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { LanguageToggle } from '@/components/languageToggle';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: t('nav.home'),
      link: '/',
      icon: Home,
    },
    {
      name: t('nav.profile'),
      link: '/profile',
      icon: User,
    },
    {
      name: t('nav.projects'),
      link: '/project',
      icon: Briefcase,
    },
    {
      name: t('nav.contact'),
      link: '/contact',
      icon: Mail,
    },
  ];

  return (
    <div className="sticky top-2 z-50 w-full bg-transparent">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton variant="secondary">
              <LanguageToggle />
            </NavbarButton>
            <NavbarButton variant="secondary">
              <ModeToggle />
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-border/50 shadow-sm h-16">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col w-full gap-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={`mobile-link-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <NavLink
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 w-full group',
                        isActive
                          ? 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20'
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      )
                    }
                  >
                    <item.icon size={22} className="shrink-0" />
                    <span className="text-lg font-bold">{item.name}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="w-full pt-4 mt-4 border-t border-border/50 space-y-2"
            >
              <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-muted/30">
                <span className="text-sm font-medium text-muted-foreground">Langue</span>
                <LanguageToggle />
              </div>
              <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-muted/30">
                <span className="text-sm font-medium text-muted-foreground">Apparence</span>
                <ModeToggle />
              </div>
            </motion.div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
