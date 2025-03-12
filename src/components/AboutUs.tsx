
import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const advantages = [
  "Большой опыт работы в автомобильной сфере",
  "Техническая экспертиза каждого автомобиля",
  "Прозрачные цены без скрытых комиссий",
  "Полное сопровождение сделки",
  "Индивидуальный подход к каждому клиенту",
  "Гарантия на все автомобили"
];

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              textRef.current?.classList.remove('opacity-0');
              textRef.current?.classList.add('animate-fade-right');
            }
            if (entry.target === imageRef.current) {
              imageRef.current?.classList.remove('opacity-0');
              imageRef.current?.classList.add('animate-fade-left');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="opacity-0">
            <div className="inline-block bg-avtodiller-accent/10 px-4 py-1.5 rounded-full text-avtodiller-accent font-medium text-sm mb-4">
              О компании
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Почему выбирают <span className="text-gradient">AVTODILLER</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Мы — надежная компания по подбору автомобилей, которая помогает клиентам найти идеальный автомобиль в Астане. С 2018 года мы предоставляем услуги по подбору, проверке и доставке автомобилей из Кореи, США и Европы.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-avtodiller-accent mt-0.5 flex-shrink-0" />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary">
                Наши услуги
              </a>
              <a href="#testimonials" className="btn-secondary">
                Отзывы клиентов
              </a>
            </div>
          </div>

          <div ref={imageRef} className="opacity-0 lg:ml-12">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560701795-48dd7ad5445b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AVTODILLER team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-6 max-w-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-avtodiller-accent">5+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-avtodiller-accent">1000+</div>
                    <div className="text-sm text-muted-foreground">Проверенных авто</div>
                  </div>
                </div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -top-4 -right-4 bg-avtodiller-accent text-white rounded-full px-4 py-2 font-medium shadow-lg">
                Опыт с 2018 года
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
