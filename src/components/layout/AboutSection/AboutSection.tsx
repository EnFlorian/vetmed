import { BaseBadge } from "../../elements";
import "./AboutSection.scss";
import dogImage from "../../../assets/images/dog-nobg-1.png";

const AboutSection = () => {
  return (
    <section className="about-section container">
      <div className="about-section__image-wrapper">
        <img src={dogImage} alt="about section image" className="about-section__image" />
      </div>
      <div className="about-section__content">
        <BaseBadge title="About Us" />
        <h1 className="about-section__title">We' Will Keep Your Pets Healthy And Happy</h1>
        <p className="about-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eget consectetur consectetur,
          nisi nisi consectetur, nisi nisi consectetur, nisi nisi consectetur, nisi nisi consectetur,
        </p>
        <ul className="about-section__list"></ul>
      </div>
    </section>
  );
};

export default AboutSection;
