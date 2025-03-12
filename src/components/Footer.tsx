
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-avtodiller-light text-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              AVTO<span className="text-avtodiller-accent">DILLER</span>
            </div>
            <p className="text-gray-700 max-w-xs">
              Профессиональный подбор автомобилей в Астане. Мы помогаем найти идеальный автомобиль с гарантией качества.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Nursultan_Motors/100060828992435/" 
                className="p-2 bg-avtodiller-DEFAULT/10 rounded-full hover:bg-avtodiller-accent/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a 
                href="https://www.instagram.com/avtodiller.kz/?igsh=c3YdmszYjVtc2sx&utm_source=qr" 
                className="p-2 bg-avtodiller-DEFAULT/10 rounded-full hover:bg-avtodiller-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-black" />
              </a>
<a 
  href="https://wa.me/c/77017308463" // замени на свой номер
  className="p-2 bg-avtodiller-DEFAULT/10 rounded-full hover:bg-avtodiller-accent/80 transition-colors"
  aria-label="WhatsApp"
>
  <MessageCircle className="w-5 h-5 text-green-500" />
</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-black">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-black transition-colors">Главная</a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-black transition-colors">О нас</a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-black transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#catalog" className="text-gray-700 hover:text-black transition-colors">Каталог</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 hover:text-black transition-colors">Отзывы</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-black">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-700 hover:text-black transition-colors">Подбор автомобиля</a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-black transition-colors">Техническая проверка</a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-black transition-colors">Поиск по базам</a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-black transition-colors">Доставка из-за рубежа</a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-black transition-colors">Техническое обслуживание</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-black">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-avtodiller-accent mt-0.5" />
                <div>
                  <p className="text-black font-medium">+7 (701) 730-8463</p>
                  <p className="text-sm text-gray-700">Пн-Сб: 9:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-avtodiller-accent mt-0.5" />
                <div>
                  <p className="text-black font-medium">zhanic@mail.ru</p>
                  <p className="text-sm text-gray-700">Свяжитесь с нами</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-avtodiller-accent mt-0.5" />
                <div>
                  <p className="text-black font-medium">г. Астана, ул. Тынышбайулы 8</p>
                  <p className="text-sm text-gray-700">Казахстан</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm">
              © {currentYear} AVTODILLER. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-700 text-sm hover:text-black transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-700 text-sm hover:text-black transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
