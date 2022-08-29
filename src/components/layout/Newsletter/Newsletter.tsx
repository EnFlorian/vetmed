import "./Newsletter.scss";
import catImage from "../../../assets/images/cat-nobg-1.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        <div className="newsletter__left-content">
          <div className="newsletter__image-wrapper">
            <img src={catImage} alt="newsletter image" className="newsletter__image" />
          </div>
        </div>
        <div className="newsletter__right-content"></div>
      </div>
    </section>
  );
};

export default Newsletter;
