// MemoryCard.tsx
interface MemoryCardProps {
    value: string;
    isFlipped: boolean;
    onClick: () => void;
  }
  
  const MemoryCard: React.FC<MemoryCardProps> = ({ value, isFlipped, onClick }) => {
    return (
      <div
        className={`w-20 h-20 m-2 flex justify-center items-center ${isFlipped ? 'bg-blue-500' : 'bg-gray-500'}`}
        onClick={onClick}
      >
        {isFlipped && <span className="text-white text-xl">{value}</span>}
      </div>
    );
  };
  
  export default MemoryCard;
  