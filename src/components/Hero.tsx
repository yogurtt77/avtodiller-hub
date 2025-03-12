
import { useState, useEffect } from "react";
import { ChevronRight, Car } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-avtodiller-light to-white -z-10"></div>
      
      {/* Dots pattern */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute w-full h-full bg-[radial-gradient(#7E69AB_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-right' : 'opacity-0'}`}>
            <div className="inline-block bg-avtodiller-accent/10 px-4 py-1.5 rounded-full text-avtodiller-accent font-medium text-sm">
              Автомобили из Кореи, США и Европы
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Найдите идеальный автомобиль <span className="text-gradient">в Астане</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              AVTODILLER — это профессиональный подбор автомобилей с гарантией технического состояния. Мы помогаем найти автомобиль вашей мечты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#catalog" className="btn-primary flex items-center justify-center gap-2">
                <span>Смотреть каталог</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#about" className="btn-secondary flex items-center justify-center gap-2">
                <span>Узнать больше</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-avtodiller-accent">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-avtodiller-accent">5 лет</div>
                <div className="text-sm text-muted-foreground">На рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-avtodiller-accent">100%</div>
                <div className="text-sm text-muted-foreground">Гарантия качества</div>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? 'animate-fade-left' : 'opacity-0'}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://a.d-cd.net/I_yYncLg2ElEIkU_A_9JsCVYPnw-1920.jpg" 
                alt="Luxury Car" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 max-w-xs animate-pulse">
              <div className="flex items-start gap-3">
                <div className="bg-avtodiller-accent/10 p-2 rounded-lg">
                  <Car className="w-6 h-6 text-avtodiller-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Премиум автомобили</h3>
                  <p className="text-sm text-muted-foreground">Мы подбираем только проверенные автомобили высшего качества</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
