/** @format */

import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import { Button, SignInWithGoogleBtn } from "../buttons";

const LogIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>Daily</div>
        <h1 className={styles.header}>Welcome back</h1>
        <p className={styles.welcome_text}>
          Welcome back! Please enter your details.
        </p>
        <div>
          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <input
            className={styles.input}
            id='email'
            placeholder='Enter your email'
            type='text'
          />
        </div>
        <div>
          <div className='mb-4'>
            <Button fill='full'>Submit</Button>
          </div>
          <SignInWithGoogleBtn label='Sign in with Google' />
        </div>
        <div className={styles.cta_container}>
          <p className={styles.cta}>Don&apos;t have an account? </p>
          <Link href='/sign_up' passHref>
            <p className={styles.signup_text}> Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
