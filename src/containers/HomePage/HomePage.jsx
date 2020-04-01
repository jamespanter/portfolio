import React from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={`${styles.homeContainer} ${styles.fadeInBck}`}>
        <h2>
          <span>Hello, I'm</span> James Panter.
        </h2>
      </div>
    </>
  );
};

export default HomePage;
