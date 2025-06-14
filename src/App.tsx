import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/commons/Footer";
import Header from "./components/commons/Header";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Login from "./views/Login";
import PatientSignup from "./views/register/Individu";
import DoctorSignup from "./views/register/Medecin";


function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup-individu" element={<PatientSignup />} />
              <Route path="/signup-doctor" element={<DoctorSignup />} />
              <Route path="/signin" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  )
}

export default App
