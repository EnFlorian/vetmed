import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSection.scss";
import catImage from "../../../assets/images/section-image-3.jpg";
import dogImage from "../../../assets/images/hero-image-1.jpg";

import { BaseBadge, BaseButton, HeroCard } from "../../elements";
import { services } from "../../../data/hero-section";

const HeroSection = () => {
  const serviceCards = services.map((service, index) => {
    return (
      <li key={index}>
        <HeroCard {...service} />
      </li>
    );
  });

  return (
    <div className="hero-section" id="home">
      <Swiper
        spaceBetween={30}
        allowTouchMove={false}
        centeredSlides={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="hero-section__slider"
      >
        <SwiperSlide>
          <img draggable="false" className="hero-section__image" src={dogImage} alt="dog" />
        </SwiperSlide>
        <SwiperSlide>
          <img draggable="false" className="hero-section__image" src={catImage} alt="dog" />
        </SwiperSlide>
      </Swiper>
      <div className="hero-section__content">
        <div className="hero-section__content-inner">
          <BaseBadge title="Welcome to Vetpet!" />
          <h1 className="hero-section__title">We will keep your pet healthy and happy</h1>
          <BaseButton title="Read More" type="primary" />
        </div>
      </div>
      <ul className="hero-section__cards-list">{serviceCards}</ul>
    </div>
  );
};

export default HeroSection;
