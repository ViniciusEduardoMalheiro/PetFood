import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Login } from "./components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cadastro } from "./components/Cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Cadastro",
    element: <Cadastro />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
