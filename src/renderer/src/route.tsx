import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainScreen from "./MainScreen"
import { Layout } from "./layout"
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
