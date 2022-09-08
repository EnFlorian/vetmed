import "./StatsSection.scss";
import { stats } from "../../../data/stats-section";
import { StatsCard } from "../../elements";

const StatsSection = () => {
  const statsCards = stats.map(({ name, value }, idx) => (
    <li key={idx}>
      <StatsCard name={name} value={value} />
    </li>
  ));

  return (
    <section className="stats-section" id="stats">
      <div className="stats-section__wrapper container-lg">
        <div className="stats-section__left-content">
          <h1 className="stats-section__title">We' Will Keep Your Pets Healthy And Happy</h1>
          <p className="stats-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eget consectetur consectetur,
          </p>
        </div>
        <div className="stats-section__right-content">
          <ul className="stats-section__list">{statsCards}</ul>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
