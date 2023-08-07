import React from "react";
import styles from "./styles.module.css";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { GlobalPropsI } from "../interface";

const Layout = ({ children }: GlobalPropsI) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
