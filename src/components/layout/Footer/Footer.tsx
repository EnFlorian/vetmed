import "./Footer.scss";
import { officeHours } from "../../../data/footer";
import catImage1 from "../../../assets/images/cat-1.jpg";
import catImage2 from "../../../assets/images/cat-2.jpg";
import catImage3 from "../../../assets/images/cat-3.jpg";
import catImage4 from "../../../assets/images/cat-4.jpg";
import dogImage1 from "../../../assets/images/dog-1.jpg";
import dogImage2 from "../../../assets/images/dog-2.jpg";
import dogImage3 from "../../../assets/images/dog-3.jpg";
import dogImage4 from "../../../assets/images/dog-4.jpg";

const Footer = () => {
  const gallery = [catImage1, catImage2, catImage3, catImage4, dogImage1, dogImage2, dogImage3, dogImage4];

  const images = gallery.map((image, index) => (
    <li key={index} className="footer__image">
      <img src={image} alt="footer image" />
    </li>
  ));

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__left-content">
          <div className="footer__about">
            <h1 className="footer__title">About Us</h1>
            <ul className="footer__list"></ul>
          </div>
        </div>
        <div className="footer__right-content">
          <div className="footer__gallery">
            <h1 className="footer__title">Our Images</h1>
            <ul className="footer__images">{images}</ul>
          </div>
          <div className="footer__hours"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
