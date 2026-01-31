import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Layout components
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

// Shared components
import { ToastProvider, Spinner, UnderDevelopment, ScrollToTop } from './components/shared';

// Lazy load pages for better performance
const Home = lazy(() => import('./components/home/Home'));
const Tree = lazy(() => import('./components/taxonomytree/tree'));
const About = lazy(() => import('./components/company/about/about'));

function App() {
  const location = useLocation();

  return (
    <ToastProvider>
      <div className="app-container">
        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Header Section */}
        <Header />

        {/* Main Content Area with Loading State */}
        <main className="main-content">
          <Suspense fallback={<Spinner fullPage text="Loading..." />}>
            <Routes>
              {/* Working Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/taxonomy-tree" element={<Tree />} />
              <Route path="/about" element={<About />} />

              {/* All other routes - Under Development */}
              <Route path="*" element={<UnderDevelopment />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer Section - Hidden on Taxonomy Tree */}
        {location.pathname !== '/taxonomy-tree' && <Footer />}
      </div>
    </ToastProvider>
  );
}

export default App;