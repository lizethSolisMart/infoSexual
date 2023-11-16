import React from "react";
import { Card, CardBody } from "@nextui-org/react";

interface MemoryCardProps {
  value: string;
  isFlipped: boolean;
  onClick: () => void;
  type?: string; // Añadir esta línea
}

const MemoryCard: React.FC<MemoryCardProps> = ({ value, isFlipped, onClick, type }) => {
  const textSizeClass = isFlipped
    ? type === "definition" 
      ? "text-sm" 
      : "text-md"
    : "text-3xl";

  return (
    <Card
      isPressable
      onPress={onClick}
      className={`m-2 ${isFlipped ? 'bg-white' : 'bg-[#5B237C]'}`}
      shadow="lg"
    >
      <CardBody className={`flex justify-center items-center h-40 w-40 ${textSizeClass}`}>
        {isFlipped ? (
          <p className="text-center font-bold">{value}</p> // Añadir clase text-center aquí
        ) : (
          <p className="text-center text-white font-extrabold">?</p> // Añadir clase text-center aquí
        )}
      </CardBody>
    </Card>
  );
};


export default MemoryCard;

