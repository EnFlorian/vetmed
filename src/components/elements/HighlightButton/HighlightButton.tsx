import "./HighlightButton.scss";
import pawImage from "../../../assets/paw-print-4.svg";

interface IHighlightButtonProps {
  title?: string;
  children?: React.ReactNode;
  clickHandler?: () => void;
}

const HighlightButton = ({ title, children, clickHandler }: IHighlightButtonProps) => {
  return (
    <button onClick={clickHandler} className="highlight-button">
      <img src={pawImage} alt="logo" className="highlight-button__logo" />

      {children || title}
    </button>
  );
};

export default HighlightButton;
