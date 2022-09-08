import "./HeroCard.scss";

interface IHeroCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const HeroCard = ({ title, description, icon }: IHeroCardProps) => {
  return (
    <div className="hero-card">
      <div className="hero-card__icon">{icon}</div>
      <div className="hero-card__content">
        <h3 className="hero-card__title">{title}</h3>
        <p className="hero-card__description">{description}</p>
      </div>
    </div>
  );
};

export default HeroCard;
