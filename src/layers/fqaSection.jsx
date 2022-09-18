import React from "react";
import SubHeading from "../components/SubHeading";
import { Faq } from "../constants/data";

import style from "../styles/fqaSection.module.css";

export default function FqaSection() {
  return (
    <section className={`${style.faq_section} wrapper`} id="faq">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 pb-4">
            <SubHeading
              HeadingVariant="h2"
              HeadingText="Frequently Questioned Answers"
            />
          </div>
        </div>
        <div className="row pt-5">
          {Faq.map((item, index) => {
            return (
              <div className="col-sm-6 mb-4" key={index}>
                <h4>
                  <span>~</span>
                  {item.title}
                </h4>
                <p>{item.describetion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
