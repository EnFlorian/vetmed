import { Accordion, BaseBadge, ImageGallery } from "../../elements";
import "./BenefitsSection.scss";
import { benefits } from "../../../data/benefits-section";
import catImage from "../../../assets/images/cat-nobg-2.png";
import { images } from "../../../data/image-section";

const BenefitsSection = () => {
  const benefitsAccordions = benefits
    .map((benefit, index) => {
      return (
        <li key={index}>
          <Accordion {...benefit} />
        </li>
      );
    })
    .reverse();

  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-section__wrapper container-md">
        <div className="benefits-section__left-content">
          <BaseBadge title="Our Benefits" />
          <h1 className="benefits-section__title">Why You should choose our Clinic</h1>
          <ul className="benefits-section__list">{benefitsAccordions}</ul>
        </div>
        <div className="benefits-section__right-content">
          <div className="benefits-section__image-wrapper">
            <img src={catImage} alt="cat" className="benefits-section__image" />
          </div>
        </div>
      </div>
      <div className="benefits-section__gallery container-xl">
        <ImageGallery images={images} />
      </div>
    </section>
  );
};

export default BenefitsSection;
