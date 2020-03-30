import React from "react";
import styles from "./Portfolio.module.scss";
import Card from "../../components/Card";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolio}>
          <h2>PORTFOLIO</h2>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
