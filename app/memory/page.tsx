"use client"

import MemoryCard from '@/components/MemoryCard';
import React, { useEffect, useRef, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import confetti from 'canvas-confetti';



// Asegúrate de tener 10 pares distintos, duplicados para hacer 20 tarjetas
const pairs = ['A', 'B'];
let shuffledPairs = pairs.concat(pairs).sort(() => 0.5 - Math.random());






    const Memorama: React.FC = () => {
        // Al principio de tu componente
const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
    const [openedCards, setOpenedCards] = useState<string[]>([]);
    const [matched, setMatched] = useState<string[]>([]);
    const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
    const [gameWon, setGameWon] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showConfetti, setShowConfetti] = useState(false);

    

    const flipCard = (index: number) => {
        const value = shuffledPairs[index];
        
        // Verifica que no se haya ya clickeado la carta y que hay menos de 2 cartas volteadas actualmente
        if (!flippedIndexes.includes(index) && flippedIndexes.length < 2) {
        setOpenedCards((prevOpened) => [...prevOpened, value]);
        setFlippedIndexes((prevFlipped) => [...prevFlipped, index]);
        }
    };
    
    // UseEffect para verificar si se ha encontrado un par
    useEffect(() => {
        if (openedCards.length === 2) {
        const [firstCard, secondCard] = openedCards;
        if (firstCard === secondCard) {
            setMatched((prevMatched) => [...prevMatched, firstCard]);
        }
    
        setTimeout(() => {
            setOpenedCards([]);
            setFlippedIndexes([]);
        }, 1000);
        }
    }, [openedCards, flippedIndexes]);
    
// UseEffect para verificar si el juego ha sido ganado
useEffect(() => {
    if (matched.length === pairs.length) {
      setShowConfetti(true);
      onOpen(); // Abre el modal
  
      // Usar un requestAnimationFrame para asegurarse de que se ejecute en el próximo cuadro de animación
      // Esto es necesario si estás utilizando efectos que dependen de la pintura del DOM
      const animationFrameId = requestAnimationFrame(() => {
        if (confettiCanvasRef.current instanceof HTMLCanvasElement) {
          const confettiInstance = confetti.create(confettiCanvasRef.current as HTMLCanvasElement, {
            resize: true,
            useWorker: true
          });
          confettiInstance({
            particleCount: 400,
            spread: 160,
            origin: { y: 0.6 }
          });
        } else {
          console.error('No se pudo encontrar el elemento canvas con ID "confetti-canvas".');
        }
      });
  
      // Cancelar el requestAnimationFrame cuando el componente se desmonte
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [matched, onOpen]);
  
  
      
      
  
  
  

      // Lógica para reiniciar el juego
      const resetGame = () => {
        shuffledPairs = pairs.concat(pairs).sort(() => 0.5 - Math.random());
        setMatched([]);
        setFlippedIndexes([]);
        setGameWon(false);
        onClose();
      };

  return (
    <div className="max-w-lg mx-auto p-10" style={{ maxWidth: '900px' }}>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            {shuffledPairs.map((value, index) => (
                <MemoryCard
                key={index}
                value={value}
                isFlipped={flippedIndexes.includes(index) || matched.includes(value)}
                onClick={() => {
                    if (!flippedIndexes.includes(index) && flippedIndexes.length < 2) {
                    flipCard(index);
                    }
                }}
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
          <>
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
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Memorama;
