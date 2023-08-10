import React from "react";
import styles from "./styles.module.css";
import Input from "@/components/customInput";
import { Button } from "@/components/buttons";
import { HomePagePropsI } from "@/components/interface";
import Image from "next/image";

const HomePage = ({ signUpBtn, loginBtn }: HomePagePropsI) => {
  return (
    <div className={styles.container}>
      {/* Welcome Text */}
      <div className={styles.welcomeText}>
        <h1 className={styles.header}>Daily</h1>
        <p className={styles.text}>A planned day is a great day</p>
      </div>
      {/* Form for Log in/ Sign up */}
      {/* <div className='w-[360px]'>
        <div className='mb-[0.5rem]'>
          <Input type='text' placeHolder='Enter your email' />
        </div>
        <Input type='text' placeHolder='Enter your password' />
      </div> */}
      <Image width={400} height={800} alt='' src='/home.svg' />
      {/* Buttons */}
      <div className={styles.button_container}>
        <Button onClick={signUpBtn}>Sign up</Button>{" "}
        <Button fill='fill' onClick={loginBtn}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
