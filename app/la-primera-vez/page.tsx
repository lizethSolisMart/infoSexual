import { Divider, Image, Spacer } from "@nextui-org/react";

const LaPrimeraVez: React.FC = () => {
  return (
    <>
      <div className="bg-[#colorFondo]"> {/* Asegúrate de reemplazar #colorFondo con el color de fondo deseado */}
        <section className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center p-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">La Primera Vez: Inicio del Viaje de Descubrimiento</h1>
            <p className="text-gray-200 text-lg">
              La primera experiencia sexual es un paso significativo. Aquí te ofrecemos consejos e información para que este momento sea seguro, cómodo y memorable.
            </p>
          </div>
          <Spacer x={14}/>
          <div className="md:flex-grow-0 md:shrink">
            <Image 
                alt="Imagen que evoca descubrimiento y respeto, relacionada con la primera experiencia sexual"
                src="/images/primera-vez.jpg" // Asegúrate de que esta sea la ruta correcta de tu imagen
                width="300"
                height="auto"
            />
          </div>
        </section>
      </div>

      <div className="bg-[#47176360]">
        <div className="max-w-[900px] mx-auto p-4">
          <section>
            <h2 className="text-2xl font-semibold text-white">Preparándote para la Primera Vez</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-200">
              {/* ... (Puntos de preparación) */}
              {/* Repite este bloque para cada punto que quieras agregar */}
              <li>Informarse bien sobre protección y métodos anticonceptivos.</li>
              <li>La importancia del consentimiento mutuo y la comunicación.</li>
              <li>Escoger el momento y lugar adecuado donde ambos se sientan seguros.</li>
              <li>Manejar las expectativas y aceptar que la perfección es un mito.</li>
              <li>Aceptar que sentir nervios es natural y está bien.</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="bg-[#C285C080] backdrop-blur-md">
        <div className="max-w-[900px] mx-auto p-4">
          <section>
            <h2 className="text-2xl font-semibold text-white">Desmitificando la Primera Vez</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* ... (Bloques de mitos y realidades) */}
              <div className="bg-blue-200 p-4 rounded-lg">Mito: Debe ser perfecto.</div>
              <div className="bg-green-200 p-4 rounded-lg">Realidad: Es un aprendizaje.</div>
              <div className="bg-blue-200 p-4 rounded-lg">Mito: El dolor es inevitable.</div>
              <div className="bg-green-200 p-4 rounded-lg">Realidad: La comodidad es clave.</div>
              <div className="bg-blue-200 p-4 rounded-lg">Mito: No es necesario hablarlo.</div>
              <div className="bg-green-200 p-4 rounded-lg">Realidad: La comunicación importa.</div>
            </div>
          </section>
        </div>
      </div>

      {/* Repetir la estructura para las secciones "Experiencias Compartidas" y "Creando un Recuerdo Positivo", siguiendo el estilo establecido */}
      {/* ... (Agrega las siguientes secciones aquí, siguiendo el mismo patrón de estilo) */}


      <div className="max-w-[900px] mx-auto p-6">
        <p className="text-gray-200 text-lg">
          La primera vez es solo el comienzo. Con el cuidado y la preparación adecuados, puede ser una experiencia gratificante y un recuerdo valioso.
        </p>
      </div>

      {/* Enlaces a recursos adicionales, si los tienes */}
      {/* ... (Agrega cualquier contenido adicional que desees aquí) */}
    </>
  );
};

export default LaPrimeraVez;
