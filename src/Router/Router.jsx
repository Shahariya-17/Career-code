import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayouts from "../pages/layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/register',
            Component: Register
        },
        {
            path:'/signin',
            Component:SignIn
        }
    ]
  },
]);

export default router;