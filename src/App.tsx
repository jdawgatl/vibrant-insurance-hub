
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/utils/ScrollToTop";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { AgentLogin } from "@/pages/AgentLogin";

// Lazy load all routes for better initial load performance
const Index = lazy(() => import("@/pages/Index"));
const About = lazy(() => import("@/pages/About"));
const Service = lazy(() => import("@/pages/Service"));
const Products = lazy(() => import("@/pages/Products"));
const Auto = lazy(() => import("@/pages/products/Auto"));
const Commercial = lazy(() => import("@/pages/products/Commercial"));
const Bonds = lazy(() => import("@/pages/products/Bonds"));
const Home = lazy(() => import("@/pages/products/Home"));
const Quote = lazy(() => import("@/pages/Quote"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Admin = lazy(() => import("@/pages/Admin"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const GeorgiaInsurance = lazy(() => import("@/pages/GeorgiaInsurance"));
const TennesseeAutoInsurance = lazy(() => import("@/pages/TennesseeAutoInsurance"));
const MississippiHomeInsurance = lazy(() => import("@/pages/MississippiHomeInsurance"));

const SEOWrapper = () => {
  const location = useLocation();
  const baseUrl = "https://sfg-ins.com";
  const currentUrl = `${baseUrl}${location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Standard Financial Group",
    "image": `${baseUrl}/images/logo.png`,
    "url": baseUrl,
    "telephone": "(770) 997-7999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "490 Bradley Dr Ste A",
      "addressLocality": "Fayetteville",
      "addressRegion": "GA",
      "postalCode": "30214",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.4469444",
      "longitude": "-84.4548893"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "16:00"
    },
    "sameAs": [
      "https://www.facebook.com/standardfinancialgroup",
      "https://www.linkedin.com/company/standard-financial-group"
    ]
  };

  return (
    <Helmet>
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-gray-600">Loading...</div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<LoadingFallback />}>
            <Index />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        } />
        <Route path="/service" element={
          <Suspense fallback={<LoadingFallback />}>
            <Service />
          </Suspense>
        } />
        <Route path="/products" element={
          <Suspense fallback={<LoadingFallback />}>
            <Products />
          </Suspense>
        } />
        <Route path="/products/auto" element={
          <Suspense fallback={<LoadingFallback />}>
            <Auto />
          </Suspense>
        } />
        <Route path="/products/home" element={
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        } />
        <Route path="/products/commercial" element={
          <Suspense fallback={<LoadingFallback />}>
            <Commercial />
          </Suspense>
        } />
        <Route path="/products/bonds" element={
          <Suspense fallback={<LoadingFallback />}>
            <Bonds />
          </Suspense>
        } />
        <Route path="/quote" element={
          <Suspense fallback={<LoadingFallback />}>
            <Quote />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
          </Suspense>
        } />
        <Route path="/privacy" element={
          <Suspense fallback={<LoadingFallback />}>
            <Privacy />
          </Suspense>
        } />
        <Route path="/agent-login" element={<AgentLogin />} />
        <Route path="/admin/*" element={
          <Suspense fallback={<LoadingFallback />}>
            <Admin />
          </Suspense>
        } />
        <Route path="/georgia-insurance" element={
          <Suspense fallback={<LoadingFallback />}>
            <GeorgiaInsurance />
          </Suspense>
        } />
        <Route path="/tennessee-auto-insurance" element={
          <Suspense fallback={<LoadingFallback />}>
            <TennesseeAutoInsurance />
          </Suspense>
        } />
        <Route path="/mississippi-home-insurance" element={
          <Suspense fallback={<LoadingFallback />}>
            <MississippiHomeInsurance />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingFallback />}>
            <NotFound />
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <HelmetProvider>
      <QueryProvider>
        <TooltipProvider>
          <ScrollToTop />
          <SEOWrapper />
          <main>
            <Toaster />
            <Sonner />
            <AnimatedRoutes />
          </main>
        </TooltipProvider>
      </QueryProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
