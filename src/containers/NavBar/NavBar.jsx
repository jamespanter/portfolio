import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.leftPanel}>
        <div>
          <h1>
            JAMES <br></br> PANTER
          </h1>
          <p>Junior developer</p>
        </div>
        <div className={styles.pages}>
          <Link to="/portfolio" className={styles.page}>
            <span>Portfolio</span>
          </Link>
          <Link to="/about-me" className={styles.page}>
            <span>About Me</span>
          </Link>
        </div>
        <nav>
          <a target="_blank" href="https://linkedin.com/in/james-panter">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={styles.fontAwesome}
            />
          </a>
          <a target="_blank" href="https://github.com/jamespanter">
            <FontAwesomeIcon icon={faGithub} className={styles.fontAwesome} />
          </a>
          <a href="mailto: james.panter@nology.io">
            <FontAwesomeIcon icon={faEnvelope} className={styles.fontAwesome} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
