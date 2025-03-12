
import { useRef, useState } from "react";
import { Car } from "../../data/carsData";
import CarCard from "./CarCard";

interface CarCarouselProps {
  cars: Car[];
  isAnimated: boolean;
}

const CarCarousel = ({ cars, isAnimated }: CarCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      if (currentIndex < Math.ceil(cars.length / 3) - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return {
    carouselRef,
    scrollLeft,
    scrollRight,
    currentIndex,
    renderCarousel: () => (
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cars.map((car, index) => (
          <CarCard 
            key={car.id} 
            car={car} 
            isAnimated={isAnimated} 
            index={index} 
          />
        ))}
      </div>
    )
  };
};

export default CarCarousel;
