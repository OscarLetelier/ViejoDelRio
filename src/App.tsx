import React, { lazy, Suspense } from "react";

import MainLayout from "@/layouts/mainlayout/MainLayout";
import FullPageLoader from "@/components/commons/fullpageloader/FullPageLoader";

const Hero = lazy(() => import("@/sections/home/Hero"));
const About = lazy(() => import("@/sections/about/About"));
const Menu = lazy(() => import("@/sections/menu/Menu"));
const Gallery = lazy(() => import("@/sections/gallery/Gallery"));
const Location = lazy(() => import("@/sections/location/Location"));

const App: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Suspense fallback={<FullPageLoader />}>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Location />
        </Suspense>
      </MainLayout>
    </>
  );
};

export default App;
