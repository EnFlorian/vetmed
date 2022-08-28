import { Link } from "react-router-dom";
import { BaseButton } from "../../elements";
import "./Navbar.scss";
import { navigation } from "../../../data/navbar";
import pawImage from "../../../assets/paw-print-1.svg";

const Navbar = () => {
  const navLinks = navigation.map(({ name, path }, idx) => (
    <li key={idx}>
      <Link to={path}>{name}</Link>
    </li>
  ));

  return (
    <section className="navbar">
      <div className="navbar__wrapper container">
        <div className="navbar__logo-wrapper">
          <img src={pawImage} alt="logo" className="navbar__logo" />
          <h1 className="navbar__logo-text"> VETPET </h1>
        </div>
        <nav>
          <ul className="navbar__links">{navLinks}</ul>
        </nav>
        <BaseButton title="Contact Us" type="primary" />
      </div>
    </section>
  );
};

export default Navbar;
