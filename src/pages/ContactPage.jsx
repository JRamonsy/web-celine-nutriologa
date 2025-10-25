import { IoLogoWhatsapp } from "react-icons/io";
const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center" >
      <section className="   xl:mt-5" >
        <h1 className=" font-two-title-1 font-bold text-4xl md:text-5xl xl:text-7xl text-white text-shadow-lg ">
          Contacto
        </h1>
      </section>

      <section className="w-[95%] bg-lime-200 rounded py-2 px-3 rounded-[25px] " >
        <div >
          <h3 className=" font-one-title text-xl md:text-2xl xl:text-3xl font-bold text-center " >
            Agenda tu cita en alguno de los siguientes consultorios:</h3>  
        </div>
        <div className="my-5 xl:flex   " >
          <div className="order-1 xl:order-2 xl:flex xl:items-center " >
            <h3 className=" font-descriptive font-bold text-center md:text-lg xl:text-xl " >Mariano Arista #1085, Colonia tequisquiapan, SLP.</h3>
          </div>
          <div className="flex justify-center order-2 xl:order-1 ">
            <iframe className=" rounded-[20px] md:w-[600px] md:h-[300px] xl:w-[900px] " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.3435491197456!2d-100.99613731843905!3d22.15099109621124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98ad4fd089a7%3A0xab4678169b4b8ac8!2sMariano%20Arista%201085%2C%20De%20Tequisquiapan%2C%2078250%20San%20Luis%20Potos%C3%AD%2C%20S.L.P.!5e0!3m2!1ses-419!2smx!4v1761170301038!5m2!1ses-419!2smx"></iframe>
          </div>
        </div>
        <div className="my-5 xl:flex " >
          <div className="xl:flex xl:items-center" >
            <h3 className=" font-descriptive font-bold text-center md:text-lg xl:text-xl " >Monterrey #25, Santa Barbara, Villa de Pozos, SLP.Monterrey #25, Santa Barbara, Villa de Pozos, SLP.</h3>
          </div>
          <div className="flex justify-center" >
            <iframe className="rounded-[20px] md:w-[600px] md:h-[300px] xl:w-[900px] " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462.04182419837537!2d-100.8850129!3d22.113215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa47e0ad6485d%3A0x4132943c0a3cd5af!2sQuinta%20Monterey!5e0!3m2!1ses-419!2smx!4v1761330548925!5m2!1ses-419!2smx"  ></iframe>
          </div>
        </div>
      </section>

      <section className="w-[95%] flex flex-col items-center my-5 px-3 font-descriptive " >
     
        <h3 className="text-center md:text-xl xl:text-2xl " >Si tu estado de salud no te permite asistir a un consultorio, <span className="font-bold" >también puedes solicitar atención Online y a domicilio.</span></h3>
        <div className=" bg-[url(/imgs/cita-online.jpg)] w-[300px] h-[200px] md:w-[400px] xl:w-[500px] xl:h-[400px] bg-cover bg-center rounded-[25px] "></div>
        <h3 className="text-center md:text-xl xl:text-2xl " ><span className="font-bold" >Pregunta por los días y horarios disponibles</span> en la ubicación o modalidad que mas se te acomode.</h3>
        <h3 className="text-center font-bold md:text-xl xl:text-2xl " >QUE LA DISTANCIA NO SEA UN OBSTACULO PARA MEJORAR TU VIDA, SALUD Y BIENESTAR.</h3>

      </section>

      <section className="flex flex-col items-center my-3" >
        <a href="https://api.whatsapp.com/send?phone=4444924116&text=Hola, me gustaria agendar una cita!">
        <IoLogoWhatsapp className="text-5xl md:text-6xl xl:text-7xl bg-white text-[#25D366] rounded-[15px] cursor-pointer transition-transform duration-300 hover:scale-110 " />
        </a>
        <h2 className="font-descriptive font-bold md:text-2xl xl:text-3xl " >NOS VEMOS PRONTO</h2>
      </section>
  
    </div>
  )
}

export default ContactPage
