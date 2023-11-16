"use client"

import React from 'react';
import { Button, Card, CardBody, Image, ScrollShadow, Spacer } from '@nextui-org/react';
import Head from 'next/head';
import CustomCard from '@/components/CustomCard';
import Link from 'next/link';
import MemoryCard from '@/components/MemoryCard';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {

    const router = useRouter();

    const handleClick = () => {
      router.push('/memory');
    };

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
                    <h1 className="text-2xl font-bold text-white">¡Bienvenid@s a InfoSexual!</h1>
                    <p className="text-white">Un espacio para jóvenes donde abordamos temas sobre sexualidad con responsabilidad y transparencia.</p>

                    <Spacer y={2}/>
                    <div className="flex flex-col justify-center items-start space-y-4 p-4 bg-white rounded-lg shadow-lg bg-opacity-90">

                    <p className="text-black">¿Tienes preguntas sobre sexualidad? Nuestro chatbot educativo está aquí para ayudarte a encontrar respuestas.</p>

                    <Link href="/chat">
                    <Button className='color' style={{ backgroundColor: '#5A237D', color: 'white' }}>
                        Iniciar chat
                    </Button>
                    </Link>
                    </div>
                </div>
            </section>

            <div className="bg-[#47176360]">
            <div className="max-w-[1000px] mx-auto overflow-x-auto px-6">
            <h2 className="text-2xl font-bold text-white py-4 text-left">Explora Nuestros Temas</h2>
            </div>
   
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
                    imageUrl="/images/ets.jpg"
                    title="ETS's"
                    description="¡Protégete y cuida tu salud!"
                    route='/ets'
                />

                 <CustomCard
                    imageUrl="/images/abstinencia.jpg"
                    title="Abstinencia"
                    description="¡Tú decides cuándo y cómo!"
                    route='/abstinencia'
                />

                <CustomCard
                    imageUrl="/images/pareja-morada.jpg"
                    title="Límites"
                    description="Establece tus fronteras"
                    route='/limites'

                />

                <CustomCard
                    imageUrl="/images/edad-adecuada.jpg"
                    title="La edad adecuada"
                    description=" ¿Cuándo es el momento correcto?"
                    route='/edad-adecuada'
                />



                                <CustomCard
                    imageUrl="/images/expectativas.jpg"
                    title="Expectativas del sexo"
                    description="¿Cómo es el sexo en la vida real?"
                    route='/expectativas'
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

            <div className="max-w-[1000px] mx-auto p-6 flex flex-col md:flex-row">
                {/* Columna de Texto con mayor ancho */}
                <div className="flex-1 md:flex-[2]">
                    <h2 className="text-3xl font-bold text-white py-4">Juega y Aprende con nuestro Memorama Sexual</h2>
                    <p className="text-lg text-white">
    Descubre la educación sexual de forma divertida con nuestro memorama interactivo. Aprende sobre salud sexual y bienestar emocional mientras emparejas conceptos y definiciones.
</p>
                </div>

                {/* Columna de la Card alineada a la derecha */}
                <div className="flex-1 md:flex-[1] flex justify-center items-center">
                <Card
                    isPressable
                    onPress={handleClick}
                    className="m-2 transition-shadow duration-300 ease-in-out bg-white shadow-lg w-40 h-40"
                    >
                    <CardBody className="flex justify-center items-center text-3xl text-center text-[#5B237C] font-extrabold">
                        <p>Jugar</p>
                    </CardBody>
                    </Card>
                </div>
                </div>



        </div>
    );
}

export default HomePage;
