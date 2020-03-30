import React from "react";
import styles from "./Portfolio.module.scss";
import CardList from "../../components/CardList";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolio}>
        <h2>ABOUT ME</h2>
        <CardList />
      </div>
    </>
  );
};

export default Portfolio;
