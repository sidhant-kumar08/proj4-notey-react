import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Feedback from './components/Feedback.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import ErrorElement from './components/ErrorElement.jsx'
import Home from './components/Home.jsx'
import Create from './components/Create.jsx'
import ViewNotes from './components/ViewNotes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'feedback',
        element: <Feedback />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'create',
        element: <Create />
      },
      {
        path: 'view',
        element: <ViewNotes />
      }
    ],
    errorElement: <ErrorElement />
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
