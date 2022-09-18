import React from "react";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";
import styles from "../styles/bookNowSection.module.css";

export default function BookNowSection() {
  return (
    <section className={`${styles.booknow_section} wrapper`} id="booknow">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-9 col-md-12">
            <SubHeading
              HeadingVariant="h2"
              HeadingText="baked fresh daily by bakers with passion."
            />
          </div>
          <div className="col-lg-3 col-md-12 mt-lg-0 mt-4">
            <Button btnClass="main_btn" btnText="learn more" />
          </div>
        </div>
      </div>
    </section>
  );
}
