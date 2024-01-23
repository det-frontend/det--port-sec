import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./Pages/HomePage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import BlogPage from "./Pages/BlogPage";
import AboutDetails from "./Pages/AboutDetails";
import ThemeContext from "./services/context";

const App = () => {
  const [state, setState] = useState(false);
  // const ThemeContext = createContext();
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
        {
          path: "/aboutDetails",
          element: <AboutDetails />,
        },
      ],
    },
  ]);
  return (
    <>
      <ThemeContext.Provider value={{ state, setState }}>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
