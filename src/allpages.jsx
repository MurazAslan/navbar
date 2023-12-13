import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './homepage/homepage'
import Products from './products/products'
import Services from './services/services'
import Contact from './contact/contact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])
const AllPages = () => {
  return (
    <RouterProvider router={router}>


    </RouterProvider>
  )
}

export default AllPages
