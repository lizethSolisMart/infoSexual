import { Divider, Image, Spacer } from "@nextui-org/react";

const LaEdadAdecuada: React.FC = () => {
  return (
    // Contenedor global, sin restricciones de ancho aquí
    <>
      {/* Sección de título e imagen */}
      <div className="bg-[#colorFondo]"> {/* Reemplaza #colorFondo con el color deseado para el fondo */}
        <section className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center p-6">
            <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">La Edad Adecuada para Iniciar la Vida Sexual</h1>
            <p className="text-gray-200 text-lg">
                Una guía para comprender los aspectos emocionales, físicos y legales involucrados en la decisión de iniciar la vida sexual.
            </p>
            </div>
            <Spacer x={14}/>
            <div className="md:flex-grow-0 md:shrink">
            <Image 
                alt="Imagen ilustrativa sobre la madurez y la sexualidad"
                src="/images/edad-adecuada.jpg"
                width="300"
                height="auto"
            />
            </div>
        </section>
        </div>

        {/* Sección de Consideraciones Clave */}
        <div className="bg-[#47176360]">
        <div className="max-w-[900px] mx-auto p-4">
            <h2 className="text-2xl font-semibold text-white">Consideraciones Clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
            {/* Consideración Emocional */}
            <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Madurez Emocional</h3>
                <p>Comprender tus emociones y estar preparado para manejar relaciones íntimas es crucial. La madurez emocional implica reconocer y respetar tus propios sentimientos y los de tu pareja.</p>
            </div>

            {/* Consideración Física */}
            <div className="bg-white p-4 rounded-lg mt-4 md:mt-0">
                <h3 className="text-lg font-semibold">Salud y Seguridad Física</h3>
                <p>Informarse sobre protección, anticonceptivos y salud reproductiva es esencial para evitar embarazos no deseados y ETS. Conocer y cuidar tu cuerpo es un aspecto importante.</p>
            </div>

            {/* Consideración Legal */}
            <div className="bg-white p-4 rounded-lg mt-0">
                <h3 className="text-lg font-semibold">Aspectos Legales</h3>
                <p>Es importante conocer las leyes locales sobre la edad de consentimiento y los derechos sexuales. Estas leyes están diseñadas para proteger a los jóvenes de abusos y explotación.</p>
            </div>

            {/* Consideración Social */}
            <div className="bg-white p-4 rounded-lg mt-4 md:mt-0">
                <h3 className="text-lg font-semibold">Presiones Sociales y Culturales</h3>
                <p>Reconoce y evalúa las influencias sociales y culturales que pueden presionarte hacia o alejarte de la actividad sexual. La decisión debe basarse en tus valores y comodidad, no en las expectativas de los demás.</p>
            </div>

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
                &quot;Decidí esperar hasta sentirme completamente listo, tanto emocional como físicamente. No me arrepiento de haber esperado; me dio tiempo para entenderme a mí mismo y a lo que realmente quería.&quot;
                <p className="text-right mt-2">- Fernando</p>
                </blockquote>
            </div>

            {/* Segundo testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                &quot;Empecé mi vida sexual a una edad temprana, influenciado por mis amigos. Si pudiera volver atrás, esperaría hasta estar más informado y seguro de mí mismo.&quot;
                <p className="text-right mt-2">- Sofia</p>
                </blockquote>
            </div>

            {/* Tercer testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-0">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                &quot;Para mí, la conexión emocional era importante antes de empezar a tener relaciones sexuales. Quería que mi primera vez fuera con alguien que realmente me importara y en quien confiara.&quot;
                <p className="text-right mt-2">- Lucia</p>
                </blockquote>
            </div>

            {/* Cuarto testimonio */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                <blockquote className="border-l-4 pl-4 italic text-gray-800">
                &quot;Había mucha presión para empezar joven, pero decidí esperar hasta sentirme completamente cómodo y listo. Fue la mejor decisión para mí.&quot;
                <p className="text-right mt-2">- Miguel</p>
                </blockquote>
            </div>

            {/* Más testimonios pueden ser añadidos siguiendo este patrón */}
            </div>
        </section>
        </div>


        {/* Sección de Preguntas Comunes */}
        <div className="bg-[#C285C080] backdrop-blur-md">
        <section className="max-w-[900px] mx-auto p-6">
            <h2 className="text-2xl font-semibold text-white">Preguntas Comunes</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-200">
            {/* Pregunta 1 */}
            <li>
                <strong>¿Cuál es la edad legal para iniciar la vida sexual?</strong>
                <p>La edad legal varía según el país o la región. Es importante conocer las leyes locales sobre la edad de consentimiento para tomar decisiones informadas y legales.</p>
            </li>

            {/* Pregunta 2 */}
            <li>
                <strong>¿Cómo sé si estoy listo/a para tener relaciones sexuales?</strong>
                <p>Estar listo/a para el sexo implica más que la edad; se trata de madurez emocional, conocimiento sobre protección y seguridad, y estar en una relación basada en el consentimiento y la confianza.</p>
            </li>

            {/* Pregunta 3 */}
            <li>
                <strong>¿Influye la presión social en la decisión de iniciar la vida sexual?</strong>
                <p>Sí, la presión social puede influir. Es importante tomar decisiones basadas en tus propios valores y comodidad, no en lo que otros puedan pensar o decir.</p>
            </li>

            {/* Pregunta 4 */}
            <li>
                <strong>¿Qué debo considerar antes de iniciar mi vida sexual?</strong>
                <p>Considera tu salud física y emocional, el uso de protección, la comprensión del consentimiento y la comunicación abierta con tu pareja.</p>
            </li>

            {/* Pregunta 5 */}
            <li>
                <strong>¿Cómo puedo obtener información confiable sobre salud sexual?</strong>
                <p>Busca fuentes confiables como organizaciones de salud, educadores sexuales o profesionales médicos para obtener información precisa y actualizada sobre salud y educación sexual.</p>
            </li>
            </ul>
        </section>
        </div>


        {/* Reflexiones Finales */}
        <div className="max-w-[900px] mx-auto p-6 mb-5">
        <p className="text-gray-200 text-lg">
            Iniciar la vida sexual es una decisión significativa que debe tomarse con responsabilidad y autoconocimiento. Cada persona tiene su propio ritmo y es importante respetarlo. La educación, el conocimiento de uno mismo y la comunicación son elementos clave. Recuerda que tu bienestar emocional y físico es lo más importante, y que tomar decisiones informadas es un acto de respeto hacia ti mismo y hacia los demás. En última instancia, la elección de cuándo y cómo iniciar la vida sexual debe ser una decisión personal, hecha con confianza y sin presiones externas.
        </p>
        </div>

    </>
  );
}

export default LaEdadAdecuada;
