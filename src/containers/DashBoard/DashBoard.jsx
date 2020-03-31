import React from "react";
import styles from "./DashBoard.module.scss";
import NavBar from "../../containers/NavBar";
import { Router, Redirect } from "@reach/router";
import Portfolio from "../PortfolioPage";
import AboutMe from "../AboutMePage";
import Home from "../HomePage";

const DashBoard = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <NavBar />
      </div>
      <div className={styles.routerContainer}>
        <Router>
          <Redirect noThrow from="/" to="home" />
          <Home path="/home" />
          <Portfolio path="/portfolio" />
          <AboutMe path="/about-me" />
        </Router>
      </div>
    </>
  );
};

export default DashBoard;
