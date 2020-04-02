import React from "react";
import styles from "./App.module.scss";
import DashBoard from "./containers/DashBoard";

const App = () => {
  return (
    <div className={styles.background}>
      <DashBoard />
    </div>
  );
};

export default App;
