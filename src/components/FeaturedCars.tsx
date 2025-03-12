
import { useRef, useState, useEffect } from "react";
import { cars } from "../data/carsData";
import SectionHeader from "./cars/SectionHeader";
import CarouselControls from "./cars/CarouselControls";
import CarCarousel from "./cars/CarCarousel";

const FeaturedCars = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const { carouselRef, scrollLeft, scrollRight, renderCarousel } = CarCarousel({ 
    cars, 
    isAnimated 
  });

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

  return (
    <section id="catalog" ref={sectionRef} className="py-20 bg-avtodiller-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <SectionHeader isAnimated={isAnimated} />
          <CarouselControls 
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
            isAnimated={isAnimated}
          />
        </div>

        {renderCarousel()}
        
{/*         <div className="text-center mt-8">
          <a href="https://www.instagram.com/avtodiller.kz/?igsh=c3YdmszYjVtc2sx&utm_source=qr" className="btn-primary inline-flex items-center justify-center px-8 py-3 text-lg font-medium">
            Смотреть все автомобили
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedCars;
