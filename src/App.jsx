import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import DashBoard from "./containers/DashBoard";

const App = () => {
  return (
    <>
      <div className={styles.dashBoard}>
        <DashBoard />
      </div>
    </>
  );
};

export default App;
