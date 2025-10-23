import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#EA580C] flex flex-col items-center gap-2 py-2 ">
      <div className="w-[130px] h-[90px] md:w-[250px] md:h-[180px] xl:w-[300px] xl:h-[220px] bg-[url(/imgs/logo-footer-1.jpg)] bg-cover bg-center xl:bg-cover xl-bg-center " >
      </div>
      <div className="w-full flex justify-around ">
        <a href="https://www.facebook.com/people/Nutri%C3%B3loga-Celine-Betancourt/100094933850379/#">
          <FaFacebook className="text-[80px] md:text-[130px] xl:text-[150px] text-white cursor-pointer transition-transform duration-300 hover:scale-110 " />
        </a>
        <a href="https://www.instagram.com/nut.ricelinebetancourt/">
          <FaInstagramSquare className="text-[80px] md:text-[130px] xl:text-[150px] text-white cursor-pointer transition-transform duration-300 hover:scale-110 " />
        </a>
      </div>
      <h2 className="text-white text-lg md:text-2xl xl:text-3xl" >2025-Derechos reservador</h2>
      <div className="flex items-center" >
        <h2 className="text-white text-lg md:text-2xl xl:text-3xl" >Diseñado por: RS Studio</h2>
        <a href="https://ramonsalas.com/">
          <div className="w-[55px] h-[45px] md:w-[100px] md:h-[80px] bg-[url(/imgs/logo-RS.png)] bg-cover bg-center rounded-[10px] cursor-pointer transition-transform duration-300 hover:scale-110 " ></div>
        </a>
      </div>
    </div>
  )
}

export default Footer
