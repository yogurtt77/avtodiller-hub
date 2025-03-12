
interface SectionHeaderProps {
  isAnimated: boolean;
}

const SectionHeader = ({ isAnimated }: SectionHeaderProps) => {
  return (
    <div className={`max-w-2xl ${isAnimated ? 'animate-fade-right' : 'opacity-0'}`}>
      <h2 className="text-3xl font-bold mb-4">Избранные <span className="text-gradient">автомобили</span></h2>
      <p className="text-muted-foreground">
        Ознакомьтесь с нашей коллекцией тщательно отобранных автомобилей премиум-класса, доступных для покупки прямо сейчас.
      </p>
    </div>
  );
};

export default SectionHeader;
