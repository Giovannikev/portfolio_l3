import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.tsx';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/themeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster closeButton richColors expand={false} position="top-right" />
      <App />
    </ThemeProvider>
  </StrictMode>
);
