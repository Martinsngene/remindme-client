import React from "react";
import { ButtonPropsI } from "../interface";
import styles from "./styles.module.css";
import Image from "next/image";

//Button
export const Button = React.forwardRef((props: ButtonPropsI, ref: any) => {
  return (
    <button
      ref={ref}
      className={
        props.fill === "fill"
          ? styles.filled
          : props.fill === "full"
          ? styles.full
          : styles.outlined
      }
      onClick={props.onClick}>
      {props.children}
    </button>
  );
});

// Sign in with Google Button
export const SignInWithGoogleBtn = ({ label }: ButtonPropsI) => {
  return (
    <button className={styles.google_btn}>
      <Image
        src='/google.svg'
        alt='google icon'
        width={32}
        height={32}
        className='mr-3'
      />
      {label}
    </button>
  );
};
