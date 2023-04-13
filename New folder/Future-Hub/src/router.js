import React from "react";
import {
  createBrowserRouter,

} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./pages/HomePage";

import JobDetails from "./Components/JobDetails/JobDetails";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import Blog from "./Components/Blog/Blog";
import appliedJobsLoader from "./loaders/appliedJobsLoader";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: "/",
            element: <HomePage />,
            loader: () =>fetch('category.json')
          },
        {
            path: "/detail/:id",
            element: <JobDetails />,
            loader: () =>fetch('jobs.json')
          },
        {
            path: "/statistics",
            element: <Statistics />,
            
          },
        {
            path: "/applied-jobs",
            element: <AppliedJob />,
          loader : appliedJobsLoader

          },
        {
            path: "/blogs",
            element: <Blog />,
          },
        
      ]
    },
  ]);

  export default router