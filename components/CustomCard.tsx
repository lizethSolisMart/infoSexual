import React from "react";
import Link from 'next/link';  // Importa Link de 'next/link'
import { Card, CardHeader, CardBody, Image, Spacer } from "@nextui-org/react";

interface CustomCardProps {
    imageUrl: string;
    title: string;
    route?: string;  // Aquí agregamos la ruta
    subtitle?: string;
    description?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ imageUrl, title, route, subtitle, description }) => {
    return (
        <Link href={route || "#"} passHref> {/* Envuelve tu Card con Link */}
                <Card className="py-4 max-w-xs cursor-pointer" style={{ maxWidth: '270px' }}>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <Image
                        alt="Card background"
                        className="object-cover h-36 w-60" // aquí ajustas el alto y el ancho usando Tailwind
                        src={imageUrl}
                        width={250} // Estos props de width y height podrían no ser necesarios
                        height={200} // si Tailwind está estableciendo el tamaño adecuadamente
                        />
                    </CardHeader>
                    <Spacer y={3}/>

                    {/* Parte Inferior: Título y otros detalles */}
                    <CardBody className="overflow-visible py-2 flex-col items-start px-4">
                        <h4 className="font-bold text-large mx-2">{title}</h4>
                        {subtitle && <p className="text-tiny uppercase font-bold">{subtitle}</p>}
                        <Spacer y={2}/>
                        {description && <small className="text-default-500 mx-2">{description}</small>}
                    </CardBody>
                </Card>
        </Link>
    );
}

export default CustomCard;
