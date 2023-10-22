// pages/HomePage.tsx

import React from 'react';
import { Image } from '@nextui-org/react';
import Head from 'next/head';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Head>
                <title>InfoSexual</title>
            </Head>
            <div className="grid grid-cols-2 gap-4 p-6 shadow-lg bg-white rounded-lg">
                {/* Columna de Imagen */}
                <div className="flex justify-center items-center">
                    <Image
                        width={400} // Puedes ajustar el tamaño según necesites
                        alt="Imagen representativa"
                        src="/images/manos.jpg"
                    />
                </div>
                
                {/* Columna de Título y Descripción */}
                <div className="flex flex-col justify-center items-start space-y-4 p-4">
                    <h1 className="text-2xl font-bold">¡Bienvenidos a InfoSexual!</h1>
                    <p className="text-gray-600">Un espacio para jóvenes donde abordamos temas sobre sexualidad con responsabilidad y transparencia.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
