import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Movies from "../movies";
import { About } from "../about/About";

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
    ],
  },
]);
