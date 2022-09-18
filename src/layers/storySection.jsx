import React from "react";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";
import styles from "../styles/storySection.module.css";

export default function StorySection() {
  return (
    <section className={styles.story_section} id="story">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-content text-center">
              <SubHeading
                HeadingVariant="h2"
                HeadingText="when a mans stomatch is full it makes no difference whether he
                is rich or poor."
                ParagraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit quo, corporis nisi eveniet similique dignissimos
                pariatur ab maxime totam eligendi iste alias quod corrupti.
                Alias vero repellat iure. Animi, nulla."
              />
              <Button btnClass="main_btn mt-3" btnText="read more" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
