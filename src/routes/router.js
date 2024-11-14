import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/_component/Main";
import Intro from "../pages/intro/_component/Intro";
import Layout from "../pages/layout/_component/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
    ],
  },
]);

export default router;
