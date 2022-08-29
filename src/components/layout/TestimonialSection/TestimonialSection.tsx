import { BaseBadge } from "../../elements";
import "./TestimonialSection.scss";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-section__wrapper  container-md">
        <header className="testimonial-section__header">
          <BaseBadge title="Our Services" />
          <h1 className="testimonial-section__title">What We can do for You</h1>
          <p className="testimonial-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod nisi eu nunc consectetur, eget
            consectetur nisi euismod.
          </p>
        </header>
        <main className="testimonial-section__main">
          <TestimonalCard />
        </main>
      </div>
    </section>
  );
};

export default TestimonialSection;
