import { Divider, Image, Spacer } from "@nextui-org/react";

const ETS: React.FC = () => {
  return (
    // Contenedor global
    <>
      {/* Sección de título e imagen */}
      <div className="bg-[#colorFondo]">
        <section className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center p-6">
            <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">Entendiendo las ETS: Prevención y Cuidado</h1>
            <p className="text-gray-200 text-lg">
                Información vital sobre enfermedades de transmisión sexual, su prevención y tratamiento.
            </p>
            </div>
            <Spacer x={14}/>
            <div className="md:flex-grow-0 md:shrink">
            <Image 
                alt="Imagen ilustrativa sobre prevención de ETS"
                src="/images/ets.jpg"
                width="300"
                height="auto"
            />
            </div>
        </section>
        </div>

        {/* Sección de Información General */}
        <div className="bg-[#47176360]">
        <div className="max-w-[900px] mx-auto p-4">
            <h2 className="text-2xl font-semibold text-white">Información General sobre las ETS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Descripción de ETS comunes */}
              <div className="bg-white p-4 rounded-lg text-gray-800">
                  <h3 className="text-lg font-semibold">VIH/SIDA</h3>
                  <p>El Virus de la Inmunodeficiencia Humana (VIH) afecta el sistema inmunitario y su última etapa es conocida como SIDA. Se transmite a través de fluidos corporales y no tiene cura, pero con tratamiento puede controlarse.</p>
                  <Image src="/images/vih.png" alt="Imagen ilustrativa del VIH" />

                  <h3 className="text-lg font-semibold mt-4">Herpes Genital</h3>
                  <p>El herpes genital es causado por el virus del herpes simple. Se caracteriza por brotes de llagas dolorosas y, aunque no tiene cura, existen tratamientos para aliviar los síntomas.</p>
                  <Image src="/images/herpes.png" alt="Imagen ilustrativa del Herpes Genital" />

                  <h3 className="text-lg font-semibold mt-4">Gonorrea</h3>
                  <p>La gonorrea es una infección bacteriana que afecta principalmente los órganos reproductivos, pero también puede infectar la garganta, los ojos y el recto. Es curable con antibióticos.</p>
                  <Image src="/images/gonorrea.png" alt="Imagen ilustrativa de la Gonorrea" />

                  {/* Otros ejemplos pueden ser clamidia, sífilis, HPV, etc. */}
              </div>

              {/* Medidas de Prevención */}
              <div className="bg-white p-4 rounded-lg text-gray-800">
                  <h3 className="text-lg font-semibold">Uso de Protección</h3>
                  <p>El uso de preservativos durante las relaciones sexuales es la forma más efectiva de prevenir las ETS. Es importante usarlos correctamente y en todas las ocasiones.</p>

                  <h3 className="text-lg font-semibold mt-4">Chequeos Regulares</h3>
                  <p>Realizar pruebas de detección de ETS de manera regular, especialmente si se tiene más de una pareja sexual, es crucial para la detección temprana y el tratamiento eficaz.</p>

                  <h3 className="text-lg font-semibold mt-4">Comunicación y Consentimiento</h3>
                  <p>Es vital hablar abierta y honestamente con las parejas sexuales sobre las ETS y asegurarse de que ambos estén de acuerdo y cómodos con las medidas de prevención que se toman.</p>

                  <h3 className="text-lg font-semibold mt-4">Vacunación</h3>
                  <p>Ciertas ETS, como el Virus del Papiloma Humano (HPV), pueden prevenirse mediante la vacunación. Consultar con un profesional de la salud sobre las vacunas disponibles es una medida preventiva importante.</p>
              </div>

            </div>
        </div>
        </div>

        <div className="bg-[#colorFondo]">
  <section className="max-w-[900px] mx-auto p-6">
    <h2 className="text-2xl font-semibold text-white">Mitos y Preguntas Frecuentes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

      {/* Mito 1 */}
      <div className="bg-[#5B237Ccc] p-4 rounded-lg text-white"> {/* Color modificado con opacidad */}
        <h3 className="text-lg font-semibold">Mito: Solo se transmiten ETS a través del coito.</h3>
        <p>Realidad: Las ETS también pueden transmitirse a través de contacto oral-genital, genital-genital o incluso por contacto manual-genital en algunos casos.</p>
      </div>

      {/* Mito 2 */}
      <div className="bg-[#5B237Ccc] p-4 rounded-lg mt-4 md:mt-0 text-white"> {/* Color modificado con opacidad */}
        <h3 className="text-lg font-semibold">Mito: Si no hay síntomas, no hay ETS.</h3>
        <p>Realidad: Muchas ETS no presentan síntomas visibles, especialmente en las etapas iniciales, por lo que es importante realizar pruebas regulares.</p>
      </div>

      {/* Pregunta 1 */}
      <div className="bg-[#5B237Ccc] p-4 rounded-lg mt-4 text-white"> {/* Color modificado con opacidad */}
        <h3 className="text-lg font-semibold">¿Es posible curar todas las ETS?</h3>
        <p>No todas las ETS tienen cura. Infecciones como el VIH/SIDA y el herpes genital son manejables pero no curables. Otras, como la gonorrea y la clamidia, son curables con el tratamiento adecuado.</p>
      </div>

      {/* Pregunta 2 */}
      <div className="bg-[#5B237Ccc] p-4 rounded-lg mt-4 md:mt-4 text-white"> {/* Color modificado con opacidad */}
        <h3 className="text-lg font-semibold">¿Cómo puedo saber si tengo una ETS?</h3>
        <p>La única manera de saber con certeza es a través de pruebas médicas. Si sospechas que podrías haber contraído una ETS, consulta a un profesional de la salud lo antes posible.</p>
      </div>

      {/* Más mitos y preguntas pueden ser añadidos siguiendo este patrón */}
    </div>
  </section>
</div>



        <div className="bg-[#C285C080] backdrop-blur-md">
          <section className="max-w-[900px] mx-auto p-6">
            <h2 className="text-2xl font-semibold text-white">Testimonios y Experiencias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              
              {/* Primer testimonio */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                  "Descubrir que tenía una ETS fue un shock. Gracias a un buen tratamiento y apoyo, he aprendido a vivir con ella y a cuidar mejor de mi salud."
                  <p className="text-right mt-2">- Alex</p>
                </blockquote>
              </div>

              {/* Segundo testimonio */}
              <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                  "Al principio me sentí avergonzado y asustado, pero hablar abiertamente sobre mi ETS me ha ayudado a romper estigmas y a encontrar una comunidad de apoyo."
                  <p className="text-right mt-2">- Daniela</p>
                </blockquote>
              </div>

              {/* Tercer testimonio */}
              <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                  "Ser diagnosticado con una ETS cambió mi forma de ver las relaciones y la importancia del cuidado de la salud sexual. Ahora me enfoco en la prevención y educación."
                  <p className="text-right mt-2">- Omar</p>
                </blockquote>
              </div>

              {/* Cuarto testimonio */}
              <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-4">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                  "Vivir con VIH ha sido un desafío, pero con el tratamiento adecuado y el apoyo de mis seres queridos, llevo una vida plena y saludable."
                  <p className="text-right mt-2">- Laura</p>
                </blockquote>
              </div>

              {/* Más testimonios pueden ser añadidos siguiendo este patrón */}
            </div>
          </section>
        </div>



    </>
  );
}

export default ETS;
