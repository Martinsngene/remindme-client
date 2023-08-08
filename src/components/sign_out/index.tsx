/** @format */

import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const SignOut = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>D</div>
        <h1 className={styles.header}>You&apos;re now logged out</h1>
        <p className={styles.welcome_text}>We hope you enjoyed our services.</p>

        <div>
          <Link href='/sign_in' passHref>
            Hi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
