import React from "react";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";

import { ExploreFood } from "../constants/data";
import style from "../styles/exploreFoodSection.module.css";

export default function ExploreFoodSection() {
  return (
    <section className={`${style.explore_food} wrapper`} id="explore-food">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-content text-center">
              <SubHeading
                HeadingVariant="h2"
                HeadingText="explore our food"
                ParagraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eaque, veniam sunt eos voluptas, explicabo molestiae
                laborum suscipit voluptates hic tempore voluptatibus, ducimus
                quis facere repellendus! Fugiat asperiores tempora ad iusto eius
                repellat ipsa doloribus repudiandae enim consectetur, culpa,
                veritatis commodi hic deleniti distinctio molestiae quis debitis
                iste labore architecto."
              />
            </div>
          </div>
        </div>

        <div className="row pt-5">
          {ExploreFood.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-6" key={index}>
                <div className={`${style.card_sec} card`}>
                  <img className="img-fluid" src={item.img} alt="" />
                  <h4>{item.name}</h4>
                  <p>{item.serviceTime}</p>
                  <span>
                    {item.prsprice} <del>{item.pevprice}</del>
                  </span>
                  <Button btnClass="main_btn mt-4" btnText="order now" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
