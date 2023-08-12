import React from "react";
import Image from "next/image";
import { VscTriangleDown } from "react-icons/vsc";

import { ButtonPropsI } from "../interface";
import styles from "./styles.module.css";

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
// Explicitly display function displayName for debugging purposes
Button.displayName = "Button";

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

export const ProfileBtn = ({ label }: ButtonPropsI) => {
  return (
    <button className={styles.profile_btn}>
      <div className={styles.profile_image_container}>
        <Image src='/profile.svg' alt='profile picture' fill />
      </div>
      <div className={styles.profile_icon}>
        <VscTriangleDown />
      </div>
    </button>
  );
};
