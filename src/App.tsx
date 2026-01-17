import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./CustomComponents/Layout"
import CreateBlogPost from "./pages/CreateBlogPost"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,   
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/add",
          element:<CreateBlogPost/>
        }
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
