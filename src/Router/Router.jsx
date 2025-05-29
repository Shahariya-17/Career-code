import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayouts from "../pages/layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoute from "../routes/PrivateRoute";
import MyApplications from "../pages/MyApplications/MyApplications";



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
            path: '/jobApply/:id',
            element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
            path:'/myApplications',
            element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
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