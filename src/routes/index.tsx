import { FC, LazyExoticComponent, lazy } from "react";
import { RouteObject } from "react-router-dom";
import { HOME } from "../constants/routes";

const Home: LazyExoticComponent<FC> = lazy(() => import("../pages/Home/Home"));

export const routes: RouteObject[] = [{ path: HOME, element: <Home /> }];
