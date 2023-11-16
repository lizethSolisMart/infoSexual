import { Divider, Image, Spacer } from "@nextui-org/react";

const ExpectativasDelSexo: React.FC = () => {
  return (
    // Contenedor global, sin restricciones de ancho aquí
    <>
      {/* Sección de título e imagen */}
      <div className="bg-[#colorFondo]"> {/* Reemplaza #colorFondo con el color deseado para el fondo */}
        <section className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center p-6">
            <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">Expectativas del Sexo: Realidades y Mitos</h1>
            <p className="text-gray-200 text-lg">
                Abordando las expectativas y realidades del sexo en la sociedad moderna para fomentar una comprensión saludable y realista.
            </p>
            </div>
            <Spacer x={14}/>
            <div className="md:flex-grow-0 md:shrink">
            <Image 
                alt="Imagen ilustrativa sobre las expectativas del sexo"
                src="/images/expectativas.JPG"
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
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Mito: El sexo siempre es como en las películas.</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Realidad: Las representaciones del sexo en los medios a menudo son exageradas y no reflejan la experiencia real de la mayoría de las personas.</div>
            {/* Segunda pareja */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Mito: Si no tienes sexo, no eres &apos;normal&apos;.</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Realidad: La abstinencia y la frecuencia del sexo varían ampliamente entre las personas. No hay una &apos;normalidad&apos; en cuanto a la actividad sexual.</div>
            {/* Tercera pareja */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Mito: Si tu pareja quiere sexo, debes complacerla.</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Realidad: El sexo debe ser siempre una decisión mutua y consensuada. No se debe sentir obligación de participar en la actividad sexual.</div>
            {/* Cuarta pareja */}
            <div className="bg-[#FF4D89] p-4 rounded-lg text-white">Mito: El sexo es siempre romántico y apasionado.</div>
            <div className="bg-[#23DA8B] p-4 rounded-lg">Realidad: El sexo puede adoptar muchas formas y no siempre es como lo pintan las representaciones románticas o pasionales.</div>
            </div>
        </div>
        </div>


        {/* Sección de Testimonios Personales */}
        <div className="bg-[#colorFondo]">
        <section className="max-w-[900px] mx-auto p-6">
            <h2 className="text-2xl font-semibold text-white">Testimonios Personales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

            {/* Primer testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                &ldquo;Siempre creí que el sexo sería como lo veía en las películas, pero la realidad fue diferente y más compleja. Aprendí a ajustar mis expectativas y comunicarme mejor con mi pareja.&rdquo;
                <p className="text-right mt-2">- Roberto</p>
                </blockquote>
            </div>

            {/* Segundo testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                &ldquo;Experimenté mucha presión para tener sexo debido a las expectativas sociales. Al final, descubrí que seguir mi propio ritmo era lo mejor para mí.&rdquo;
                <p className="text-right mt-2">- Alejandra</p>
                </blockquote>
            </div>

            {/* Tercer testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-0">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                &ldquo;La idea de que el sexo es siempre perfecto me creó mucha ansiedad. Con el tiempo, aprendí que la imperfección es parte de la experiencia humana y eso está bien.&rdquo;
                <p className="text-right mt-2">- Carlos</p>
                </blockquote>
            </div>

            {/* Cuarto testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                &ldquo;Antes pensaba que para ser sexualmente activo, tenía que actuar de cierta manera. Entendí que ser auténtico y honesto con mis deseos y límites es lo más importante.&rdquo;
                <p className="text-right mt-2">- Valeria</p>
                </blockquote>
            </div>

            {/* Más testimonios pueden ser añadidos siguiendo este patrón */}
            </div>
        </section>
        </div>


        {/* Sección de Consejos y Recomendaciones */}
        <div className="bg-[#C285C080] backdrop-blur-md">
        <section className="max-w-[900px] mx-auto p-6">
            <h2 className="text-2xl font-semibold text-white">Consejos y Recomendaciones</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-200">
            {/* Consejo 1 */}
            <li>Comunicación Abierta: Habla abiertamente con tu pareja sobre tus expectativas, deseos y límites. La comunicación honesta es clave para una experiencia sexual satisfactoria y saludable.</li>

            {/* Consejo 2 */}
            <li>Educación Sexual: Infórmate sobre salud sexual a través de fuentes confiables. Conocer tu cuerpo y cómo funciona puede ayudar a establecer expectativas realistas y seguras.</li>

            {/* Consejo 3 */}
            <li>Consentimiento: Siempre asegúrate de que todas las actividades sexuales sean consensuadas. El consentimiento es fundamental para cualquier experiencia sexual.</li>

            {/* Consejo 4 */}
            <li>Manejo de Expectativas: Entiende que las experiencias sexuales pueden variar, y no siempre serán como se muestran en los medios. Establece expectativas realistas para evitar decepciones.</li>

            {/* Consejo 5 */}
            <li>Autoconocimiento: Dedica tiempo a entender tus propios deseos y límites. El autoconocimiento es importante para una vida sexual plena y satisfactoria.</li>

            {/* Consejo 6 */}
            <li>Respeto por la Diversidad: Respeta las diferencias en deseos y necesidades sexuales de otros. La diversidad en las experiencias y preferencias sexuales es natural y debe ser respetada.</li>
            </ul>
        </section>
        </div>


        {/* Texto adicional y reflexiones finales */}
        <div className="max-w-[900px] mx-auto p-6 mb-5">
        <p className="text-gray-200 text-lg">
            Comprender y aceptar las diferencias entre las expectativas idealizadas y la realidad del sexo es crucial. Una comunicación abierta y honesta es la clave para una experiencia sexual satisfactoria y saludable. Discutir deseos, límites y expectativas ayuda a fomentar la confianza y el respeto mutuo en las relaciones. Al mismo tiempo, es esencial desmitificar los mitos sobre el sexo y promover una educación sexual integral. Esto contribuye a una mayor comprensión y disfrute de nuestra propia sexualidad y la de los demás, avanzando hacia experiencias sexuales más positivas y enriquecedoras.
        </p>
        </div>


      {/* Enlaces a recursos adicionales, si los tienes */}
    </>
  );
}

export default ExpectativasDelSexo;
