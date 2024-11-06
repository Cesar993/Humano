import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import FrontEnd from './pages/FrontEnd'
import Index from './pages/Index'
import DetallePelicula from './pages/DetallePelicula'


         
const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <FrontEnd/>,
      children:[
        {
          index:true,
          
          element:<Index/>
        },

        {
          path:'/pelicula',
          element: <DetallePelicula/>
        },

        
      ]
    }
  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
