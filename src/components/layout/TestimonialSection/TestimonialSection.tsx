import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../../../data/testimonial-section";
import { BaseBadge, TestimonialCard } from "../../elements";
import "./TestimonialSection.scss";

const TestimonialSection = () => {
  const testimonialCards = testimonials
    .map((testimonial, index) => {
      return (
        <li key={index}>
          <TestimonialCard {...testimonial} />
        </li>
      );
    })
    .slice(0, 2);

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-section__wrapper  container-lg">
        <header className="testimonial-section__header">
          <BaseBadge title="Our Services" />
          <h1 className="testimonial-section__title">What We can do for You</h1>
          <p className="testimonial-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod nisi eu nunc consectetur, eget
            consectetur nisi euismod.
          </p>
        </header>
        <main className="testimonial-section__main">
          <ul className="testimonial-section__list">{testimonialCards}</ul>
        </main>
      </div>
    </section>
  );
};

export default TestimonialSection;
