// ... (Importaciones necesarias)
import { Image } from "@nextui-org/react";

const RelacionesSanas: React.FC = () => {
    return (
        <div className="p-6 space-y-6 max-w-screen-sm mx-auto"> {/* Añadido max-w-screen-sm y mx-auto */}
            <Image 
                alt="Una representación de equilibrio y bienestar emocional en las relaciones juveniles"
                src="/images/marioneta.png" // Poner la ruta de tu imagen aquí
                width={400}
            />

            <h1 className="text-3xl font-bold">Relaciones Sanas: El Camino hacia el Respeto Mutuo</h1>

            <p className="text-gray-600 text-lg">
                Las relaciones durante la adolescencia pueden ser complejas. Aprender a diferenciar entre amor y manipulación es vital para desarrollar lazos saludables.
            </p>

            <section>
                <h2 className="text-2xl font-semibold">Mitos vs. Realidades</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-200 p-4 rounded">Mito: Si te celan, es porque te aman.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: Los celos no son una medida de amor, sino de inseguridad.</div>
                    {/* Puedes continuar agregando más mitos y realidades */}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Voces Reales</h2>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
                    "Al principio pensé que era dulce que quisiera saber dónde estaba todo el tiempo. Pero luego me di cuenta de que no confiaba en mí."
                    <p className="text-right mt-2">- Nombre de la Persona</p>
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

