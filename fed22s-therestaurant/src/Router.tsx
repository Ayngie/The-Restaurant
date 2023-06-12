import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/pages/Home";
import { Booking } from "./components/pages/Booking";
import { Contact } from "./components/pages/Contact";
import { Admin } from "./components/pages/Admin";
import { AdminHandleBooking } from "./components/pages/AdminHandleBooking";
import { AdminHandleSearch } from "./components/pages/AdminHandleSearch";

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
            path: "/admin",
            element: <AdminHandleSearch></AdminHandleSearch>,
          },
          {
            path: "/admin/:id",
            element: <AdminHandleBooking></AdminHandleBooking>,
          },
        ],
      },
    ],
  },
]);
