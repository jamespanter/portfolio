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
            onClick={() => {
              changeCurrentPage("Home");
              toggleNav(!navShown);
            }}
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
            onClick={() => {
              changeCurrentPage("Portfolio");
              toggleNav(!navShown);
            }}
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
            onClick={() => {
              changeCurrentPage("About");
              toggleNav(!navShown);
            }}
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
                currentPage === "Home"
                  ? { color: "rgb(223, 223, 95)", animationDelay: "0.2s" }
                  : { animationDelay: "0.2s" }
              }
              className={styles.fadeInBck}
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
                  ? { color: "rgb(223, 223, 95)", animationDelay: "0.4s" }
                  : { animationDelay: "0.3s" }
              }
              className={styles.fadeInBck}
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
                currentPage === "About"
                  ? { color: "rgb(223, 223, 95)", animationDelay: "0.6s" }
                  : { animationDelay: "0.4s" }
              }
              className={styles.fadeInBck}
            >
              About
            </span>
          </Link>
        </div>

        <nav className={styles.fadeInBck} style={{ animationDelay: "0.5s" }}>
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
          <a href="mailto: james.panter@blueyonder.co.uk">
            <FontAwesomeIcon icon={faEnvelope} className={styles.fontAwesome} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
