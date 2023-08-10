import Modal from "@/components/modal";
import LogIn from "@/components/log_in";
import { useState } from "react";
import SignUp from "@/components/sign_up";
import HomePage from "@/components/page_builders/home";
import Layout from "@/components/layout";

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
    <Layout>
      {/* Display form modal */}
      {displayModal.open ? (
        <Modal onClick={() => showModal(false, "close")}>
          {displayModal.form === "signin" ? <LogIn /> : <SignUp />}
        </Modal>
      ) : (
        ""
      )}
      <HomePage
        signUpBtn={() => showModal(true, "signup")}
        loginBtn={() => showModal(true, "signin")}
      />
    </Layout>
  );
}
