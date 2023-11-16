import { Divider, Image, Spacer } from "@nextui-org/react";

const Abstinencia: React.FC = () => {
  return (
    // Contenedor global, sin restricciones de ancho aquí
    <>
      {/* Sección de título e imagen */}
      <div className="bg-[#colorFondo]"> {/* Reemplaza #colorFondo con el color deseado para el fondo */}
        <section className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center p-6">
            <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">La Abstinencia: Una Elección Personal</h1>
            <p className="text-gray-200 text-lg">
                Explorando la abstinencia como una opción válida y respetable en la vida de cada individuo.
            </p>
            </div>
            <Spacer x={14}/>
            <div className="md:flex-grow-0 md:shrink">
            <Image 
                alt="Imagen simbólica representando la abstinencia"
                src="/images/abstinencia.jpg"
                width="300"
                height="auto"
            />
            </div>
        </section>
        </div>

        <div className="bg-[#47176360]">
            <div className="max-w-[900px] mx-auto p-4">
                <h2 className="text-2xl font-semibold text-white">Mitos vs. Realidades sobre la Abstinencia</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                
                {/* Mito 1 */}
                <div className="bg-[#5B237Ccc] p-4 rounded-lg text-white"> {/* Color modificado con opacidad */}
                    <p>Realidad: La abstinencia puede ser una decisión personal basada en una variedad de factores, incluyendo pero no limitándose a creencias religiosas, personales, salud, o simplemente preferencia.</p>
                </div>

                {/* Mito 2 */}
                <div className="bg-[#5B237Ccc] p-4 rounded-lg text-white"> {/* Color modificado con opacidad */}
                    <h3 className="text-lg font-semibold">Mito: La abstinencia es poco realista en la sociedad moderna.</h3>
                    <p>Realidad: Muchas personas eligen practicar la abstinencia en diferentes etapas de sus vidas por razones válidas y es una elección tan realista como cualquier otra respecto a la sexualidad.</p>
                </div>

                {/* Mito 3 */}
                <div className="bg-[#5B237Ccc] p-4 rounded-lg text-white"> {/* Color modificado con opacidad */}
                    <h3 className="text-lg font-semibold">Mito: La abstinencia garantiza una relación perfecta.</h3>
                    <p>Realidad: Mientras la abstinencia puede ser parte de una relación saludable, una relación exitosa depende de la comunicación, el respeto mutuo, y la comprensión, no solo de las decisiones sexuales.</p>
                </div>

                {/* Mito 4 */}
                <div className="bg-[#5B237Ccc] p-4 rounded-lg text-white"> {/* Color modificado con opacidad */}
                    <h3 className="text-lg font-semibold">Mito: Las personas que eligen la abstinencia no tienen conocimientos sobre sexualidad.</h3>
                    <p>Realidad: Elegir la abstinencia no implica falta de conocimiento o educación sexual. De hecho, muchas personas informadas y educadas optan por la abstinencia en diferentes momentos de sus vidas.</p>
                </div>

                {/* Más mitos y realidades pueden ser agregados siguiendo este patrón */}
                </div>
            </div>
            </div>

            <div className="bg-[#colorFondo]">
                <section className="max-w-[900px] mx-auto p-6">
                    <h2 className="text-2xl font-semibold text-white">Testimonios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    
                    {/* Primer testimonio */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <blockquote className="border-l-4 pl-4 italic text-gray-800">
                        &ldquo;Elegí la abstinencia como un acto de autodeterminación. Para mí, es una forma de enfocarme en mi desarrollo personal y en mis metas a largo plazo.&rdquo;
                        <p className="text-right mt-2">- Claudia</p>
                        </blockquote>
                    </div>

                    {/* Segundo testimonio */}
                    <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                        <blockquote className="border-l-4 pl-4 italic text-gray-800">
                        &ldquo;La abstinencia fue una decisión que tomé por mi salud y bienestar emocional. Ha sido una experiencia enriquecedora y me ha permitido entender mejor mis límites y deseos.&rdquo;
                        <p className="text-right mt-2">- Marco</p>
                        </blockquote>
                    </div>

                    {/* Tercer testimonio */}
                    <div className="bg-white p-4 rounded-lg shadow-md mt-0">
                        <blockquote className="border-l-4 pl-4 italic text-gray-800">
                        &ldquo;Decidí practicar la abstinencia tras varias experiencias que no se alineaban con mis valores. Ha sido un camino de autoconocimiento y crecimiento personal.&rdquo;
                        <p className="text-right mt-2">- Sara</p>
                        </blockquote>
                    </div>

                    {/* Cuarto testimonio */}
                    <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                        <blockquote className="border-l-4 pl-4 italic text-gray-800">
                        &ldquo;Para mí, la abstinencia no es solo sobre sexualidad, sino sobre tomar decisiones conscientes y vivir de acuerdo a mis propios términos. Me ha dado una nueva perspectiva de la vida.&rdquo;
                        <p className="text-right mt-2">- Andrés</p>
                        </blockquote>
                    </div>

                    {/* Puedes añadir más testimonios siguiendo este patrón */}
                    </div>
                </section>
                </div>


                <div className="bg-[#C285C080] backdrop-blur-md">
                    <section className="max-w-[900px] mx-auto p-6">
                        <h2 className="text-2xl font-semibold text-white">Beneficios y Consideraciones</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {/* Tarjeta de Beneficio 1 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Autonomía Personal</h3>
                            <p>La abstinencia es una decisión que refuerza la autonomía personal y permite a las personas tomar decisiones conscientes sobre su sexualidad y relaciones.</p>
                        </div>

                        {/* Tarjeta de Beneficio 2 */}
                        <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                            <h3 className="text-lg font-semibold">Prevención de ETS y Embarazos no Planificados</h3>
                            <p>Practicar la abstinencia es un método efectivo para prevenir enfermedades de transmisión sexual y embarazos no planificados.</p>
                        </div>

                        {/* Tarjeta de Consideración 1 */}
                        <div className="bg-white p-4 rounded-lg shadow-md mt-0">
                            <h3 className="text-lg font-semibold">Presión Social y Desafíos</h3>
                            <p>Enfrentar la presión social y los desafíos al elegir la abstinencia puede ser complicado, y es importante encontrar un entorno de apoyo.</p>
                        </div>

                        {/* Tarjeta de Consideración 2 */}
                        <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                            <h3 className="text-lg font-semibold">Necesidad de Educación Sexual Integral</h3>
                            <p>Incluso al elegir la abstinencia, es crucial tener acceso a una educación sexual integral para tomar decisiones informadas y seguras.</p>
                        </div>

                        {/* Más tarjetas de beneficios y consideraciones pueden ser añadidas siguiendo este patrón */}
                        </div>
                    </section>
                    </div>


                    <div className="max-w-[900px] mx-auto p-6 mb-5">
                        <p className="text-gray-200 text-lg">
                            La elección de la abstinencia, como cualquier decisión relacionada con la sexualidad y las relaciones personales, es profundamente personal y varía de individuo a individuo. Es fundamental reconocer y respetar estas decisiones, entendiendo que cada persona tiene sus propias razones y circunstancias. 
                        </p>

                        <p className="text-gray-200 text-lg mt-4">
                            En una sociedad que a menudo presenta numerosos mensajes y presiones sobre la sexualidad, fomentar un espacio de diálogo abierto y sin prejuicios es clave para comprender y apoyar las diversas elecciones de vida de las personas. La abstinencia, elegida por razones personales, de salud, espirituales, o cualquier otro motivo, merece el mismo respeto y consideración que cualquier otra opción.
                        </p>

                        <p className="text-gray-200 text-lg mt-4">
                            Esta página busca no solo informar sino también abrir un espacio para la reflexión y el respeto mutuo, promoviendo un entendimiento más amplio de la abstinencia y su lugar en la diversidad de experiencias humanas. Animamos a todos a abordar este tema con mente abierta, empatía y respeto por las decisiones de cada uno.
                        </p>
                        </div>


      {/* Enlaces a recursos adicionales, si los tienes */}
    </>
  );
}

export default Abstinencia;
