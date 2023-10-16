import { useState } from "react";

import Modal from "@/components/modal";
import LogIn from "@/components/log_in";
import SignUp from "@/components/sign_up";
import HomePage from "@/components/page_builders/home";
import Layout from "@/components/layout";
import ModalBody from "@/components/page_builders/modal_body";

export default function Home() {
  const [addId, setAddId] = useState<any>();

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

  let fireBaseArr = [
    { name: "John" },
    { name: "Peter" },
    { name: "Jane" },
    { name: "Paul" },
  ];

  // Step 1
  let _id = ["001", "002", "003", "004"];

  let person = { name: "John Doe", place: "Lagos", age: "56" };
  // Create a new object with a spread operator and add the id value
  let newPerson = { id: _id, ...person };
  // console.log(person)
  // console.log(newPerson)

  const newArray = fireBaseArr.map((item: any) => {
    return {
      ...item,
      _id: "001", //Add your id
    };
  });

  console.log(newArray);

  return (
    <Layout>
      {/* Display form modal */}
      {displayModal.open ? (
        <Modal onClick={() => showModal(false, "close")}>
          <ModalBody>
            {displayModal.form === "signin" ? <LogIn /> : <SignUp />}
          </ModalBody>
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
