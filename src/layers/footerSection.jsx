import React from "react";
import styles from "../styles/footerSection.module.css";

export default function FooterSection() {
  return (
    <footer className={`${styles.footer_section} py-5`} id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <a href="#" className={styles.footer_link}>
              Register
            </a>
            <a href="#" className={styles.footer_link}>
              form
            </a>
            <a href="#" className={styles.footer_link}>
              affiliate
            </a>
            <a href="#" className={styles.footer_link}>
              fqa
            </a>
          </div>
          <div className={`${styles.footer_social} col-md-12 pt-4 text-center`}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="col-sm-12 pt-5 text-center footer-copy">
            <p className="text-light">Copyright All Rights Reserved. © 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
