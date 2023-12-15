import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./Pages/HomePage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import BlogPage from "./Pages/BlogPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
};

export default App;
