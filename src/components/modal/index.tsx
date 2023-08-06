/** @format */

import React from "react";

import styles from "./styles.module.css";
import { ModalPropsI } from "../interface";
import Image from "next/image";

const Modal = ({ children }: ModalPropsI) => {
  return (
    <div className={styles.modal_container}>
      <button>
        <Image
          src='/close.svg'
          alt='Cancel Action button'
          width={25}
          height={25}
        />
      </button>
      {children}
    </div>
  );
};

export default Modal;
