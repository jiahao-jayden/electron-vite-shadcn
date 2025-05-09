import { Router } from "../../lib/electron-router-dom"

import { Route } from "react-router-dom"
import MainScreen from "./MainScreen"
import { Layout } from "./layout"

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainScreen />} />
          </Route>
        </>
      }
    />
  )
}
