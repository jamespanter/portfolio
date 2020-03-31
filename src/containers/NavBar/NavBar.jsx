import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const [navShown, toggleNav] = useState(false);

  return (
    <div className={styles.navContainer}>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.burgerMenuIcon}
        onClick={() => toggleNav(!navShown)}
      />

      {navShown ? (
        <div className={`${styles.burgerMenuDropDown} ${styles.slideInTopTwo}`}>
          <Link
            to="/home"
            className={styles.page}
            onClick={() => toggleNav(!navShown)}
          >
            <span>Welcome</span>
          </Link>
          <Link
            to="/portfolio"
            className={styles.page}
            onClick={() => toggleNav(!navShown)}
          >
            <span>Portfolio</span>
          </Link>
          <Link
            to="/about-me"
            className={styles.page}
            onClick={() => toggleNav(!navShown)}
          >
            <span>About Me</span>
          </Link>
        </div>
      ) : null}

      <div className={styles.leftPanel}>
        <div>
          <h1>
            James <br></br> Panter
          </h1>
          <p>Software developer</p>
        </div>

        <hr></hr>

        <div className={styles.pages}>
          <Link to="/home" className={styles.page}>
            <span>Welcome</span>
          </Link>

          <Link to="/portfolio" className={styles.page}>
            <span>Portfolio</span>
          </Link>

          <Link to="/about-me" className={styles.page}>
            <span>About Me</span>
          </Link>
        </div>

        <hr></hr>

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
