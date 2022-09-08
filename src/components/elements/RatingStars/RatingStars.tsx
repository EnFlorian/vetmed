import "./RatingStars.scss";
import pawFull from "../../../assets/paw-print-1.svg";
import pawEmpty from "../../../assets/paw-print-7.svg";

interface IRatingStarsProps {
  rating: number;
}

const RatingStars = ({ rating }: IRatingStarsProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img draggable={false} key={i} src={pawFull} alt="paw print" className="rating-stars__star" />);
      } else {
        stars.push(<img draggable={false} key={i} src={pawEmpty} alt="paw print" className="rating-stars__star" />);
      }
    }
    return stars;
  };

  return <div className="rating-stars">{renderStars()}</div>;
};

export default RatingStars;
