import HighlightButton from "../HighlightButton/HighlightButton";
import "./ServiceCard.scss";

interface IServiceCardProps {
  name: string;
  description: string;
  image: string;
}

const ServiceCard = ({ name, description, image }: IServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="service-card__wrapper">
        <div className="service-card__image-wrapper">
          <img src={image} alt="service" />
        </div>
        <h1 className="service-card__title">{name}</h1>

        <p className="service-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
