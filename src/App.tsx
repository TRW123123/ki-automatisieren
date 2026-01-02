import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ModalProvider, useModal } from "./contexts/ModalContext";
import { QuickAnalysisModal } from "./components/QuickAnalysisModal";

import { checkAndRedirectDomain } from "./utils/domainRedirect";
import { LanguageWrapper } from "./components/LanguageWrapper";
import { ScrollToTop } from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load non-critical pages
const Fallstudien = lazy(() => import("./pages/Fallstudien"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Solutions = lazy(() => import("./pages/Solutions"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const Datenschutz = lazy(() => import("./pages/GizlilikPolitikasi"));
const Nutzungsbedingungen = lazy(() => import("./pages/KullanimKosullari"));
const WebsiteIn3Days = lazy(() => import("./pages/WebsiteIn3Days"));
const Website3DaysDanke = lazy(() => import("./pages/Website3DaysDanke"));
const StrategieberatungKI = lazy(() => import("./pages/StrategieberatungKI"));

// Solution pages - Direct import for better reliability - 2025-01-20T15:00:00Z
import {
  LeadGenerationKI,
  VertriebsAutomatisierung,
  MarketingAutomatisierung,
  CRMProzessAutomatisierung,
  KundenserviceAutomatisierung
} from "./pages/solutions";

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-lg text-muted-foreground">Loading...</div>
  </div>
);


const queryClient = new QueryClient();

// Component to handle modal integration  
const AppWithModal = () => {
  const { isQuickAnalysisOpen, closeQuickAnalysis } = useModal();
  
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Routes>
          {/* German Routes */}
          <Route path="/" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Index />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/losungen" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Solutions />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/fallstudien" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Fallstudien />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/fallstudien/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <CaseStudyDetail />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/blog" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Blog />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/blog/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <BlogPost />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/datenschutz" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Datenschutz />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/nutzungsbedingungen" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Nutzungsbedingungen />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/uber-uns" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <UeberUns />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/website-in-3-tagen" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <WebsiteIn3Days />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/website-in-3-tagen/danke" element={
            <LanguageWrapper>
              <Suspense fallback={<PageLoader />}>
                <Website3DaysDanke />
              </Suspense>
            </LanguageWrapper>
          } />
          
          <Route path="/strategieberatung-ki-sales-marketing" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <StrategieberatungKI />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          {/* 301 Redirect for broken link */}
          <Route path="/losungen/conversion-optimierung" element={
            <Navigate to="/losungen/marketing-automatisierung" replace />
          } />
          
          {/* Solution Landing Pages */}
          <Route path="/losungen/leadgenerierung-ki" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <LeadGenerationKI />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/losungen/vertriebsautomatisierung" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <VertriebsAutomatisierung />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/losungen/marketing-automatisierung" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <MarketingAutomatisierung />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/losungen/crm-prozessautomatisierung" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <CRMProzessAutomatisierung />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/losungen/kundenservice-automatisierung" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <KundenserviceAutomatisierung />
              </main>
              <Footer />
            </LanguageWrapper>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
      <QuickAnalysisModal 
        open={isQuickAnalysisOpen} 
        onOpenChange={closeQuickAnalysis} 
      />
    </>
  );
};


function DomainRedirectCheck() {
  useEffect(() => {
    checkAndRedirectDomain();
  }, []);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <LanguageProvider>
            <TooltipProvider>
              <DomainRedirectCheck />
              <ModalProvider>
                <AppWithModal />
              </ModalProvider>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </LanguageProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
