import { Children } from "react";
import "./BaseBadge.scss";

interface IBaseBadgeProps {
  title: string;
  children?: React.ReactNode;
}

const BaseBadge = ({ title, children }: IBaseBadgeProps) => {
  return <div className="base-badge">{children || title}</div>;
};

export default BaseBadge;
