import "./Newsletter.scss";
import catImage from "../../../assets/images/cat-nobg-1.png";
import { BaseBadge, BaseButton, NotificationModal } from "../../elements";
import { useEffect, useState } from "react";
import { isValidEmail } from "../../../utils";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setError(!isValidEmail(email));
    }
  }, [email]);

  const onSubmit = () => {
    if (isValidEmail(email)) {
      setIsModalOpen(true);
    }
    setError(true);
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
          <form
            className="newsletter__form"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onSubmit();
              }
            }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              className="newsletter__input"
            />
            {error && <p className="newsletter__error">Please enter a valid email</p>}
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
