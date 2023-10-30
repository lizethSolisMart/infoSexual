// pages/HomePage.tsx

import React from 'react';
import { Image } from '@nextui-org/react';
import Head from 'next/head';
import CustomCard from '@/components/CustomCard';
import ChatComponent from '@/components/Chat';

const HomePage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>InfoSexual</title>
            </Head>
            <section className="grid grid-cols-2 gap-4 p-6 shadow-lg bg-white rounded-lg">
                {/* Columna de Imagen */}
                <div className="flex justify-center items-center">
                    <Image
                        width={400} // Puedes ajustar el tamaño según necesites
                        alt="Imagen representativa"
                        src="/images/ifosexual.jpg"
                    />
                </div>
                
                {/* Columna de Título y Descripción */}
                <div className="flex flex-col justify-center items-start space-y-4 p-4">
                    <h1 className="text-2xl font-bold">¡Bienvenidos a InfoSexual!</h1>
                    <p className="text-gray-600">Un espacio para jóvenes donde abordamos temas sobre sexualidad con responsabilidad y transparencia.</p>
                </div>
            </section>
            <div>
      <h1>Chat de Preguntas y Respuestas</h1>
      <ChatComponent />
    </div>
            <section className="flex space-x-4 p-6">
                <CustomCard
                    imageUrl="/images/abrazo.jpg"
                    title="Responsabilidad afectiva"
                    description="Aprende a cuidar tus emociones"
                    route='/responsabilidad-afectiva'
                />
                <CustomCard
                    imageUrl="/images/pareja-morada.jpg"
                    title="Límites"
                    description="Establece tus fronteras"
                    route='/limites'

                />
                <CustomCard
                    imageUrl="/images/esposa-esposo-peleando.jpg"
                    title="Relaciones sanas"
                    description="Construye relaciones saludables"
                    route='/relaciones-sanas'

                />
                <CustomCard
                    imageUrl="/images/primera-vez.jpg"
                    title="La primera vez"
                    description="Hazlo seguro y a tu tiempo"
                    route='/la-primera-vez'
                />
            </section>
        </div>
    );
}

export default HomePage;
