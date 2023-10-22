import React from "react";
import { Image } from "@nextui-org/react";
import CustomCard from "@/components/CustomCard";

export default function App() {
  return (
    <div>
      <CustomCard
      imageUrl="/images/manos.jpg"
      title="Esto es un título"/>
            <CustomCard
      imageUrl="/images/manos.jpg"
      title="Esto es otro título"/>
    </div>
  );
}
