import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import AppLayout from "./ui/AppLayout"
import Countries from "./pages/Countries"
import PageNotFound from "./pages/PageNotFound"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="countries" />} />
          <Route path="countries" element={<Countries />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
