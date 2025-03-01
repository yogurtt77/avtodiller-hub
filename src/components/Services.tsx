
import { useEffect, useRef } from "react";
import { Car, ShieldCheck, Search, Truck, Settings, FileCheck } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Подбор автомобиля",
    description: "Помогаем найти автомобиль, соответствующий всем вашим требованиям и бюджету.",
    icon: Car,
  },
  {
    id: 2,
    title: "Техническая проверка",
    description: "Проводим полную диагностику автомобиля перед покупкой.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Поиск по базам",
    description: "Проверяем историю автомобиля, включая аварии, сервисное обслуживание и пробег.",
    icon: Search,
  },
  {
    id: 4,
    title: "Доставка из-за рубежа",
    description: "Организуем покупку и доставку автомобилей из Кореи, США и Европы.",
    icon: Truck,
  },
  {
    id: 5,
    title: "Техническое обслуживание",
    description: "Предоставляем услуги по регулярному сервисному обслуживанию вашего автомобиля.",
    icon: Settings,
  },
  {
    id: 6,
    title: "Юридическое сопровождение",
    description: "Помогаем с оформлением всех необходимых документов и страховки.",
    icon: FileCheck,
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          document.querySelectorAll('.service-card').forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-zoom-in');
            }, index * 100);
          });
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
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши <span className="text-gradient">услуги</span></h2>
          <p className="text-muted-foreground">
            AVTODILLER предлагает полный спектр услуг по подбору, проверке и обслуживанию автомобилей в Астане.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card opacity-0 bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-avtodiller-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <service.icon className="w-6 h-6 text-avtodiller-accent" />
              </div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
