
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Арман Казыбеков",
    role: "Бизнесмен",
    content: "Обратился в AVTODILLER для подбора бизнес-седана. Впечатлен профессионализмом команды и качеством предложенных вариантов. Выбрали и оформили автомобиль за 3 дня. Очень доволен сервисом!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Аида Сагатова",
    role: "Врач",
    content: "Благодарна команде AVTODILLER за помощь в выборе семейного автомобиля. Учли все пожелания, провели подробную консультацию и нашли идеальный вариант в моем бюджете. Рекомендую!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Дмитрий Ким",
    role: "IT-специалист",
    content: "Заказывал автомобиль из Кореи через AVTODILLER. Все этапы были прозрачны, постоянно получал обновления по статусу. Автомобиль пришел даже раньше ожидаемого срока. Сервис на высоте!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/26.jpg"
  },
  {
    id: 4,
    name: "Сауле Ахметова",
    role: "Предприниматель",
    content: "Второй раз обращаюсь в AVTODILLER и снова безупречный сервис. Помогли подобрать премиальный автомобиль с учетом всех моих требований. Ценю за честность и профессионализм.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/66.jpg"
  },
  {
    id: 5,
    name: "Марат Джумабаев",
    role: "Юрист",
    content: "Выражаю благодарность команде AVTODILLER за помощь в выборе автомобиля. Особенно впечатлила техническая экспертиза — выявили недостатки, которые я бы никогда не заметил. Сэкономили мне деньги и нервы.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView = 3;
  const totalSlides = testimonials.length;
  const maxIndex = totalSlides - slidesPerView;
  
  const sectionRef = useRef<HTMLElement>(null);
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

  const nextSlide = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const displayedTestimonials = testimonials.slice(activeIndex, activeIndex + slidesPerView);

  // Adjust slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      // This is just for demonstration; in a real app, you'd update slidesPerView
      // based on screen width and then recalculate maxIndex
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-avtodiller-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Что говорят наши <span className="text-gradient">клиенты</span>
          </h2>
          <p className="text-muted-foreground">
            Отзывы людей, которые уже нашли свой идеальный автомобиль с помощью AVTODILLER.
          </p>
        </div>

        <div className={`relative ${isAnimated ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Controls */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextSlide}
              disabled={activeIndex >= maxIndex}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {displayedTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ 
                  opacity: isAnimated ? 1 : 0,
                  transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${index * 0.1}s` 
                }}
              >
                <div className="mb-4 flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-avtodiller-accent">
                    <Quote className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {testimonial.content}
                </p>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile view - single testimonial */}
          <div className="md:hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-xl p-6 shadow-sm ${index === activeIndex ? 'block' : 'hidden'}`}
              >
                <div className="mb-4 flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-avtodiller-accent">
                    <Quote className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {testimonial.content}
                </p>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
            
            {/* Mobile pagination dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-avtodiller-accent' : 'bg-gray-300'}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
