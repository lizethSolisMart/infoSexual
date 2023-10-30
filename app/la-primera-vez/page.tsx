// ... (Importaciones necesarias)
import { Image } from "@nextui-org/react";

const LaPrimeraVez: React.FC = () => {
    return (
        <div className="p-6 space-y-6">
            <Image 
                alt="Imagen que evoca descubrimiento y respeto, relacionada con la primera experiencia sexual"
                src="/images/primera-vez.jpg" // Poner la ruta de tu imagen aquí
                width={400}
            />

            <h1 className="text-3xl font-bold">La Primera Vez: Inicio del Viaje de Descubrimiento</h1>

            <p className="text-gray-600 text-lg">
                La primera experiencia sexual es un paso significativo. Aquí te ofrecemos consejos e información para que este momento sea seguro, cómodo y memorable.
            </p>

            <section>
                <h2 className="text-2xl font-semibold">Preparándote para la Primera Vez</h2>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Informarse bien sobre protección y métodos anticonceptivos.</li>
                    <li>La importancia del consentimiento mutuo y la comunicación.</li>
                    <li>Escoger el momento y lugar adecuado donde ambos se sientan seguros.</li>
                    <li>Manejar las expectativas y aceptar que la perfección es un mito.</li>
                    <li>Aceptar que sentir nervios es natural y está bien.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Desmitificando la Primera Vez</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-200 p-4 rounded">Mito: Debe ser perfecto.</div>
                    <div className="bg-blue-200 p-4 rounded">Realidad: Es un aprendizaje.</div>
                    <div className="bg-blue-200 p-4 rounded">Mito: El dolor es inevitable.</div>
                    <div className="bg-blue-200 p-4 rounded">Realidad: La comodidad es clave.</div>
                    <div className="bg-blue-200 p-4 rounded">Mito: No es necesario hablarlo.</div>
                    <div className="bg-blue-200 p-4 rounded">Realidad: La comunicación importa.</div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Experiencias Compartidas</h2>
                {/* ... (Sección para compartir experiencias y testimonios) */}
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Creando un Recuerdo Positivo</h2>
                {/* ... (Sección con consejos para asegurar una experiencia positiva) */}
            </section>

            <p className="text-gray-600 text-lg mt-6">
                La primera vez es solo el comienzo. Con el cuidado y la preparación adecuados, puede ser una experiencia gratificante y un recuerdo valioso.
            </p>

            {/* Aquí puedes agregar enlaces a recursos adicionales, si los tienes */}
        </div>
    );
}

export default LaPrimeraVez;
