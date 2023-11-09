import React from "react";
import { Image } from "@nextui-org/react";

const RelacionesSanas: React.FC = () => {
    return (
        <div className="p-6 space-y-6 bg-pink-50">
            <div className="flex flex-col items-center">
                <Image
                    alt="Imagen que representa una relación saludable y equilibrada"
                    src="/images/esposa-esposo-peleando.jpg"
                    width={400}
                    height={400} // Fijar el alto para igualar el ancho
                    className="rounded-lg" // Bordes redondeados para la imagen
                />
            </div>

            <h1 className="text-3xl font-bold text-center text-purple-800">Relaciones Sanas: El Arte del Equilibrio y la Armonía</h1>

            <p className="text-gray-600 text-lg text-center">
                Una relación sana se construye sobre la base del respeto, la confianza y la comunicación. Descubre cómo cultivar relaciones que te hagan crecer.
            </p>
            <section>
                <h2 className="text-2xl font-semibold">Características de una Relación Saludable</h2>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Comunicación abierta y sin juicios.</li>
                    <li>Respeto mutuo en las decisiones y límites de cada uno.</li>
                    <li>Apoyo en los momentos buenos y en los desafíos.</li>
                    <li>Independencia y espacio personal.</li>
                    <li>Resolución de conflictos de manera constructiva.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Señales de Alerta en las Relaciones</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-yellow-200 p-4 rounded">Desbalance en el dar y recibir.</div>
                    <div className="bg-yellow-200 p-4 rounded">Comunicación agresiva o pasiva.</div>
                    <div className="bg-yellow-200 p-4 rounded">Falta de respeto a los límites personales.</div>
                    <div className="bg-yellow-200 p-4 rounded">Dependencia emocional excesiva.</div>
                    <div className="bg-yellow-200 p-4 rounded">Aislamiento de amigos y familiares.</div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Historias de Éxito</h2>
                {/* ... (Sección de historias positivas como en el ejemplo anterior) */}
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Construyendo Relaciones Más Fuertes</h2>
                {/* ... (Sección de consejos como en el ejemplo anterior) */}
            </section>

            <p className="text-gray-600 text-lg mt-6">
                Las relaciones sanas enriquecen nuestras vidas. Aprende a reconocerlas, construirlas y mantenerlas para un bienestar emocional duradero.
            </p>
        </div>
    );
};

export default RelacionesSanas;
