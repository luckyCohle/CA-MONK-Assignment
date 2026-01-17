import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './CustomComponents/Navbar'
import Home from './pages/Home'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    }
  ])
  return (
    <div className='min-w-screen min-h-screen flex flex-col justify-between items-center bg-gray-100'>
    <Navbar/>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
