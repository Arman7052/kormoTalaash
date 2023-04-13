import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Statistics from './Pages/Statistics/Statistics'
import AppliedJobs from './Pages/AppliedJobs/AppliedJobs'
import Blog from './Pages/Blog/Blog'
import JobDetails from './Pages/Jobdetails/JobDetails'
import NotFound from './Pages/NotFound/NotFound'
import ErrorPage from './Pages/ErrorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/jobDetails',
        element: <JobDetails></JobDetails>
      },
      {
        path:"*",
        element: <NotFound></NotFound>
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
