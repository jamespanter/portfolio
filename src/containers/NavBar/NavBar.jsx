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
          <h1 className={styles.fadeInBck}>
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
              className={styles.fadeInBck}
              style={{ animationDelay: "0.2s" }}
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
              className={styles.fadeInBck}
              style={{ animationDelay: ".4s" }}
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
              className={styles.fadeInBck}
              style={{ animationDelay: ".6s" }}
            >
              About
            </span>
          </Link>
        </div>

        <nav className={styles.fadeInBck} style={{ animationDelay: ".8s" }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/james-panter"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={styles.fontAwesome}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jamespanter"
          >
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
