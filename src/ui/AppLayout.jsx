import { Outlet } from "react-router-dom"

import Header from "./Header"

export default function AppLayout() {
  return (
    <div className="grid grid-cols-1 grid-rows-[80px_1fr]">
      <Header />
      <main className="px-1.6 py-4.8 bg-veryLightGray dark:bg-veryDarkBlue">
        <Outlet />
      </main>
    </div>
  )
}
