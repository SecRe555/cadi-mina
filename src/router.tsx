import { createBrowserRouter } from "react-router-dom";
import Index from "@routes/Index";
import Layout from "./routes/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Index />,
      },
    ],
  },
]);

export default router;
