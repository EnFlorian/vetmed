import "./Footer.scss";
import { officeHours } from "../../../data/footer";

const Footer = () => {
  const officeHoursRows = officeHours.map((officeHour, index) => {
    return (
      <div className="footer__office-hours-row" key={index}>
        <p className="footer__office-hours__day">{officeHour.day}</p>
        <p className="footer__office-hours-time">{officeHour.time}</p>
      </div>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__left-content">
          <h1 className="footer__logo"> VETMET </h1>
        </div>
        <div className="footer__right-content">
          <div>
            <h1 className="footer__title">Contact Us</h1>
            <div className="footer__contact-info">
              <p className="footer__contact-info-item">0676 899 494 499</p>
              <p className="footer__contact-info-item">office@vetmed.com</p>
              <p className="footer__contact-info-item">Hauptstraße 12, Linz</p>
            </div>
          </div>
          <div>
            <h2 className="footer__office-hours-title">Office Hours</h2>
            <div className="footer__office-hours-rows">{officeHoursRows}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
