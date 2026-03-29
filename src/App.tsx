import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import NotreHistoire from "./pages/NotreHistoire";
import ProgrammeEducatif from "./pages/ProgrammeEducatif";
import ProgrammeDetail from "./pages/ProgrammeDetail";
import NotreEquipe from "./pages/NotreEquipe";
import NotreEspace from "./pages/NotreEspace";
import Activites from "./pages/Activites";
import NousJoindre from "./pages/NousJoindre";
import PlanifierVisite from "./pages/PlanifierVisite";
import Inscription from "./pages/Inscription";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/notre-histoire" element={<NotreHistoire />} />
            <Route path="/programme-educatif" element={<ProgrammeEducatif />} />
            <Route path="/programme-educatif/:slug" element={<ProgrammeDetail />} />
            <Route path="/notre-equipe" element={<NotreEquipe />} />
            <Route path="/notre-espace" element={<NotreEspace />} />
            <Route path="/activites" element={<Activites />} />
            <Route path="/nous-joindre" element={<NousJoindre />} />
            <Route path="/nous-joindre/planifier-une-visite" element={<PlanifierVisite />} />
            <Route path="/nous-joindre/inscription" element={<Inscription />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
