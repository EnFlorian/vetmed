import RatingStars from "../RatingStars/RatingStars";
import "./TestimonialCard.scss";
import quotesImage from "../../../assets/quotes-1.svg";

interface ITestimonialCardProps {
  name: string;
  title: string;
  description: string;
  personImage: string;
  petImage: string;
  rating: number;
}

const TestimonialCard = ({ name, title, description, personImage, petImage, rating }: ITestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__left-content">
        <div className="testimonial-card__quotes-image-wrapper">
          <img draggable={false} src={quotesImage} alt="quotes" />
        </div>
        <div className="testimonial-card__person-image-wrapper">
          <img draggable={false} src={personImage} alt="pet owner" />
        </div>
        <div className="testimonial-card__pet-image-wrapper">
          <img draggable={false} src={petImage} alt="pet" />
        </div>
      </div>
      <div className="testimonial-card__right-content">
        <h1 className="testimonial-card__name">{name}</h1>
        <h2 className="testimonial-card__title">{title}</h2>
        <p className="testimonial-card__description">{description}</p>
        <div className="testimonial-card__rating">
          <RatingStars rating={rating} />
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
