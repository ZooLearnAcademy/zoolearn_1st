import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Layout components
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import PoriferaPhylum1 from "./components/zoohub/porifera/Phylum1";
import CoelenterataPhylum2 from "./components/zoohub/coelenterata/Phylum2";
import CtenophoraPhylum3 from "./components/zoohub/ctenophora/Phylum3";
import PlatyhelminthesPhylum4 from "./components/zoohub/Plathyhelminthes/Phylum4";
import AschelminthesPhylum5 from "./components/zoohub/aschelminthes/Phylum5";
import AnnelidaPhylum6 from "./components/zoohub/annelida/Phylum6";
import ArthropodaPhylum7 from "./components/zoohub/arthropoda/Phylum7";
import MolluscaPhylum8 from "./components/zoohub/mollusca/Phylum8";
import Echinodermata from "./components/zoohub/echinodermata/Phylum9";
import Hemichordata from "./components/zoohub/hemichordata/Phylum10";
// import Chordata from "./components/zoohub/chordata/Phylum11";
import BasicFeatures from './components/home/concept/BasicFeatures/BasicFeatures';
import Patterns from './components/home/concept/Patternsofcomplexities/Patterns';


// Shared components
import { ToastProvider, Spinner, UnderDevelopment, ScrollToTop } from './components/shared';

// Lazy load pages for better performance
const Home = lazy(() => import('./components/home/Home'));
const Tree = lazy(() => import('./components/taxonomytree/tree'));
const ZooHub = lazy(() => import('./components/zoohub/ZooHub'));
const About = lazy(() => import('./components/company/about/about'));
const TheLivingWorld = lazy(() => import('./components/home/concept/thelivingworld/TheLivingWorld'));
function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Global Page Loader Logic
  useEffect(() => {
    // Handler for when everything (including images) is loaded
    const handleLoad = () => {
      // Small timeout to ensure smooth transition
      setTimeout(() => setIsLoading(false), 500); // reduced from 800
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Safety fallback: Force load after 2 seconds (was 4s)
    const outputTimeout = setTimeout(() => setIsLoading(false), 2000);

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
              <Route path="/zoohub" element={<ZooHub />} />
              <Route path="/about" element={<About />} />
              <Route path="/livingworld" element={<TheLivingWorld />} />
              <Route path="/basic-features-of-classification" element={<BasicFeatures />} />
              <Route path="/patterns-of-complexities" element={<Patterns />} />

              {/* Species Detail Routes */}
              <Route path="/zoohub/porifera/:slug" element={<PoriferaPhylum1 />} />
              <Route path="/zoohub/coelenterata/:slug" element={<CoelenterataPhylum2 />} />
              <Route path="/zoohub/ctenophora/:slug" element={<CtenophoraPhylum3 />} />
              <Route path="/zoohub/platyhelminthes/:slug" element={<PlatyhelminthesPhylum4 />} />
              <Route path="/zoohub/aschelminthes/:slug" element={<AschelminthesPhylum5 />} />
              <Route path="/zoohub/annelida/:slug" element={<AnnelidaPhylum6 />} />
              <Route path="/zoohub/arthropoda/:slug" element={<ArthropodaPhylum7 />} />
              <Route path="/zoohub/mollusca/:slug" element={<MolluscaPhylum8 />} />
              <Route path="/zoohub/echinodermata/:slug" element={<Echinodermata />} />
              <Route path="/zoohub/hemichordata/:slug" element={<Hemichordata />} />
              {/* <Route path="/zoohub/chordata/:slug" element={<Chordata />} /> */}

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