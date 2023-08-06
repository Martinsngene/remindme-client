import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/buttons";
import Input from "@/components/customInput";
import Modal from "@/components/modal";
import SignIn from "@/components/sign_in";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={roboto.className}>
      <Modal>
        <SignIn />
      </Modal>
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
          <Button>Sign up</Button> <Button fill='fill'>Log in</Button>
        </div>
      </div>
    </main>
  );
}
