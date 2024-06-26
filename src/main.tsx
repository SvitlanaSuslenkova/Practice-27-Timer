//import React from "react";
import * as React from "react";
import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom/client";
//import App from './App';

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
