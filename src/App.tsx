
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Service from "./pages/Service";
import Products from "./pages/Products";
import Auto from "./pages/products/Auto";
import Commercial from "./pages/products/Commercial";
import Bonds from "./pages/products/Bonds";
import Home from "./pages/products/Home";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import AgentLogin from "./pages/AgentLogin";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const SEOWrapper = () => {
  const location = useLocation();
  const baseUrl = "https://sfg-ins.com";
  const currentUrl = `${baseUrl}${location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Standard Financial Group",
    "image": `${baseUrl}/og-image.png`,
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
    }
  };

  return (
    <Helmet>
      <link rel="canonical" href={currentUrl} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/auto" element={<Auto />} />
        <Route path="/products/home" element={<Home />} />
        <Route path="/products/commercial" element={<Commercial />} />
        <Route path="/products/bonds" element={<Bonds />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/agent-login" element={<AgentLogin />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SEOWrapper />
          <main>
            <Toaster />
            <Sonner />
            <AnimatedRoutes />
          </main>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
