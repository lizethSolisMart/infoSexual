import { Divider, Image, Spacer } from "@nextui-org/react";

const RelacionesSanas: React.FC = () => {
  return (
    // Contenedor global, sin restricciones de ancho aquí
    <>
      {/* Sección de título e imagen */}
      <div className="bg-[#colorFondo]"> {/* Reemplaza #colorFondo con el color deseado para el fondo */}
        <section className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center p-6">
            <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">Relaciones Sanas: El Camino hacia el Respeto Mutuo</h1>
            <p className="text-gray-200 text-lg">
                Las relaciones durante la adolescencia pueden ser complejas. Aprender a diferenciar entre amor y manipulación es vital para desarrollar lazos saludables.
            </p>
            </div>
            <Spacer x={14}/>
            {/* Utiliza md:flex-grow-0 para asegurarte que la imagen no crezca y md:shrink para que se ajuste si es necesario */}
            <div className="md:flex-grow-0 md:shrink">
            <Image 
                alt="Una representación de equilibrio y bienestar emocional en las relaciones juveniles"
                src="/images/marioneta.png"
                width="300"
                height="auto"
            />
            </div>
        </section>
        </div>

        {/* Sección de Mitos vs. Realidades */}
        <div className="bg-[#47176360]">
        <div className="max-w-[900px] mx-auto p-4">
            <h2 className="text-2xl font-semibold text-white">Mitos vs. Realidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Primera pareja */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Mito: Si te celan, es porque te aman.</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Realidad: Los celos no son una medida de amor, sino de inseguridad.</div>
            {/* Segunda pareja */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Mito: El amor verdadero debe superar cualquier obstáculo.</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Realidad: Una relación sana requiere respeto mutuo y comprensión, no sacrificios constantes.</div>
            {/* Tercera pareja */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Mito: Los conflictos siempre son malos en una relación.</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Realidad: Los conflictos, si se manejan de manera saludable, pueden fortalecer una relación.</div>
            {/* Cuarta pareja */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Mito: Si alguien te ama, siempre querrá estar contigo.</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Realidad: En una relación saludable, es importante mantener la individualidad y respetar el espacio personal.</div>
            </div>
        </div>
        </div>



        {/* Sección de Voces Reales */}
        <div className="bg-[#colorFondo]"> {/* Reemplaza #colorFondo con el color deseado para el fondo */}
        <section className="max-w-[900px] mx-auto p-6">
          <h2 className="text-2xl font-semibold text-white">Voces Reales</h2>

          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

            {/* Primer testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <blockquote className="border-l-4 pl-4 italic text-gray-800">
                "Al principio pensé que era dulce que quisiera saber dónde estaba todo el tiempo. Pero luego me di cuenta de que no confiaba en mí."
                <p className="text-right mt-2">- Lizeth</p>
              </blockquote>
            </div>

            {/* Segundo testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <blockquote className="border-l-4 pl-4 italic text-gray-800">
                "Me decía que sin él no era nada, al principio lo tomé como un gesto romántico. Con tiempo vi que era una forma de control."
                <p className="text-right mt-2">- Janeth</p>
              </blockquote>
            </div>

            {/* Tercer testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <blockquote className="border-l-4  pl-4 italic text-gray-800">
                "Siempre me comparaba con otras personas, haciéndome sentir que nunca estaba a la altura. Me tomó años entender que eso no era amor."
                <p className="text-right mt-2">- Madai</p>
              </blockquote>
            </div>

            {/* Cuarto testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <blockquote className="border-l-4  pl-4 italic text-gray-800">
                "Cada vez que quería pasar tiempo con mis amigos, empezaba una discusión. No me di cuenta de lo aislado que estaba hasta que lo dejé."
                <p className="text-right mt-2">- Antonio</p>
              </blockquote>
            </div>

            {/* Se puede añadir más testimonios aquí con el mismo patrón */}
          </div>
        </section>

        </div>


        {/* Sección de Cómo Practicar la Responsabilidad Afectiva */}
        <div className="bg-[#C285C080] backdrop-blur-md"> {/* Fondo con opacidad y efecto blur */}
        <section className="max-w-[900px] mx-auto p-6">
            <h2 className="text-2xl font-semibold text-white">Cómo Practicar la Responsabilidad Afectiva</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-200">
            {/* Punto 1 */}
            <li>Reconoce tus propios sentimientos antes de responder o actuar.</li>
            {/* Punto 2 */}
            <li>Aprende a comunicar tus emociones de manera clara y sin culpar a otros.</li>
            {/* Punto 3 */}
            <li>Establece límites saludables y respeta los límites de los demás.</li>
            {/* Punto 4 */}
            <li>Practica la empatía intentando entender las emociones de los demás sin juzgar.</li>
            {/* Punto 5 */}
            <li>Responsabilízate de tus acciones y discúlpate sinceramente cuando sea necesario.</li>
            {/* Punto 6 */}
            <li>Desarrolla la capacidad de escuchar activamente, lo que fomenta la confianza y la comprensión mutua.</li>
            </ul>
        </section>
        </div>


      {/* Texto adicional */}
      <div className="max-w-[900px] mx-auto p-6 mb-5">
        <p className="text-gray-200 text-lg">
          Entender la responsabilidad afectiva es fundamental para construir y mantener relaciones sanas. Reconoce tu valor y el de tu pareja como individuos únicos.
        </p>
      </div>

      {/* Enlaces a recursos adicionales, si los tienes */}
    </>
  );
}

export default RelacionesSanas;
