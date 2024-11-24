import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Else from './components/Else.jsx';
import Project from './components/Project/Project.jsx';
import Studio from './components/Studio/Studio.jsx';
import News from './components/News/News.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path : "/else",
        element: <Else/>
      },
      {
        path : "/work",
        element: <Project/>
      },
      {
        path : "/studio",
        element: <Studio/>
      },
      {
        path: "/blog",
        element: <News/>
      }
    ]
  }]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)