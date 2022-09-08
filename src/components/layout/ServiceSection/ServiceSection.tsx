import { BaseBadge, ServiceCard } from "../../elements";
import "./ServiceSection.scss";
import { services } from "../../../data/service-section";

const ServiceSection = () => {
  const serviceCards = services.map((service, index) => {
    return (
      <li key={index}>
        <ServiceCard {...service} />
      </li>
    );
  });

  return (
    <section className="service-section" id="services">
      <div className="service-section__wrapper  container-md">
        <header className="service-section__header">
          <BaseBadge title="Our Services" />
          <h1 className="service-section__title">What We can do for You</h1>
          <p className="service-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod nisi eu nunc consectetur, eget
            consectetur nisi euismod.
          </p>
        </header>
        <main className="service-section__main">
          <ul className="service-section__list">{serviceCards}</ul>
        </main>
      </div>
    </section>
  );
};

export default ServiceSection;
