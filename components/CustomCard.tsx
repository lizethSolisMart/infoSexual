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
            <a> {/* Utiliza el componente a para que funcione el Link */}
                <Card className="py-4 max-w-xs cursor-pointer" style={{ maxWidth: '270px' }}> {/* Añade cursor-pointer para que parezca clickable */}
                    {/* Parte Superior: Imagen */}
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <Image
                            alt="Card background"
                            className="w-full object-cover h-[140px]"
                            src={imageUrl}
                            width={250} 
                            height={200} // Establecer la altura fija
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
            </a>
        </Link>
    );
}

export default CustomCard;
