import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { DarkModeProvider } from "./context/DarkModeContext"

import AppLayout from "./ui/AppLayout"
import Countries from "./pages/Countries"
import PageNotFound from "./pages/PageNotFound"
import Country from "./pages/Country"

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="countries" />} />
            <Route path="countries" element={<Countries />} />
            <Route path="countries/:name" element={<Country />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}
