import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/home/footer';
import { Loader2 } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

// Lazy load components with proper type handling for named exports
const HomePage = lazy(() => import('@/pages/home/Home').then(m => ({ default: m.HomePage })));
const ProjectPage = lazy(() => import('@/pages/project/Project').then(m => ({ default: m.ProjectPage })));
const NotFoundPage = lazy(() => import('@/pages/notFound/NotFound').then(m => ({ default: m.NotFoundPage })));
const ProfilePage = lazy(() => import('@/pages/profile/Profile').then(m => ({ default: m.ProfilePage })));
const ContactForm = lazy(() => import('@/components/home/ContactForm').then(m => ({ default: m.ContactForm })));

const PageLoader = () => (
  <div className="flex h-[60vh] w-full items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
