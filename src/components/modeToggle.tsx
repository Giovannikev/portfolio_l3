'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/themeProvider';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="relative h-12 w-12 rounded-full border-2 border-gray-200 dark:border-gray-900 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl group"
      >
        <div className="relative w-4 h-4">
          <Sun
            className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 ease-in-out transform ${
              theme === 'dark'
                ? 'rotate-90 scale-0 opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
          />

          <Moon
            className={`absolute inset-0 w-6 h-6 text-blue-500 transition-all duration-500 ease-in-out transform ${
              theme === 'dark'
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </div>

        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            theme === 'dark'
              ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]'
              : 'shadow-[0_0_20px_rgba(234,179,8,0.3)]'
          } opacity-0 group-hover:opacity-100`}
        />
      </Button>

      <div
        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-black transition-all duration-300 ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-yellow-500'
        }`}
      />
    </div>
  );
}
