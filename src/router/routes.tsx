import { lazy } from "react";

const HomePage = lazy(() => import("@/components/Pages/HomePage"));

export interface RouteConfig {
  path: string;
  name: string;
  Component: React.LazyExoticComponent<React.FC>;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    Component: HomePage,
  },
  {
    path: "*",
    name: "Redirect", // Simple catch-all to redirect back home or 404
    Component: HomePage,
  }
];

export default routes;
