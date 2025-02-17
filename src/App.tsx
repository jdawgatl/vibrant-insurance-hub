
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "@/components/providers/accessibility";
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

const App = () => (
  <BrowserRouter>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AccessibilityProvider>
          <TooltipProvider>
            <a href="#main-content" className="skip-to-main">
              Skip to main content
            </a>
            <main id="main-content">
              <Toaster />
              <Sonner />
              <Routes>
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
            </main>
          </TooltipProvider>
        </AccessibilityProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
