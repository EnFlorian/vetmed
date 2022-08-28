import "./BaseButton.scss";

interface IBaseButtonProps {
  title: string;
  children?: React.ReactNode;
  type: "primary" | "secondary";
}

const BaseButton = ({ title, children, type }: IBaseButtonProps) => {
  return <button className={`base-button base-button--${type}`}>{children || title}</button>;
};

export default BaseButton;
