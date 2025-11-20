import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#EA580C] fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Contenedor principal */}
      <div className="flex justify-between items-center p-3 md:p-2 xl:p-1  max-w-7xl mx-auto      ">
        {/* Logo */}
        <div className="cursor-pointer w-8 transition-transform duration-300 hover:scale-110 xl:w-[50px] xl:h-auto ">
          <Link to="/" >
            <img src="\imgs\logo-home-1.jpg" alt="Logo de Celine Betancourt" />
          </Link>
        </div>

        <div className=" flex flex-col items-center ">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-title-one  text-white                ">
            CELINE BETANCOURT
          </h1> 
          <h2 className="text-white md:text-xl xl:text-2xl  font-home-one  ">
            Nutrióloga
          </h2> 
        </div>

        {/* Ícono hamburguesa (solo visible en pantallas pequeñas) */}
        <div
          className="xl:hidden flex flex-col cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-[30px] h-[4px] bg-white mb-[5px] rounded-[2px] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`w-[30px] h-[4px] bg-white mb-[5px] rounded-[2px] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-[30px] h-[4px] bg-white rounded-[2px] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </div> 

        {/* Menú */}
        <nav
          className={`xl:flex xl:static absolute top-[64px] left-0 w-full xl:w-auto bg-orange-600 xl:bg-transparent transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
          }`}
        >
          <ul className="flex flex-col xl:flex-row text-center xl:text-left font-title-one  ">
            <li className="m-[15px] xl:text-xl text-white hover:text-gray-200 transition-colors">
              <Link to="/" onClick={() => setIsOpen(false)}>INICIO</Link>
            </li>
            <li className="m-[15px] xl:text-xl text-white hover:text-gray-200 transition-colors">
              <Link to="/acerca-de-mi" onClick={() => setIsOpen(false)}>SOBRE MI</Link>
            </li>
            <li className="m-[15px] xl:text-xl text-white hover:text-gray-200 transition-colors">
              <Link to="/servicios" onClick={() => setIsOpen(false)}>SERVICIOS</Link>
            </li>
            <li className="m-[15px] xl:text-xl text-white hover:text-gray-200 transition-colors">
              <Link to="/contacto" onClick={() => setIsOpen(false)}>CONTACTO</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
