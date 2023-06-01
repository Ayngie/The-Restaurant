import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HandleBooking } from "./components/HandleBooking";
import { Home } from "./components/pages/Home";
import { Booking } from "./components/pages/Booking";
import { Contact } from "./components/pages/Contact";
import { Admin } from "./components/pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
        children: [
          {
            path: "/admin/:id",
            element: <HandleBooking></HandleBooking>,
          },
        ],
      },
    ],
  },
]);
