
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Shield, Calendar, Gauge } from "lucide-react";

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: "15 000 000 ₸",
    mileage: "25 000 км",
    image: "https://images.unsplash.com/photo-1621007690695-38011c5f2a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Отличное",
  },
  {
    id: 2,
    make: "Hyundai",
    model: "Sonata",
    year: 2021,
    price: "12 500 000 ₸",
    mileage: "35 000 км",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Отличное",
  },
  {
    id: 3,
    make: "Kia",
    model: "K5",
    year: 2022,
    price: "13 800 000 ₸",
    mileage: "20 000 км",
    image: "https://images.unsplash.com/photo-1619405399517-a9fb4b700d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Отличное",
  },
  {
    id: 4,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
    price: "22 500 000 ₸",
    mileage: "40 000 км",
    image: "https://images.unsplash.com/photo-1563720223481-ca1c9a0f37b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Хорошее",
  },
  {
    id: 5,
    make: "BMW",
    model: "5 Series",
    year: 2021,
    price: "24 000 000 ₸",
    mileage: "30 000 км",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Отличное",
  },
  {
    id: 6,
    make: "Audi",
    model: "A6",
    year: 2020,
    price: "21 000 000 ₸",
    mileage: "45 000 км",
    image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Хорошее",
  },
];

const FeaturedCars = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  return (
    <section id="catalog" ref={sectionRef} className="py-20 bg-avtodiller-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div className={`max-w-2xl ${isAnimated ? 'animate-fade-right' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4">Избранные <span className="text-gradient">автомобили</span></h2>
            <p className="text-muted-foreground">
              Ознакомьтесь с нашей коллекцией тщательно отобранных автомобилей премиум-класса, доступных для покупки прямо сейчас.
            </p>
          </div>
          
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
        </div>

        <div 
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cars.map((car, index) => (
            <div 
              key={car.id}
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
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="btn-primary inline-flex items-center justify-center px-8 py-3 text-lg font-medium">
            Смотреть все автомобили
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
