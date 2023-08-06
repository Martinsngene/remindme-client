import React from "react";
import styles from "./styles.module.css";
import NavBar from "../navigation/NavBar";

const Layout = () => {
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
};

export default Layout;
