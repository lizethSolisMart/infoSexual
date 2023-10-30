// ... (Importaciones necesarias)

import { Image } from "@nextui-org/react";

const ResponsabilidadAfectiva: React.FC = () => {
    return (
        <div className="p-6 space-y-6 max-w-screen-sm mx-auto"> {/* Añadido max-w-screen-sm y mx-auto */}
            <Image 
                alt="Imagen sugestiva"
                src="/images/marioneta.png" // Poner la ruta de tu imagen aquí
                width={400}
            />

            <h1 className="text-3xl font-bold">¿Amor o Manipulación? Descubre la Línea</h1>

            <p className="text-gray-600 text-lg">
                En la búsqueda del amor, a veces cruzamos líneas sin darnos cuenta. Pero, ¿sabes realmente dónde está la línea entre el amor y la manipulación?
            </p>

            <section>
                <h2 className="text-2xl font-semibold">Mitos vs. Realidades</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-red-200 p-4 rounded">Mito: Si te celan, es porque te aman.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: Los celos no son una medida de amor, sino de inseguridad.</div>
                    <div className="bg-red-200 p-4 rounded">Mito: El amor lo puede todo.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: El amor es importante, pero una relación también requiere trabajo, respeto y comunicación.</div>
                    {/* Puedes continuar agregando más mitos y realidades */}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Voces Reales</h2>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
                    "Al principio pensé que era dulce que quisiera saber dónde estaba todo el tiempo. Pero luego me di cuenta de que no confiaba en mí."
                    <p className="text-right mt-2">- Lizeth Solis</p>
                </blockquote>
                {/* Puedes agregar más testimonios */}
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Cómo Practicar la Responsabilidad Afectiva</h2>
                <ul className="list-disc pl-5 mt-4">
                    <li>Comunicación abierta y honesta.</li>
                    <li>Establecer límites claros.</li>
                    <li>Respetar la autonomía del otro.</li>
                    {/* Puedes continuar con más consejos */}
                </ul>
            </section>

            <p className="text-gray-600 text-lg mt-6">
                La responsabilidad afectiva es una parte esencial de cualquier relación. Asegurarte de que tú y tu pareja estén en la misma página es el primer paso hacia una relación sana.
            </p>

            {/* Aquí puedes agregar enlaces a recursos adicionales, si los tienes */}
        </div>
    );
}

export default ResponsabilidadAfectiva;
