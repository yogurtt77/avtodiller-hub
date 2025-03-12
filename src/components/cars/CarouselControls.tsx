
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselControlsProps {
  scrollLeft: () => void;
  scrollRight: () => void;
  isAnimated: boolean;
}

const CarouselControls = ({ scrollLeft, scrollRight, isAnimated }: CarouselControlsProps) => {
  return (
    <div className={`flex space-x-2 ${isAnimated ? 'animate-fade-left' : 'opacity-0'}`}>
      <button 
        onClick={scrollLeft}
        className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={scrollRight}
        className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CarouselControls;
