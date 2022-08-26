import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./HeroSection.scss";
import catImage from "../../../assets/images/cat-1.jpg";
import dogImage from "../../../assets/images/dog-1.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="hero-section__slider"
      >
        <SwiperSlide>
          <img className="hero-section__image" src={dogImage} alt="dog" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="hero-section__image" src={catImage} alt="dog" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
