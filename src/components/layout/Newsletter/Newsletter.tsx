import "./Newsletter.scss";
import catImage from "../../../assets/images/cat-nobg-1.png";
import { BaseBadge, BaseButton, NotificationModal } from "../../elements";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="newsletter" id="newsletter">
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
      {isModalOpen && (
        <NotificationModal
          title="Success"
          description="You have successfully subscribed to our newsletter"
          closeModalFunc={setIsModalOpen}
          isOpen={isModalOpen}
        />
      )}
    </section>
  );
};

export default Newsletter;
