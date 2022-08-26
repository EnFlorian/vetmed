import { Accordion } from "../../elements";
import "./BenefitsSection.scss";

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      <Accordion
        title={"Title"}
        content={
          "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        }
      />
    </div>
  );
};

export default BenefitsSection;
