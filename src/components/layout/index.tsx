import React from "react";
import { Roboto } from "next/font/google";

import styles from "./styles.module.css";
import NavBar from "../navbar";
import Footer from "../footer";
import { GlobalPropsI } from "../interface";

// Font for application
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Layout = ({ children }: GlobalPropsI) => {
  return (
    <div className={`${styles.container} ${roboto.className}`}>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
