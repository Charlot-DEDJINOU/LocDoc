import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/commons/Footer";
import Header from "./components/commons/Header";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Login from "./views/Login";
import PatientSignup from "./views/register/Individu";
import DoctorSignup from "./views/register/Medecin";
import PatientDashboard from "./views/dashboard/client";
import DoctorProfile from "./views/profil/Doctor";
import Chat from "./components/chat";
import PatientRdv from "./views/dashboard/client/Rdv";
import PatientSearch from "./views/dashboard/client/Search";
import DoctorDashboard from "./views/dashboard/DoctorDashboard";
import ChatMessagerie from "./views/dashboard/client/ChatMessagerie";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<PatientDashboard />} />
              <Route path="/rdv" element={<PatientRdv />} />
              <Route path="/search" element={<PatientSearch />} />
              <Route path="/chat" element={<ChatMessagerie />} />
              <Route path="/profile/:id" element={<DoctorProfile />} />
              {/* <Route path="/chat" element={<Chat />} /> */}
              <Route path="/register" element={<PatientSignup />} />
              <Route path="/docteur/register" element={<DoctorSignup />} />
              <Route path="/docteur/dashboard" element={<DoctorDashboard />} />
              <Route path="/login" element={<Login />} />
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
