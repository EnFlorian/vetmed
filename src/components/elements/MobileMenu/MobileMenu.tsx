import { useDispatch } from "react-redux";
import { closeMobileMenu } from "../../../state/uiSlice";
import HighlightButton from "../HighlightButton/HighlightButton";
import { IoCloseCircleSharp } from "react-icons/io5";
import { navigation } from "./../../../data/navbar";
import { NavLink } from "react-router-dom";
import "./MobileMenu.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

const MobileMenu = () => {
  const { isMobileMenuOpen } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const renderedLinks = navigation.map(({ name, path }, idx) => (
    <li className="mobile-menu__link" key={idx}>
      <NavLink to={path}>{name}</NavLink>
    </li>
  ));

  return (
    <div className={isMobileMenuOpen ? "mobile-menu mobile-menu--show" : "mobile-menu"}>
      <div className="mobile-menu__header">
        <div className="mobile-menu__close-button" onClick={() => dispatch(closeMobileMenu())}>
          <IoCloseCircleSharp />
        </div>
      </div>
      <ul className="mobile-menu__nav">{renderedLinks}</ul>
      <HighlightButton title="+43 676 76047132" />
    </div>
  );
};

export default MobileMenu;
