import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      {/* Page content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
