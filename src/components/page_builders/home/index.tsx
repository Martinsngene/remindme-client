import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import { Button } from "@/components/buttons";
import { HomePagePropsI } from "@/components/interface";

const HomePage = ({ signUpBtn, loginBtn, isLoggedIn }: HomePagePropsI) => {
  return (
    <div className={styles.container}>
      {/* Welcome Text */}
      <div className={styles.welcomeText}>
        <h1 className={styles.header}>Daily</h1>
        <p className={styles.text}>A planned day is a great day</p>
      </div>
      {/* Display Image */}
      <div className={styles.image_container}>
        <Image
          width={400}
          height={700}
          alt='Home Screen Image'
          src='/home.svg'
        />
      </div>
      {/* Buttons */}
      {isLoggedIn ? (
        <div className={styles.task_button_container}>
          <Button fill='full'>Add New Tasks</Button>
        </div>
      ) : (
        <div className={styles.button_container}>
          <Button onClick={signUpBtn}>Sign up</Button>
          <Button fill='fill' onClick={loginBtn}>
            Log in
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
