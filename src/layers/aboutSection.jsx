import React from "react";
import { img1, img2 } from "../assets/images/index";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";
import styles from "../styles/aboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about">
      <div className={`${styles.about_section} wrapper`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
              <div className={`${styles.card_sec} card border-0`}>
                <img src={img1} alt="" className="img-fiuid" />
              </div>
            </div>
            <div className={`${styles.text_sec} col-lg-5 col-md-12`}>
              <SubHeading
                HeadingVariant="h2"
                HeadingText="We pride ourselves on marking real food from the best
                ingredients."
                ParagraphText="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus, minima rerum. Ea, ad facilis."
              />
              <Button btnClass="main_btn mt-4" btnText="lern more" />
            </div>
          </div>
        </div>

        <div className={`${styles.food_type} container`}>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
              <SubHeading
                HeadingVariant="h2"
                HeadingText="we make everything by hand with the best possible ongredients."
                ParagraphText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                impedit optio blanditiis. A facere laborum."
              />
              <ul className="list-unstyled py-3">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>
              <Button btnClass="main_btn mt-4" btnText="lern more" />
            </div>

            <div className="col-lg-7 col-md-12">
              <div className={`${styles.card_sec} card border-0`}>
                <img className="img-fluid" src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
