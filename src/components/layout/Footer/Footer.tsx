import "./Footer.scss";
import { officeHours } from "../../../data/footer";
import pawImage from "../../../assets/logo-1.svg";

const Footer = () => {
  const officeHoursRows = officeHours.map((officeHour, index) => {
    return (
      <div className="footer__office-hours-row" key={index}>
        <p className="footer__office-hours-day">{officeHour.day}: </p>
        <p className="footer__office-hours-time">{officeHour.time}</p>
      </div>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__wrapper container-xl">
        <div className="footer__left-content">
          <div className="footer__logo-wrapper">
            <img src={pawImage} alt="logo" className="footer__logo" />
            <h1 className="footer__logo-text"> VETPET </h1>
          </div>
          <p className="footer__copyright">&copy; {new Date().getFullYear()} VETPET. All rights reserved.</p>
        </div>
        <div className="footer__right-content">
          <div className="footer__contact">
            <h1 className="footer__title">Contact Us</h1>
            <div className="footer__contact-info">
              <p className="footer__contact-info-item">0676 899 494 499</p>
              <p className="footer__contact-info-item">office@vetmed.com</p>
              <p className="footer__contact-info-item">Hauptstraße 12, Linz</p>
            </div>
          </div>
          <div className="footer__office-hours">
            <h2 className="footer__title">Office Hours</h2>
            <div className="footer__office-hours-rows">{officeHoursRows}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
