import React, { Suspense, lazy, useState, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  // Global Page Loader Logic
  useEffect(() => {
    // Handler for when everything (including images) is loaded
    const handleLoad = () => {
      // Small timeout to ensure smooth transition
      setTimeout(() => setIsLoading(false), 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Safety fallback: Force load after 4 seconds even if an asset is stuck
    const outputTimeout = setTimeout(() => setIsLoading(false), 4000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(outputTimeout);
    };
  }, []);

  if (isLoading) {
    return <Spinner fullPage text="Loading ZooLearn..." />;
  }

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