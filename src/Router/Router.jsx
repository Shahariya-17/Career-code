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
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";



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
        {
            path: '/addJob',
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path: '/myPostedJobs',
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path:'/applications/:job_id',
            element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
        },
    ]
  },
]);

export default router;