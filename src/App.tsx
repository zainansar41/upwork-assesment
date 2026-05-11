import { Route, Routes } from "react-router-dom"
import { AppLayout } from "@/components/app-layout"
import { ComponentShowcasePage } from "@/pages/ComponentShowcase"
import { HomePage } from "@/pages/Home"

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<AppLayout />}>
        <Route path="components" element={<ComponentShowcasePage />} />
      </Route>
    </Routes>
  )
}
