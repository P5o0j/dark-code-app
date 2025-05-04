import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/thanx", element: <ThankYou /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
