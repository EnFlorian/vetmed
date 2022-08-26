import { Link } from "react-router-dom";
import { BaseBadge } from "../../elements";
import "./Navbar.scss";
import { navigation } from "../../../data/navbar";

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
          <h1 className="navbar__logo"> VETPET </h1>
        </div>
        <nav>
          <ul className="navbar__links">{navLinks}</ul>
        </nav>
        <BaseBadge title="About Us" />
      </div>
    </section>
  );
};

export default Navbar;
