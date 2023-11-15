import React from "react";
import { Card, CardBody } from "@nextui-org/react";

interface MemoryCardProps {
  value: string;
  isFlipped: boolean;
  onClick: () => void;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ value, isFlipped, onClick }) => {
  return (
    <Card
      isPressable
      onPress={onClick}
      className={`m-2 ${isFlipped ? 'bg-white' : 'bg-[#5B237C]'}`}
      shadow="lg"
    >
      <CardBody className="flex justify-center items-center h-40 w-40">
        {isFlipped ? (
          <p className="font-bold">{value}</p>
        ) : (
          <p className="text-white">?</p>
        )}
      </CardBody>
      <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-5 transition-opacity duration-300 bg-white"></div>
    </Card>
  );
};

export default MemoryCard;
