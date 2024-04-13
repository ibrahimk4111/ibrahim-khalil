import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import Resume from "./components/Resume/Resume.tsx";
import Blogs from "./components/Blogs/Blogs.tsx";
import LayOut from "./components/LayOut/LayOut.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
