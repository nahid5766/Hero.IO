import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppsDetails from "../pages/AppsDetails/AppsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/public/appsData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/public/appsData.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: () => fetch("/public/appsData.json"),
        Component: Installation,
      },
      {
        path: "/appsDetails/:id",
        loader: () => fetch("/public/appsData.json"),
        Component: AppsDetails,
      },
    ],
  },
]);
