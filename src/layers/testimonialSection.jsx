import React, { useState } from "react";

import { Carousel, CarouselItem } from "react-bootstrap";

import SubHeading from "../components/SubHeading";

import { Testimonial } from "../constants/data";
import "../styles/testimonialSection.css";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="testimonial-section wrapper" id="testimonial">
      <div className="container text-center">
        <div className="row pb-4">
          <SubHeading HeadingVariant="h2" HeadingText="Testimonial" />
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-10 offset-lg-1">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {Testimonial.map((item, index) => {
                return (
                  <CarouselItem key={index}>
                    <img
                      className="d-block w-100"
                      src={item.img}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <p>{item.quote}</p>
                      <h5>{item.label}</h5>
                    </Carousel.Caption>
                  </CarouselItem>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
