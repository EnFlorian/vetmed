import "./StatsCard.scss";

interface IStatsCardProps {
  name: string;
  value: number;
}

const StatsCard = ({ name, value }: IStatsCardProps) => {
  return (
    <div className="stats-card">
      <h1 className="stats-card__value">{value}+</h1>
      <p className="stats-card__name">{name}</p>
    </div>
  );
};

export default StatsCard;
