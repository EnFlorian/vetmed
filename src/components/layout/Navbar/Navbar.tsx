import { HighlightButton } from "../../elements";
import "./Navbar.scss";
import { navigation } from "../../../data/navbar";
import pawImage from "../../../assets/logo-1.svg";
import { NavLink } from "react-router-dom";
import MobileMenu from "../../elements/MobileMenu/MobileMenu";
import { useDispatch } from "react-redux";
import { openMobileMenu } from "../../../state/uiSlice";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const dispatch = useDispatch();

  const navLinks = navigation.map(({ name, path }, idx) => (
    <li className="navbar__link" key={idx}>
      <NavLink className="navbar__link" to={path}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <section className="navbar">
      <div className="navbar__wrapper container-xl">
        <div className="navbar__logo-wrapper">
          <img src={pawImage} alt="logo" className="navbar__logo" />
          <h1 className="navbar__logo-text"> VETPET </h1>
        </div>
        <nav className="navbar__nav">
          <ul className="navbar__links">{navLinks}</ul>
        </nav>
        <div className="navbar__button">
          <HighlightButton title="+43 676 76047132" />
        </div>
        <div className="navbar__mobile-menu-button" onClick={() => dispatch(openMobileMenu())}>
          <GiHamburgerMenu />
        </div>
      </div>
      <MobileMenu />
    </section>
  );
};

export default Navbar;
