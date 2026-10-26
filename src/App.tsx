import { Route, Routes } from "react-router-dom";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import RouteGuard from "@/Components/RouteGuard";
import Home from "@/Components/Home";
import ProjectDetail from "@/Components/Projects/ProjectDetail";
import NotFound from "@/Components/NotFound";
import BackgroundFX from "@/Components/Background/BackgroundFX";

/**
 * Central application component.
 *
 * As required by the brief, every component is wired up from this single
 * App.tsx. It renders the persistent chrome (Navbar + Footer) around a set of
 * routes. Routes are wrapped in <RouteGuard> so access can be gated later; the
 * public site is open by default.
 *
 * BackgroundFX sits fixed at z-0 behind everything; the chrome + routes wrap
 * in a relative z-10 layer so they always paint on top of it.
 */
export default function App() {
  return (
    <>
      <BackgroundFX />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <RouteGuard canActivate>
                  <Home />
                </RouteGuard>
              }
            />
            <Route
              path="/projects/:slug"
              element={
                <RouteGuard canActivate>
                  <ProjectDetail />
                </RouteGuard>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}
