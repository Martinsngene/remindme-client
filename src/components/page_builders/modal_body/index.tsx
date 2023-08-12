import React from "react";

import styles from "./styles.module.css";
import { ModalPropsI } from "@/components/interface";

const ModalBody = ({ children }: ModalPropsI) => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>{children}</div>
    </div>
  );
};

export default ModalBody;
