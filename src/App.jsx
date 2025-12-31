import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import Preloader from "./components/ui/Preloader";

// Importamos las Páginas
const HomePage = lazy(() => import("./components/Pages/HomePage"));
const MenuPage = lazy(() => import("./components/Pages/MenuPage"));

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<Preloader />}>
          <Routes>
            {/* Ruta Principal (Landing Page) */}
            <Route path="/" element={<HomePage />} />

            {/* Ruta del Menú Completo */}
            <Route path="/menu" element={<MenuPage />} />

            {/* Puedes agregar más rutas aquí en el futuro (ej: /contacto) */}
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
