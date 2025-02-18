import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
  {
    path:'/addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`http://localhost:5000/updatecoffee/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />  </StrictMode>,
)
