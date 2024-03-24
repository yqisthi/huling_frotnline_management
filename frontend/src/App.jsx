import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage, LoginPage, InputStackPage, PlanningPage, LaporanInventoryPage, LaporanPenjualanPage, LaporanReturPage } from "./pages"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/stackinput" element={<InputStackPage />} />
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/inventory" element={<LaporanInventoryPage />} />
          <Route path="/penjualan" element={<LaporanPenjualanPage />} />
          <Route path="/retur" element={<LaporanReturPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
