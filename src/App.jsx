import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutMePage from "./pages/AboutMePage"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"
import DontFindPage from "./pages/DontFindPage"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    
    <div className="pt-[80px] bg-red-200 h-full " >
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}  />
        <Route path="/acerca-de-mi" element={<AboutMePage/>}  />
        <Route path="/servicios" element={<ServicesPage/>}  />
        <Route path="/contacto" element={<ContactPage/>}  />
        <Route path="*" element={<DontFindPage/>}  />
      </Routes>

      <Footer/>


    </div>

  )
}

export default App
