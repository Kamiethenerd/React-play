import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
const container = document.getElementById("root");
const root = createRoot(container);

const router = createRouter({routeTree });

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  );
};

root.render(React.createElement(App));
