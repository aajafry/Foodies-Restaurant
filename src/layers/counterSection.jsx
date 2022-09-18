import React from "react";
import CountUp from "react-countup";
import styles from "../styles/counterSection.module.css";

export default function CounterSection() {
  return (
    <section className={styles.counter_section} id="counter">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
            <h2>
              <CountUp
                start={0}
                end={1032}
                duration={5}
                separator=" "
                suffix="+"
              />
            </h2>
            <p>saving</p>
          </div>
          <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
            <h2>
              <CountUp
                start={100}
                end={3500}
                duration={4.5}
                separator=" "
                suffix="+"
              />
            </h2>
            <p>photo</p>
          </div>
          <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
            <h2>
              <CountUp
                start={500}
                end={3200}
                duration={4}
                separator=" "
                suffix="+"
              />
            </h2>
            <p>rockets</p>
          </div>
          <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
            <h2>
              <CountUp
                start={300}
                end={3000}
                duration={3.4}
                separator=" "
                suffix="+"
              />
            </h2>
            <p>globes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
