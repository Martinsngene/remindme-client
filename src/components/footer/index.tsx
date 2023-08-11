import Link from "next/link";
import React from "react";
import { footerIcons } from "../constants/Footer.Schema";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column_one}>
        <p>Copyright &copy; 2023 Martins Ngene. All Rights Reserved.</p>
      </div>
      <div className={styles.column_two}>
        {footerIcons.map((icon, index) => {
          return (
            <div className='cursor-pointer' key={index}>
              <Link href={icon.link} passHref={true}>
                <div className={styles.link} title={icon.name}>
                  {icon.icon}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
