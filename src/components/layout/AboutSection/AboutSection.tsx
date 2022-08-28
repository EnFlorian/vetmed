import { BaseBadge } from "../../elements";
import "./AboutSection.scss";
import dogImage from "../../../assets/images/dog-nobg-1.png";
import { BsCheckSquareFill } from "react-icons/bs";

const AboutSection = () => {
  return (
    <section className="about-section container-lg">
      <div className="about-section__left-content">
        <div className="about-section__image-wrapper">
          <img src={dogImage} alt="dog" className="about-section__image" />
        </div>
      </div>
      <div className="about-section__right-content">
        <BaseBadge title="About Us" />
        <h1 className="about-section__title">We' Will Keep Your Pets Healthy And Happy</h1>
        <p className="about-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eget consectetur consectetur,
          nisi nisi consectetur, nisi nisi consectetur, nisi nisi consectetur, nisi nisi consectetur,
        </p>
        <ul className="about-section__list">
          <li className="about-section__item">
            <BsCheckSquareFill className="about-section__icon" />
            <p className="about-section__text">Experienced Personal</p>
          </li>
          <li className="about-section__item">
            <BsCheckSquareFill className="about-section__icon" />
            <p className="about-section__text">24/7 Emergency Service</p>
          </li>
          <li className="about-section__item">
            <BsCheckSquareFill className="about-section__icon" />
            <p className="about-section__text">Diet and Health Care</p>
          </li>
          <li className="about-section__item">
            <BsCheckSquareFill className="about-section__icon" />
            <p className="about-section__text">Certified Groomers</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
