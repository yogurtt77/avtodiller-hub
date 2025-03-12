
import { ChevronLeft, ChevronRight, Shield, Calendar, Gauge } from "lucide-react";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  image: string;
  condition: string;
}

interface CarCardProps {
  car: Car;
  isAnimated: boolean;
  index: number;
}

const CarCard = ({ car, isAnimated, index }: CarCardProps) => {
  return (
    <div 
      className={`snap-start flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
        isAnimated ? 'animate-zoom-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img 
            src={car.image} 
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-avtodiller-accent text-white px-3 py-1 rounded-full text-sm font-medium">
            {car.price}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">
            {car.make} {car.model}
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2 text-avtodiller-accent" />
              <span>{car.year} год</span>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Gauge className="w-4 h-4 mr-2 text-avtodiller-accent" />
              <span>{car.mileage}</span>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Shield className="w-4 h-4 mr-2 text-avtodiller-accent" />
              <span>{car.condition}</span>
            </div>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center justify-center w-full btn-secondary"
          >
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
