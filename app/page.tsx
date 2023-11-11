// pages/HomePage.tsx

import React from 'react';
import { Image, ScrollShadow, Spacer } from '@nextui-org/react';
import Head from 'next/head';
import CustomCard from '@/components/CustomCard';

const HomePage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>InfoSexual</title>
            </Head>
            <section className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center p-6">
                {/* Columna de Imagen */}
                <div className="flex justify-center items-center">
                    <Image
                        width={600} // Puedes ajustar el tamaño según necesites
                        alt="Imagen representativa"
                        src="/images/ifosexual.jpg"
                    />
                </div>

                <Spacer x={10}/>
                
                {/* Columna de Título y Descripción */}
                <div className="flex flex-col justify-center items-start space-y-4 p-4">
                    <h1 className="text-2xl font-bold text-white">¡Bienvenidos a InfoSexual!</h1>
                    <p className="text-white">Un espacio para jóvenes donde abordamos temas sobre sexualidad con responsabilidad y transparencia.</p>
                </div>
            </section>

            <div className="bg-[#47176360]">
   
      {/* ScrollShadow envuelve el contenedor de las tarjetas */}
      <ScrollShadow orientation="horizontal" className="max-w-[1000px] mx-auto p-6 overflow-x-auto">
        {/* Esta sección debe tener un ancho definido que sea mayor que el del contenedor ScrollShadow para que se active el desplazamiento horizontal */}
        <section className="flex space-x-4 min-w-max">
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
            </ScrollShadow>
            </div>
        </div>
    );
}

export default HomePage;
