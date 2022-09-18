import React from "react";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";
import styles from "../styles/bannerSection.module.css";


export default function BannerSection() {
  return (
    <section id="home">
      <div className={`${styles.top_banner} container-fluid px-0`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <SubHeading
                HeadingVariant="h1"
                HeadingText="good food choices are good invesment."
                ParagraphText="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s"
              />
            </div>
            <div className="mt-4">
              <Button btnText="Order Now" btnClass="main_btn" />
              <Button
                btnText="Order Now"
                btnClass="white_btn ms-lg-4 mt-lg-0 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
