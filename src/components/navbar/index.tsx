import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { Links } from "../constants/NavBar.Schema";
import Menu from "../menu";
// Import css module here
import styles from "./styles.module.css";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo_container}>Daily</div>
      {/* Nav Links Container */}
      <ul className={styles.nav_links_container}>
        {Links.map((item, index) => {
          return (
            <Link key={index} href={item.route}>
              <button className={styles.nav_link}>{item.link}</button>
            </Link>
          );
        })}
      </ul>
      {/* Open Menu Button */}
      <div className='block md:hidden'>
        <button className='text-white' onClick={() => setMenuState(true)}>
          <RiMenu5Fill />
        </button>
      </div>
      {/* Menu */}
      {menuState && <Menu ctrlMenu={() => setMenuState(false)} />}
    </div>
  );
};

export default NavBar;
