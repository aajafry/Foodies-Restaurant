import React from "react";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";
import styles from "../styles/newsletterSection.module.css";

export default function NewsletterSection() {
  return (
    <section className="newsletter-section wrapper" id="newsletter">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12 bp-4">
            <SubHeading
              HeadingVariant="h2"
              HeadingText="hurry up subscribe our newsletter and get 23% off."
              ParagraphText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              delectus quidem atque recusandae nesciunt porro."
            />
          </div>
        </div>

        <form action="" className={styles.newsletter}>
          <div className="row">
            <div className="col-md-8 col-12">
              <input
                type="email"
                className={`${styles.form_control} form-control`}
                name="email"
                placeholder="email address here"
              />
            </div>
            <div className="col-md-4 col-12">
              <Button
                btnClass="main_btn"
                btnText="subscribe"
                btnType="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
