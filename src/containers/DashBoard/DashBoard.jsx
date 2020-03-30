import React from "react";
import styles from "./DashBoard.module.scss";
import NavBar from "../../containers/NavBar";
import { Router, Redirect } from "@reach/router";
import Portfolio from "../PortfolioPage";
import AboutMe from "../AboutMePage";

const DashBoard = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <NavBar />
      </div>
      <div className={styles.routerContainer}>
        <Router>
          <Redirect noThrow from="/" to="portfolio" />
          <AboutMe path="/about-me" />
          <Portfolio path="/portfolio" />
        </Router>
      </div>
    </>
  );
};

export default DashBoard;
