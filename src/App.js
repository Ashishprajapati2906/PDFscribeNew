import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home_page/Home'

const App = () => {

  const route = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    }
  ])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App