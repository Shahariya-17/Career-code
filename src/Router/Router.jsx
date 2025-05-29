import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayouts from "../pages/layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";



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
        },
        {
            path:'/jobs/:id',
            Component:JobDetails,
            loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
    ]
  },
]);

export default router;