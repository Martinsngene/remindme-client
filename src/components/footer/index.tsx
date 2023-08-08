import Link from "next/link";
import React from "react";
import { footerIcons } from "../constants/Footer.Schema";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column_one}>
        <span className='mr-2'>Copyright</span>
        <span>&copy;</span>
        <span className='ml-2'>2023 Martins Ngene. All Rights Reserved.</span>
      </div>
      <div className={styles.column_two}>
        {footerIcons.map((icon, index) => {
          return (
            <div className='cursor-pointer' key={index}>
              <Link href={icon.link} passHref={true}>
                <span title={icon.name}>{icon.icon}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
