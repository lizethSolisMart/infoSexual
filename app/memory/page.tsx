"use client"

import MemoryCard from '@/components/MemoryCard';
import React, { useEffect, useRef, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import confetti from 'canvas-confetti';

const pairs = [
  { id: "1", text: "Concepto1", type: "concept" },
  { id: "1", text: "Definición del Concepto1", type: "definition" },
  { id: "2", text: "Concepto2", type: "concept" },
  { id: "2", text: "Definición del Concepto2", type: "definition" },
  // ... otros pares
];

let shuffledPairs = [...pairs].sort(() => 0.5 - Math.random());


const Memorama: React.FC = () => {
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  const [openedCards, setOpenedCards] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showConfetti, setShowConfetti] = useState(false);

// Lógica para voltear la tarjeta
const flipCard = (index: number) => {
  const card = shuffledPairs[index];

  if (!flippedIndexes.includes(index) && flippedIndexes.length < 2) {
    setOpenedCards((prevOpened) => [...prevOpened, card.id]);
    setFlippedIndexes((prevFlipped) => [...prevFlipped, index]);
  }
};


// Lógica para verificar el emparejamiento
useEffect(() => {
  if (openedCards.length === 2) {
    const [firstCardId, secondCardId] = openedCards;
    if (firstCardId === secondCardId) {
      setMatched((prevMatched) => [...prevMatched, firstCardId]);
    }

    setTimeout(() => {
      setOpenedCards([]);
      setFlippedIndexes([]);
    }, 1000);
  }
}, [openedCards, flippedIndexes]);

useEffect(() => {
  // Asegúrate de que la longitud de 'matched' sea la mitad de la longitud de 'pairs'
  if (matched.length === pairs.length / 2) {
    setShowConfetti(true);
    onOpen();
      const animationFrameId = requestAnimationFrame(() => {
        if (confettiCanvasRef.current) {
          const confettiInstance = confetti.create(confettiCanvasRef.current, {
            resize: true,
            useWorker: true
          });
          confettiInstance({
            particleCount: 400,
            spread: 160,
            origin: { y: 0.6 }
          });
        }
      });
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [matched, onOpen]);

  const resetGame = () => {
    shuffledPairs = [...pairs].sort(() => 0.5 - Math.random()); // Solo una copia de 'pairs'
    setMatched([]);
    setFlippedIndexes([]);
    setShowConfetti(false);
    onClose();
  };
  

  return (
    <div className="mx-auto p-10" style={{ maxWidth: '900px' }}>
      <div >
        {shuffledPairs.map((card, index) => (
          <MemoryCard
            key={index}
            value={(flippedIndexes.includes(index) || matched.includes(card.id)) ? card.text : ""}
            isFlipped={flippedIndexes.includes(index) || matched.includes(card.id)}
            onClick={() => flipCard(index)}
          />
        ))}

      </div>
      {showConfetti && (
        <canvas
          ref={confettiCanvasRef}
          id="confetti-canvas"
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">¡Felicidades!</ModalHeader>
          <ModalBody>
            <p>Has encontrado todos los pares. ¿Quieres jugar de nuevo?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              No, gracias
            </Button>
            <Button color="primary" onPress={resetGame}>
              Jugar de nuevo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Memorama;