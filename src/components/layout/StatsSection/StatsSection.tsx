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
        <ul className="stats-section__list">{statsCards}</ul>
      </div>
    </section>
  );
};

export default StatsSection;
