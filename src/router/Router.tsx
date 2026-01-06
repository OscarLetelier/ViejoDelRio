import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import Preloader from "@/components/ui/Preloader";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <Routes>
          {routes.map(({ Component, name, path }) => (
            <Route
              key={name}
              path={path}
              element={
                <MainLayout>
                  <Component />
                </MainLayout>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
