import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const [navShown, toggleNav] = useState(false);
  const [currentPage, changeCurrentPage] = useState("Home");

  return (
    <div className={styles.navContainer}>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.burgerMenuIcon}
        onClick={() => toggleNav(!navShown)}
      />

      {navShown ? (
        <div className={`${styles.burgerMenuDropDown} ${styles.slideInTopNav}`}>
          <Link
            to="/home"
            className={styles.page}
            onClick={() => toggleNav(!navShown)}
          >
            <span>Home</span>
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
            <span>About</span>
          </Link>
        </div>
      ) : null}

      <div className={styles.leftPanel}>
        <div>
          <h1>
            James <br></br> Panter
          </h1>
        </div>

        <div className={styles.pages}>
          <Link
            to="/home"
            className={styles.page}
            onClick={() => changeCurrentPage("Home")}
          >
            <span
              style={
                currentPage === "Home" ? { color: "rgb(223, 223, 95)" } : null
              }
            >
              Home
            </span>
          </Link>

          <Link
            to="/portfolio"
            className={styles.page}
            onClick={() => changeCurrentPage("Portfolio")}
          >
            <span
              style={
                currentPage === "Portfolio"
                  ? { color: "rgb(223, 223, 95)" }
                  : null
              }
            >
              Portfolio
            </span>
          </Link>

          <Link
            to="/about"
            className={styles.page}
            onClick={() => changeCurrentPage("About")}
          >
            <span
              style={
                currentPage === "About" ? { color: "rgb(223, 223, 95)" } : null
              }
            >
              About
            </span>
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
