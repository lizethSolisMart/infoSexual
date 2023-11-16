import { Divider, Image, Spacer } from "@nextui-org/react";

const Limites: React.FC = () => {
  return (
    // Contenedor global, manteniendo la estética
    <>
      {/* Sección de título e imagen */}
      <div className="bg-[#colorFondo]"> {/* Mantén el color de fondo igual */}
        <section className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center p-6">
            <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-3">Límites en las Relaciones: Respeto y Autonomía</h1>
            <p className="text-gray-200 text-lg">
                Establecer límites sanos es crucial para una relación equilibrada. Aprende a identificar y comunicar tus límites con respeto.
            </p>
            </div>
            <Spacer x={14}/>
            <div className="md:flex-grow-0 md:shrink">
            <Image 
                alt="Una representación gráfica de límites saludables en relaciones"
                src="/images/pareja-morada.jpg"
                width="300"
                height="auto"
            />
            </div>
        </section>
        </div>

        {/* Sección de Reconocer y Establecer Límites */}
        <div className="bg-[#47176360]">
        <div className="max-w-[900px] mx-auto p-4">
            <h2 className="text-2xl font-semibold text-white">Reconocer y Establecer Límites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Ejemplos con descripciones */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Límite Personal: Tiempo a solas</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Respetar el espacio personal es clave para una relación sana.</div>
            </div>
        </div>
        </div>

        {/* Sección de Comunicación Efectiva de Límites */}
        <div className="bg-[#47176320]"> 
        <section className="max-w-[900px] mx-auto p-6">
          <h2 className="text-2xl font-semibold text-white">Comunicación Efectiva de Límites</h2>
          {/* Instrucciones y consejos para comunicar límites */}
          <div className="text-gray-200 text-lg p-4">
            <p>Expresar tus límites claramente y con respeto es fundamental. Aquí tienes algunos consejos:</p>
            <ul className="list-disc pl-5 mt-4">
              <li>Se claro y directo sobre lo que necesitas.</li>
              <li>Evita las acusaciones; enfócate en tus sentimientos.</li>
              <li>Escucha y respeta los límites de tu pareja también.</li>
            </ul>
          </div>
        </section>
        </div>

        {/* Sección de Señales de Límites No Respetados */}
        <div className="bg-[#C285C080] backdrop-blur-md">
        <section className="max-w-[900px] mx-auto p-6">
            <h2 className="text-2xl font-semibold text-white">Señales de Límites No Respetados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Ejemplos de señales */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800">Ignorar tus peticiones de espacio o tiempo a solas.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800">Presión para cambiar tus valores o creencias.</p>
              </div>
              {/* Continúa con más ejemplos */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800">Presión para cambiar tu apariencia o estilo.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800">Presión para tener relaciones sexuales.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800">Presión para compartir tus contraseñas.</p>
                </div>                    
                <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800">Desestimar o ridiculizar tus sentimientos y opiniones.</p>
                </div>
            </div>
        </section>
        </div>

        {/* Texto adicional sobre la importancia de los límites */}
        <div className="max-w-[900px] mx-auto p-6 mb-5">
          <p className="text-gray-200 text-lg">
            Respetar y establecer límites no solo protege tu bienestar, sino que también fortalece la relación. Una comunicación abierta y honesta es clave.
          </p>
        </div>

        {/* Enlaces a recursos adicionales */}
    </>
  );
}

export default Limites;
