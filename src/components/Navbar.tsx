
import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-avtodiller-DEFAULT">
            AVTO<span className="text-avtodiller-accent">DILLER</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-avtodiller-DEFAULT hover:text-avtodiller-accent transition-colors">
            Главная
          </a>
          <a href="#services" className="text-avtodiller-DEFAULT hover:text-avtodiller-accent transition-colors">
            Услуги
          </a>
          <a href="#catalog" className="text-avtodiller-DEFAULT hover:text-avtodiller-accent transition-colors">
            Каталог
          </a>
          <a href="#about" className="text-avtodiller-DEFAULT hover:text-avtodiller-accent transition-colors">
            О нас
          </a>
          <a href="#testimonials" className="text-avtodiller-DEFAULT hover:text-avtodiller-accent transition-colors">
            Отзывы
          </a>
        </div>

        <div className="hidden md:flex items-center">
          <a 
            href="tel:+77017308463" 
            className="flex items-center gap-2 btn-primary"
          >
            <PhoneCall className="w-4 h-4" />
            <span>+7 (701) 730-8463</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-avtodiller-DEFAULT focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#" 
              className="block py-2 text-avtodiller-DEFAULT hover:text-avtodiller-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#services" 
              className="block py-2 text-avtodiller-DEFAULT hover:text-avtodiller-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#catalog" 
              className="block py-2 text-avtodiller-DEFAULT hover:text-avtodiller-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </a>
            <a 
              href="#about" 
              className="block py-2 text-avtodiller-DEFAULT hover:text-avtodiller-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-avtodiller-DEFAULT hover:text-avtodiller-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="tel:+77777777777" 
              className="flex items-center gap-2 py-2 text-avtodiller-accent"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+7 (777) 777-7777</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
