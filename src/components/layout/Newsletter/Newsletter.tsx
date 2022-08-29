import "./Newsletter.scss";
import catImage from "../../../assets/images/cat-nobg-1.png";
import { BaseBadge, BaseButton } from "../../elements";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <section className="newsletter">
      <div className="newsletter__wrapper container-lg">
        <div className="newsletter__left-content">
          <div className="newsletter__image-wrapper">
            <img src={catImage} alt="newsletter image" className="newsletter__image" />
          </div>
        </div>
        <div className="newsletter__right-content">
          <BaseBadge title="Newsletter" />
          <h1 className="newsletter__title">Join Our Newsletter</h1>
          <form className="newsletter__form">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              className="newsletter__input"
            />
          </form>
          <BaseButton title="Subscribe" clickHandler={onSubmit} type="primary" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
