import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import RootLayout from './layout/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/store', element: <Store /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <h1>404 - Page Not Found</h1> },
    ],
  },
])
