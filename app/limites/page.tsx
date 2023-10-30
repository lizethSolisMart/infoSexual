// ... (Importaciones necesarias)
import { Image } from "@nextui-org/react";

const RelacionesSanas: React.FC = () => {
    return (
        <div className="p-6 space-y-6">
            <Image 
                alt="Una representación de equilibrio y bienestar emocional en las relaciones juveniles"
                src="/images/pareja-morada.jpg" // Poner la ruta de tu imagen aquí
                width={400}
            />

            <h1 className="text-3xl font-bold">Relaciones Sanas: El Camino hacia el Respeto Mutuo</h1>

            <p className="text-gray-600 text-lg">
                Las relaciones durante la adolescencia pueden ser complejas. Aprender a diferenciar entre amor y manipulación es vital para desarrollar lazos saludables.
            </p>

            <section>
                <h2 className="text-2xl font-semibold">Mitos vs. Realidades</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-200 p-4 rounded">Mito: Si tu pareja quiere pasar todo el tiempo contigo, es amor verdadero.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: El amor sano incluye respetar el espacio personal y fomentar la independencia.</div>

                    <div className="bg-red-200 p-4 rounded">Mito: Una buena relación no tiene conflictos.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: Las desavenencias son normales; lo importante es cómo se resuelven.</div>

                    <div className="bg-red-200 p-4 rounded">Mito: Cambiar por tu pareja es señal de compromiso.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: Debes nunca perder tu esencia; el compromiso es mutuo sin sacrificar la identidad.</div>

                    <div className="bg-red-200 p-4 rounded">Mito: Sentir celos es natural y muestra interés.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: Los celos extremos son una señal de desconfianza y control, no de amor.</div>

                    <div className="bg-red-200 p-4 rounded">Mito: Si tu pareja insiste, es porque le importas.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: La insistencia puede ser una forma de presión; el respeto a las decisiones es clave.</div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Voces Reales</h2>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
                    "Pensaba que siempre querer estar conmigo era romántico, hasta que me sentí sofocada y sin espacio para mí."
                    <p className="text-right mt-2">- Arias Janeth</p>
                </blockquote>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
                    "El control no es amor. Me tomó tiempo darme cuenta de que merezco libertad y confianza en una relación."
                    <p className="text-right mt-2">- Antonio Ventura</p>
                </blockquote>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
                    "La manipulación puede disfrazarse de 'cuidado', pero aprender a reconocerla fue el primer paso para mi recuperación."
                    <p className="text-right mt-2">- Madi Hinojos</p>
                </blockquote>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Cómo Practicar la Responsabilidad Afectiva</h2>
                <ul className="list-disc pl-5 mt-4">
                    <li>Comunicación abierta y honesta sin temor a la vulnerabilidad.</li>
                    <li>Establecer límites claros y respetar los de tu pareja.</li>
                    <li>Respetar la autonomía y decisiones del otro, incluso cuando no estés de acuerdo.</li>
                    <li>Validar los sentimientos de tu pareja sin minimizarlos.</li>
                    <li>Promover el crecimiento personal y de pareja con apoyo mutuo.</li>
                </ul>
            </section>

            <p className="text-gray-600 text-lg mt-6">
                Entender la responsabilidad afectiva es fundamental para construir y mantener relaciones sanas. Reconoce tu valor y el de tu pareja como individuos únicos.
            </p>

            {/* Aquí puedes agregar enlaces a recursos adicionales, si los tienes */}
        </div>
    );
}

export default RelacionesSanas;

