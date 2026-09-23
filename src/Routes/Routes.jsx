import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppsDetails from "../pages/AppsDetails/AppsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        loader: () => fetch("/appsData.json"),
        element: <Home />,
      },
      {
        path: "apps",
        loader: () => fetch("/appsData.json"),
        element: <Apps />,
      },
      {
        path: "installation",
        loader: () => fetch("/appsData.json"),
        element: <Installation />,
      },
      {
        path: "appsDetails/:id",
        loader: () => fetch("/appsData.json"),
        element: <AppsDetails />,
      },
    ],
  },
]);
