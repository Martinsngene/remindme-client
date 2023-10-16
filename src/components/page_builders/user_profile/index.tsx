import React from "react";
import HomePage from "../home";
import Todos from "../todos";
import styles from "./styles.module.css";

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <HomePage isLoggedIn={true} />
      <Todos />
    </div>
  );
};

export default UserProfile;
