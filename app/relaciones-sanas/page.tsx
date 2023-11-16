import { Divider, Image, Spacer } from "@nextui-org/react";

const RelacionesSanas: React.FC = () => {
  return (
    // Contenedor global con el estilo establecido
    <div className="bg-[#colorFondo]"> {/* Usa el mismo color de fondo que las otras páginas */}
      <section className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center p-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">Relaciones Sanas: El Arte del Equilibrio y la Armonía</h1>
          <p className="text-gray-200 text-lg">
            Una relación sana se construye sobre la base del respeto, la confianza y la comunicación. Descubre cómo cultivar relaciones que te hagan crecer.
          </p>
        </div>

        <Spacer x={14} />

        <div className="md:flex-grow-0 md:shrink">
          <Image 
            alt="Imagen que representa una relación saludable y equilibrada"
            src="/images/esposa-esposo-peleando.jpg"
            width="300"
            height="auto"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Características de una Relación Saludable */}
      <div className="max-w-[900px] mx-auto p-4">
        <h2 className="text-2xl font-semibold text-white">Características de una Relación Saludable</h2>
        <ul className="list-disc pl-5 mt-4 text-gray-200">
          {/* Lista de características */}
          <li>Comunicación abierta y sin juicios.</li>
          <li>Respeto mutuo en las decisiones y límites de cada uno.</li>
          <li>Apoyo en los momentos buenos y en los desafíos.</li>
          <li>Independencia y espacio personal.</li>
          <li>Resolución de conflictos de manera constructiva.</li>
        </ul>
      </div>

      {/* Señales de Alerta en las Relaciones */}
      <div className="bg-[#47176360]">
        <div className="max-w-[900px] mx-auto p-4">
          <h2 className="text-2xl font-semibold text-white">Señales de Alerta en las Relaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Ejemplos de señales de alerta */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Desbalance en el dar y recibir.</div>
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Comunicación agresiva o pasiva.</div>
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Falta de respeto a los límites personales.</div>
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Dependencia emocional excesiva.</div>
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Aislamiento de amigos y familiares.</div>
          </div>
        </div>
      </div>

      {/* Historias de Éxito y Construyendo Relaciones Más Fuertes */}
      {/* Aquí puedes añadir las secciones de historias y consejos, siguiendo el mismo patrón */}

    {/* Texto adicional */}
    <div className="max-w-[900px] mx-auto p-6 mb-5">
      <p className="text-gray-200 text-lg">
        Las relaciones sanas son fundamentales para nuestro bienestar emocional y crecimiento personal. No solo enriquecen nuestras vidas, sino que también nos brindan apoyo, comprensión y alegría. Aprender a reconocer los signos de una relación saludable, construir sobre bases sólidas de respeto mutuo y comunicación, y mantener esos lazos a través del tiempo, son habilidades clave para el desarrollo personal y la satisfacción en nuestras interacciones cotidianas. Este proceso de aprendizaje y crecimiento continuo nos ayuda a fomentar conexiones significativas y duraderas, enriqueciendo nuestra experiencia de vida en cada paso.
      </p>
    </div>

    </div>
  );
};

export default RelacionesSanas;
