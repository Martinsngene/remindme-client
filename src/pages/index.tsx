import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/buttons";
import Input from "@/components/customInput";
import Modal from "@/components/modal";
import LogIn from "@/components/log_in";
import { useState } from "react";
import SignUp from "@/components/sign_up";

// Font for application
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  // State management for forms
  const [displayModal, setDisplayModal] = useState({
    open: false,
    form: "",
  });

  // Function to handle form display state
  const showModal = (open: boolean, formType: string) => {
    setDisplayModal({
      open: open,
      form: formType,
    });
  };

  return (
    <main className={roboto.className}>
      {/* Display form modal */}
      {displayModal.open ? (
        <Modal onClick={() => showModal(false, "close")}>
          {displayModal.form === "signin" ? <LogIn /> : <SignUp />}
        </Modal>
      ) : (
        ""
      )}
      <div className={styles.container}>
        {/* Welcome Text */}
        <div className={styles.welcomeText}>
          <h1 className={styles.header}>Daily</h1>
          <p className={styles.text}>A planned day is a great day</p>
        </div>
        {/* Form for Log in/ Sign up */}
        <div className='w-[360px]'>
          <div className='mb-[0.5rem]'>
            <Input type='text' placeHolder='Enter your email' />
          </div>
          <Input type='text' placeHolder='Enter your password' />
        </div>
        {/* Buttons */}
        <div className={styles.button_container}>
          <Button onClick={() => showModal(true, "signup")}>Sign up</Button>{" "}
          <Button fill='fill' onClick={() => showModal(true, "signin")}>
            Log in
          </Button>
        </div>
      </div>
    </main>
  );
}
