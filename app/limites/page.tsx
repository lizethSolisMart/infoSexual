// ... (Importaciones necesarias)

import { Image } from "@nextui-org/react";

const LimitesRelaciones: React.FC = () => {
    return (
        <div className="p-6 space-y-6">
            <Image 
                alt="Imagen sugestiva"
                src="/images/pareja-morada.jpg" // Ruta de la imagen ajustada
                width={400}
            />

            <h1 className="text-3xl font-bold">Estableciendo Límites en las Relaciones Afectivas</h1>

            <p className="text-gray-600 text-lg">
                En toda relación, establecer límites claros es fundamental para el bienestar y respeto mutuo. ¿Sabes cómo establecer y mantener esos límites?
            </p>

            <section>
                <h2 className="text-2xl font-semibold">Mitos vs. Realidades</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-200 p-4 rounded">Mito: Poner límites es ser egoísta.</div>
                    <div className="bg-green-200 p-4 rounded">Realidad: Establecer límites es una muestra de autorespeto y cuidado hacia la relación.</div>
                    {/* Puedes continuar agregando más mitos y realidades */}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Testimonios</h2>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
                    "Creí que establecer límites alejaría a mi pareja. Pero al hacerlo, nuestra relación se fortaleció más."
                    <p className="text-right mt-2">- Nombre de la Persona</p>
                </blockquote>
                {/* Puedes agregar más testimonios */}
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Cómo Establecer Límites Saludables</h2>
                <ul className="list-disc pl-5 mt-4">
                    <li>Comunicación abierta sobre tus necesidades y sentimientos.</li>
                    <li>Reconocer y respetar los límites del otro.</li>
                    <li>Ser asertivo, no agresivo.</li>
                    {/* Puedes continuar con más consejos */}
                </ul>
            </section>

            <p className="text-gray-600 text-lg mt-6">
                Establecer límites en las relaciones afectivas es esencial para crear un ambiente de confianza y respeto mutuo. Es una práctica que beneficia a ambas partes y fortalece la conexión.
            </p>

            {/* Aquí puedes agregar enlaces a recursos adicionales, si los tienes */}
        </div>
    );
}

export default LimitesRelaciones;

