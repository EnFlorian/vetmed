import {
  AboutSection,
  BenefitsSection,
  HeroSection,
  Newsletter,
  ServiceSection,
  StatsSection,
  TestimonialSection,
} from "../../components/layout";
import "./Home.scss";

const Home = () => {
  return (
    <article className="home">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <StatsSection />
      <BenefitsSection />
      <TestimonialSection />
      <Newsletter />
    </article>
  );
};

export default Home;
