import "./BaseButton.scss";

interface IBaseButtonProps {
  title: string;
  children?: React.ReactNode;
  clickHandler?: () => void;
  type: "primary" | "secondary";
}

const BaseButton = ({ title, children, type, clickHandler }: IBaseButtonProps) => {
  return (
    <button onClick={clickHandler} className={`base-button base-button--${type}`}>
      {children || title}
    </button>
  );
};

export default BaseButton;
