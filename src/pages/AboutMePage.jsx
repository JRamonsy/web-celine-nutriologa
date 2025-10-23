import React from 'react'

const AboutMePage = () => {
  return (
    <div className='w-full flex flex-col items-center  '>

      <section className='flex flex-col items-center md:flex-row md:gap-x-3 xl:gap-x-5 xl:mt-5' >
        <h1 className="text-4xl md:text-5xl xl:text-7xl text-white text-shadow-lg ">
          Conoce mas
        </h1>
        <h2 className=" font-home-1 text-4xl md:text-5xl xl:text-7xl text-white text-shadow-lg " >
          Acerca de Mi
        </h2>
      </section>

      <section className='w-full flex flex-col xl:w-[95%] xl:flex-row items-center '>
        <div className='bg-[url(/imgs/img-about.jpg)] w-[95%] h-[420px] md:h-[850px] bg-cover bg-center rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] my-2  ' ></div>

        <div className='w-full flex flex-col xl:items-end items-center ' >
          <div className='w-[95%] my-2 flex flex-col ' >
            <h2 className='text-white font-bold text-xl md:text-2xl bg-[rgba(254,64,52,1)] rounded-t-[25px]  py-1  text-center'>PREPARACIÓN PROFESIONAL</h2>
            <div className='bg-white w-full h-auto rounded-b-[25px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:text-lg ' >
              <ul>
                <li className='font-bold' >LICENCIATURA EN NUTRICIÓN:</li>
                <li>Universidad Autónoma de San Luis Potosí</li>
                <br />
                <li className='font-bold' >DIPLOMADOS:</li>
                <li>Psico nutrición: Alimentación con Conciencia</li>
                <li>Obesidad. Diagnostico y tratamiento en el ciclo vital</li>
                <br />
                <li className='font-bold' >CERTIFICACIONES:</li>
                <li>Certificación internacional de interpretación de exámenes Bioquímicos.</li>
                <li>Certificación en Psicología Alimentaria. </li>
                <li>Certificación internacional de nutrición aplicada a la imagen y estética (en curso).</li>
              </ul>
            </div>
          </div>
        
          <div className='w-[95%] my-2 flex flex-col' >
            <h2 className='text-white font-bold text-xl md:text-2xl bg-[rgba(254,64,52,1)] rounded-t-[25px] py-1  text-center'>EXPERIENCIA</h2>
            <div className='bg-white w-full h-auto rounded-b-[25px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:text-lg ' >
              <ul>
                <li className='font-bold' >CONSULTA PRIVADA</li>
                <li>5 años de experiencia atendiendo a todo tipo de población. Mayor enfoque en:</li>
                <br />
                <li>Psico nutrición / TCA / Comedor emocional.</li>
                <li>Joven adulto, joven adolescente.</li> 
                <li>Estudiantes universitarios.</li>
                <li>Control Metabólico / Bioquímico / SOP / Diabetes / Colesterol / Hipertensión.</li>
                <li>Trabajadores / Empresas.</li>
                <li>Niños en etapa preescolar y escolar.</li>
                <br />
                <li className='font-bold' >GASTRONOMÍA</li>
                <li>Más de 10 años de experiencia: </li>
                <li>Gastronomía funcional. </li>
                <li>Cocina saludable.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutMePage
