import { Link } from "react-router-dom"
const ServicesPage = () => {
  return (
    <div className="w-full flex flex-col items-center" >
      <section className='flex flex-col items-center md:flex-row md:gap-x-3 xl:gap-x-5 xl:mt-5' >
        <h1 className="text-4xl font-two-title-1 font-bold md:text-5xl xl:text-7xl text-white text-shadow-lg ">
          Mis
        </h1>
        <h2 className=" font-two-title-2 font-bold text-6xl md:text-7xl xl:text-9xl text-white text-shadow-lg " >
          Servicios
        </h2>
      </section>

      <section className="w-[95%] " >
  
        <div className="w-full flex flex-col items-center xl:flex-row " >
          <div className="bg-[url(/imgs/nutricion-clinica.jpg)] w-full h-[220px] md:h-[350px] bg-cover bg-center rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] mt-2   " ></div>
          <div className="xl:flex xl:flex-col xl:w-full  " >
            <h2 className='text-white font-one-title font-bold text-xl md:text-2xl bg-[rgba(254,64,52,1)] rounded-t-[25px]  py-1  text-center'>NUTRICIÓN CLÍNICA</h2>
            <div className='bg-white w-full h-auto rounded-b-[25px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:text-lg xl:text-2xl font-descriptive font-bold ' >
              <h3>
                Se evalúa el estado nutricional del paciente y se crea planes de alimentación individualizados para ayudar en la recuperación de enfermedades o cirugías, así como para tratar padecimientos como la diabetes, hipertensión, enfermedades cardiovasculares, problemas gastrointestinales y renales.  
              </h3>
          </div>
          </div>
        </div>


        < hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-25"   />
        {/* < hr className="h-1 bg-gray-300 shadow-md my-12"   /> */}

   
        <div className="w-full flex flex-col items-center xl:flex-row " >
          <div className="bg-[url(/imgs/control-peso-1.jpg)] w-full h-[220px] md:h-[350px] bg-cover bg-center rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] mt-2  order-1 xl:order-2 " ></div>
          <div className="xl:flex xl:flex-col xl:w-full order-2 xl:order-1 " >
            <h2 className='text-white font-one-title font-bold text-xl md:text-2xl bg-[rgba(254,64,52,1)] rounded-t-[25px]  py-1  text-center'>CONTROL DE PESO</h2>
            <div className='bg-white w-full h-auto rounded-b-[25px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:text-lg xl:text-2xl font-descriptive font-bold ' >
              <h3>
                Consiste en ayudar al paciente a mantener un peso corporal saludable. Esto se logra a través de un equilibrio entre la ingesta de calorías y el gasto energético, mediante una combinación de dieta, ejercicio y cambios en el estilo de vida. Se enfoca en alcanzar y mantener un peso ideal para prevenir enfermedades como la obesidad.    
              </h3>
          </div>
          </div>
        </div>


        < hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-25"   />

  
        <div className="w-full flex flex-col items-center xl:flex-row " >
          <div className="bg-[url(/imgs/educacion-diabetes-1.jpg)] w-full h-[220px] md:h-[350px] bg-cover bg-center rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] mt-2  " ></div>
          <div className="xl:flex xl:flex-col xl:w-full " >
            <h2 className='text-white font-one-title font-bold text-xl md:text-2xl bg-[rgba(254,64,52,1)] rounded-t-[25px]  py-1  text-center '>EDUCACÍON EN DIABETES</h2>
            <div className='bg-white w-full h-auto rounded-b-[25px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:text-lg xl:text-2xl font-descriptive font-bold ' >
              <h3>
                El objetivo es brindar a los pacientes y sus familias los conocimientos y herramientas necesarias para manejar la diabetes de forma efectiva y segura. El programa abarca temas como la planificación de comidas, el conteo de carbohidratos, el control de la glucosa y la comprensión de cómo los alimentos afectan la enfermedad.    
              </h3>
          </div>
          </div>
        </div>
 

        < hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-25"   />

      
        <div className="w-full flex flex-col items-center xl:flex-row " >
          <div className="bg-[url(/imgs/alimentacion-vegetariana.jpg)] w-full h-[220px] md:h-[350px] bg-cover bg-center rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] mt-2 order-1 xl:order-2  " ></div>
          <div className="xl:flex xl:flex-col xl:w-full order-2 xl:order-1" >
            <h2 className='text-white font-one-title font-bold text-xl md:text-2xl bg-[rgba(254,64,52,1)] rounded-t-[25px]  py-1  text-center'>ALIMENTACÍON VEGETARIANA</h2>
            <div className='bg-white w-full h-auto rounded-b-[25px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:text-lg xl:text-2xl font-descriptive font-bold ' >
              <h3>
                Es la creación de dietas vegetarianas (que no incluyen carne, aves ni mariscos) y veganas (sin ningún producto de origen animal) que sean completas, variadas y nutritivas. El objetivo es asegurar que se cubran todos los requerimientos nutricionales, como hierro, vitamina B12, calcio y proteínas, que pueden ser difíciles de obtener sin la ayuda de un profesional.   
              </h3>
          </div>
          </div>
        </div>
   

        <div className="w-full flex justify-center my-2 " >
          <button className="bg-red-400 text-white rounded-[15px] py-1 px-3 cursor-pointer ml-1 md:ml-2 hover:bg-red-500 border border-white/20 transition duration-300 shadow-md md:text-2xl " >
            <Link to="/contacto" >CONTACTAME</Link>
          </button>
        </div>
      </section>
     
    </div>
  )
}

export default ServicesPage
