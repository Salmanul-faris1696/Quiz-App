import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import QuizzeHome from './pages/QuizzeHome.jsx'
import Questions from './pages/Questions.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'

const router =createBrowserRouter ([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <QuizzeHome />,
        // children: [
        //   {
        //     path:'quiz/:id',
        //     element: <Questions />
        //   }
        // ]

    }
  ]
  },
   {
            path:'quiz/:id',
            element: <Questions />
          }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<GlobalProvider>
    <RouterProvider router={router} />
</GlobalProvider>
  </React.StrictMode>,
)
