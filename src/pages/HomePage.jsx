import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const HomePage = () => {

  const dataPlans = [
    {
      img: "/imgs/plan1.jpg",
      title1: "PLAN DUO",
      description1bold: "Parejas o Roomies",
      description1: "que compartan comidas justos. ",
      title2: "PRECIO",
      description2: "$999 inicial duo, $899 seguimiento duo"
    },
    {
      img: "/imgs/plan2.jpg",
      title1: "PLAN FAMILIAR",
      description1bold: "Familias a partir de 3 integrantes",
      description1: "que compartan comidas.",
      title2: "PRECIO",
      description2: "$499 p/p inicial, $499 seguimientos"
    },
    {
      img: "/imgs/plan3.jpg",
      title1: "PAQUETE ANUAL",
      description1bold: "Que la disidia no te gane.",
      description1: "Este plan es perfecto para ti si deseas tener mas compromiso contigo y tus objetivos.",
      title2: "PRECIO",
      description2: "$5445 inicial + 11 seguimientos"
    },
    {
      img: "/imgs/plan4.jpg",
      title1: "PAQUETE ESTUDIANTE",
      description1bold: "Presenta tu credencial vigente",
      description1: "de ciclo escolar o constancia de estudios",
      title2: "PRECIO",
      description2: "$415 inicial, $375 seguimientos"
    }
  ]


  return (
    <header className="flex flex-col items-center ">
      <div 
      className="bg-[url(/imgs/img-home.jpg)] w-full h-[500px] bg-cover bg-center bg-no-repeat flex  justify-center items-end
      md:h-[1000px]
      xl:h-[2600px] xl:hidden  "
      >
        
        {/* <div className=" flex flex-col items-center mb-4  pt-12">
          <h1 className="text-5xl font-home font-bold text-shadow-2xs text-shadow-white  
          md:text-8xl ">
            Celine Betancourt
          </h1>     
          <h2 className="text-2xl md:text-5xl">
            NUTRIÓLOGA
          </h2> 
        </div> */}
        <div className=" mb-10  ">
          <button className="bg-red-400 text-white rounded-[15px] py-1 px-3 cursor-pointer mr-1 md:mr-2 hover:bg-red-500 border border-white/20 transition duration-300 shadow-md md:text-3xl " >
            <Link to="/acerca-de-mi" >CONÓCEME</Link>
          </button>
          <button className="bg-red-400 text-white rounded-[15px] py-1 px-3 cursor-pointer ml-1 md:ml-2 hover:bg-red-500 border border-white/20 transition duration-300 shadow-md md:text-3xl " >
            <Link to="/contacto" >CONTACTAME</Link>
          </button>
        </div>
      </div>
      <section className="hidden xl:w-full xl:h-[700px] xl:bg-red-500 xl:flex  ">
        <div className=" bg-[rgba(229,228,233,1)] w-[50%] flex flex-col justify-center " >
          <div className=" flex flex-col py-8"  >
            {/* <div className=" flex flex-col items-center mb-4  pt-12">
              <h1 className=" font-home font-bold text-shadow-2xs text-shadow-white  
            text-8xl text-center ">
                Celine Betancourt
              </h1>
              <h2 className="text-5xl">
                NUTRIÓLOGA
              </h2>
            </div> */}
            <div className=" flex justify-center ">
              <button className="bg-red-400 text-white rounded-[15px] py-1 px-3 cursor-pointer mr-1 md:mr-2 hover:bg-red-500 border border-white/20 transition duration-300 shadow-md text-2xl " >
                <Link to="/acerca-de-mi" >CONÓCEME</Link>
              </button>
              <button className="bg-red-400 text-white rounded-[15px] py-1 px-3 cursor-pointer ml-1 md:ml-2 hover:bg-red-500 border border-white/20 transition duration-300 shadow-md text-2xl " >
                <Link to="/contacto" >CONTACTAME</Link>
              </button>
            </div>
          </div>
          <div>
            <section className="w-full h-[250px] bg-red-600 rounded-[20px] flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]  " >
              <div className="w-full flex justify-center items-center gap-x-2 mb-2">
                <h2 className="text-5xl text-white font-two-title-1 ">
                  Mis redes
                </h2>
                <h2 className=" font-two-title-2 text-xl xl:text-7xl text-white " >
                  Sociales
                </h2>
              </div>
              <div className="w-full flex justify-around ">
                <a href="https://www.facebook.com/celine.betsa?rdid=CZd5WISSyL5FZYPC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JfgtZ7Ws2%2F#">
                <FaFacebook className="text-[150px] text-white cursor-pointer transition-transform duration-300 hover:scale-110 " />
                </a>
                <a href="https://www.instagram.com/nut.ricelinebetancourt/">
                  <FaInstagramSquare className="text-[150px] text-white cursor-pointer transition-transform duration-300 hover:scale-110 " />
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="bg-[url(/imgs/img-home.jpg)] bg-cover w-[50%] " ></div>
      </section>
      <section className="w-full h-[200px] md:h-[250px] bg-red-600 rounded-b-[20px] flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] xl:hidden " >
        <div className="w-full flex justify-center items-center gap-x-2 mb-2">
          <h2 className="text-3xl md:text-5xl text-white font-two-title-1  ">
            Mis redes
          </h2>
          <h2 className="text-5xl font-two-title-2 md:text-6xl text-white " >
            Sociales
          </h2>
        </div>
        <div className="w-full flex justify-around ">
          <a href="https://www.facebook.com/celine.betsa?rdid=CZd5WISSyL5FZYPC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JfgtZ7Ws2%2F#">
            <FaFacebook className="text-[120px] md:text-[150px] text-white cursor-pointer transition-transform duration-300 hover:scale-110 " />
          </a>
          <a href="https://www.instagram.com/nut.ricelinebetancourt/">
          <FaInstagramSquare className="text-[120px] md:text-[150px] text-white cursor-pointer transition-transform duration-300 hover:scale-110 " />
          </a>
        </div>
      </section>

      <section className=" bg-white w-[95%] h-[300px] md:h-[400px] xl:h-[750px] flex flex-col justify-center item-center my-4 rounded-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] ">
        <div className="text-center text-3xl md:text-4xl xl:text-5xl font-two-title-1 font-bold ">
          <h2>Servicios</h2>
        </div>
        <div className="flex" >
          <div className=" w-[35%] xl:w-[50%] h-[250px] xl:h-[600px] md:h-[350px] flex flex-col items-center  xl:items-end xl:pr-15 xl:my-5 justify-center  gap-1 xl:gap-4 py-2 " >
            <div className="w-[90px] h-[50px] md:w-[180px] h-[150px] xl:w-[300px] bg-[url(/imgs/nutricion-clinica.jpeg)] rounded-[5px] bg-cover " ></div>
            <div className="w-[90px] h-[50px] md:w-[180px] h-[150px] xl:w-[300px] bg-[url(/imgs/control-peso.jpg)] rounded-[5px] bg-cover " ></div>
            <div className="w-[90px] h-[50px] md:w-[180px] h-[150px] xl:w-[300px] bg-[url(/imgs/educacion-diabetes.jpg)] rounded-[5px] bg-cover " ></div>
            <div className="w-[90px] h-[50px] md:w-[180px] h-[150px] xl:w-[300px] bg-[url(/imgs/planes-vegetarianos.jpg)] rounded-[5px] bg-cover " ></div>
          </div>
          <ul className=" w-[65%] xl:w-[50%] h-[250px] xl:h-[600px] md:h-[350px]  text-xl md:text-2xl xl:text-4xl flex justify-center flex-col gap-5 md:gap-14 xl:gap-25  xl:pl-15 font-descriptive font-bold ">
            <li>Nutricion Clinica.</li>
            <li>Control de Peso.</li>
            <li>Educación en Diabetes.</li>
            <li>Planes de alimentación vegetariana.</li>
          </ul>
        </div>
      </section>
      <section className="w-[95%] h-auto bg-gray-200 rounded-[10px] flex flex-col items-center rounded-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-3 ">
        <div className="w-full flex justify-center items-center gap-x-2 mb-2 xl:my-4 " >
          <h2 className="text-3xl md:text-4xl  xl:text-5xl font-two-title-1 font-bold  ">
            Que incluye tu
          </h2>
          <h2 className="text-5xl font-two-title-2  md:text-6xl xl:text-7xl " >
            Cita
          </h2>
        </div>
        <ul className="text-lg xl:text-2xl md:text-xl flex flex-col justify-center gap-1 bg-white w-[95%] md:w-[90%] xl:w-[50%] md:px-5 xl:py-5 rounded-[15px] font-descriptive font-bold " >
          <li className="flex items-center"><FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " />Evaluación nutricional completa</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Análisis de composición corporal</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Plan de Alimentación personalizado</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Guía de Recomendación de Alimentos, marcas y productos</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Educación nutricional</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Descuentos a cursos, talleres y rifas</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Acompañamiento constante vía WA</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Establecimiento de metas realistas</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Plan de Suplementación *en caso de ser necesario*</li>
          <li className="flex items-center" > <FaCheckCircle className="text-white bg-orange-500 rounded-[15px] text-[20px] " /> Descuentos en varios centros de ejercicio/entrenamiento </li>
        </ul>
      </section>
      {/* <section className="w-[95%] h-[600px] md:h-auto xl:h-[650px] bg-white rounded-[15px] flex flex-col items-center my-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)] ">
        <div className="w-full h-[200px] xl:h-[300px] bg-[url(/imgs/planes-alimentacion.jpeg)] bg-cover bg-center rounded-t-[15px] " >
        </div>
        <div className="w-full flex justify-center items-center gap-x-2 mb-2 xl:my-4 " >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-two-title-1 font-bold ">
            Planes de
          </h2>
          <h2 className="text-5xl font-two-title-2 md:text-6xl xl:text-7xl " >
            Alimentacón
          </h2>
        </div>
        <section className="w-[80%]  ">
          <h2 className="text-center md:text-xl font-bold xl:text-2xl font-subtitles ">Te presento mis planes de alimentación con los cuáles podrás lograr grandes resultados</h2>
        </section>
        <ul className="flex flex-col text-lg md:text-xl xl:text-2xl w-[90%] xl:w-[55%] font-descriptive font-bold ">
          <li>• Acceso a contenido ilimitado de videos, reseñas, tips, entre otras cosas</li>
          <li>• Lista del super. (Información de dónde encontrar los productos)</li>
          <li>• Acceso al grupo de chat para compartir comentarios</li>
          <li>• Acceso a la base de datos de preguntas comunes completas</li>
          <li>• Entre otras cosas</li>
        </ul>
      </section> */}

      <section className="w-[95%] h-auto md:h-auto xl:h-[650px] bg-white rounded-[15px] flex flex-col items-center my-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)]" >
        <div className="w-full flex flex-col  items-center gap-x-2 mb-2 xl:my-4 " >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-two-title-1 font-bold ">
            Esquemas de
          </h2>
          <h2 className="text-5xl font-two-title-2 md:text-6xl xl:text-7xl " >
            Planes
          </h2>
          <div className="flex flex-col items-center  " >
            {
              dataPlans.map((plans, id) => (
                <div className=" rounded-[25px] flex flex-col items-center w-[90%] my-2 rounded-[100px] border-8 border-orange-500  " key={id}>
                  <div className=" relative flex justify-center " >
                    <div className={`w-full h-auto   `} >
                      <img src={plans.img} alt="imagen de menu" className="rounded-[90px] border-8 border-orange-500 " />
                    </div>
                    <div className="bg-orange-500 rounded-[15px] px-6 py-3 absolute  -bottom-6 " >
                      <h2 className="text-white text-2xl font-bold " >{plans.title1}</h2>
                    </div>
                  </div> 

                  <div className="flex flex-col items-center w-[70%] my-6 " >
                    <p className="text-center font-bold " >{plans.description1bold}</p>
                    <p className="text-center" >{plans.description1}</p>
                    <h3 className="font-bold" >{plans.title2}</h3>
                    <p className="text-center" >{plans.description2}</p>                   
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

    </header>
  )
}

export default HomePage
