import { useState } from "react";
import "./Accordion.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface IAccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={toggle}>
        <div className="accordion__icon-wrapper">
          <div className="accordion__icon">{isOpen ? <FaMinus /> : <FaPlus />}</div>
        </div>
        <h3 className="accordion__title">{title}</h3>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          exit={{ height: 0 }}
          className="accordion__content"
        >
          <p className="accordion__text">{content}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
