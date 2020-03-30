import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";

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
            <span class="fab fa-linkedin">LinkedIn</span>
          </a>
          <a target="_blank" href="https://github.com/jamespanter">
            <span class="fab fa-github-square">GitHub</span>
          </a>
          <a href="mailto: james.panter@nology.io">
            <span class="fas fa-envelope">Email</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
