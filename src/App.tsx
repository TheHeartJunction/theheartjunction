import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Reviews } from "./components/Reviews";
import Auth from "./pages/Auth";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const Products = lazy(() => import('./pages/Products'));
const Home = lazy(() => import('./pages/Home'));

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-heart-500"></div>
                </div>
              }>
                <div className="transition-opacity duration-500">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<Index />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="*" element={<Index />} />
                  </Routes>
                </div>
              </Suspense>
            </TooltipProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
