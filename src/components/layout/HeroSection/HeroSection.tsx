import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSection.scss";
import catImage from "../../../assets/images/hero-image-1.jpg";
import dogImage from "../../../assets/images/hero-image-2.jpg";
import { BaseBadge, BaseButton } from "../../elements";

const HeroSection = () => {
  return (
    <div className="hero-section">
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
    </div>
  );
};

export default HeroSection;
