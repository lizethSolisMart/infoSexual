import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface CustomCardProps {
    imageUrl: string;
    title: string;
    subtitle?: string; // Hago el subtítulo opcional en caso de que no siempre lo necesites
    description?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ imageUrl, title, subtitle, description }) => {
    return (
        <Card className="py-4 max-w-xs" style={{ maxWidth: '270px' }}> {/* Aquí establecemos el ancho máximo */}
            {/* Parte Superior: Imagen */}
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl mb-4"
                    src={imageUrl}
                    width={250} // Aquí ajustamos el ancho de la imagen a 250px
                />
            </CardHeader>

            {/* Parte Inferior: Título y otros detalles */}
            <CardBody className="overflow-visible py-2 flex-col items-start px-4">
                {subtitle && <p className="text-tiny uppercase font-bold">{subtitle}</p>}
                {description && <small className="text-default-500">{description}</small>}
                <h4 className="font-bold text-large">{title}</h4>
            </CardBody>
        </Card>
    );
}

export default CustomCard;
