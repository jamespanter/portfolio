import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <h1>James Panter</h1>
        <p>Junior developer</p>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about-me">About Me</Link>
        <nav>
          <a target="_blank" href="https://linkedin.com/in/james-panter">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a target="_blank" href="https://github.com/jamespanter">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto: james.panter@nology.io">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
