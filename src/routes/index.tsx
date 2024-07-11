import { FC, LazyExoticComponent, lazy } from "react";
import { RouteObject } from "react-router-dom";
import { FAVORITES, HOME } from "../constants/routes";

const Home: LazyExoticComponent<FC> = lazy(() => import("../pages/Home/Home"));
const Favorites: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Favorites/Favorites")
);

export const routes: RouteObject[] = [
  { path: HOME, element: <Home /> },
  { path: FAVORITES, element: <Favorites /> },
];
