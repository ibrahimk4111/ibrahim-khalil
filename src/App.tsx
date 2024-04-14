import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import Resume from "./components/Resume/Resume.tsx";
import Blogs from "./components/Blogs/Blogs.tsx";
import LayOut from "./components/LayOut/LayOut.tsx";
import ContextProvider from "./components/Context/ContextProvider.tsx";
import { paths } from "./utils/paths.ts";
import Home from "./components/Home/Home.tsx";

const router = createHashRouter([
  {
    path: paths.layout.root,
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.layout.home,
        element: <Home />,
      },
      {
        path: paths.layout.blogs,
        element: <Blogs />,
      },
    ],
  },
  {
    path: paths.Resume,
    element: <Resume />,
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
