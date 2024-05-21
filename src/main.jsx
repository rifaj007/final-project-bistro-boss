import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
   RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <div className='font-inter font-medium'>
         <RouterProvider router={router} />
      </div>
   </React.StrictMode>,
)
