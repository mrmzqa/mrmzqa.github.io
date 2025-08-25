import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// No need for repoName or basename if it's a user site
export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]
);
