import Link from "next/link";
import React from "react";
import { footerIcons } from "../constants/Footer.Schema";

const Footer = () => {
  return (
    <div className='w-full h-[80px] border border-black py-2 lg:py-0 px-4 lg:px-[3rem] flex flex-col lg:flex-row items-center justify-between'>
      <div className='hidden xl:flex text-[0.75rem] lg:text-[1rem]  text-[#000] font-[700] items-center justify-center'>
        <span className='mr-2'>Copyright</span>
        <span>&copy;</span>
        <span className='ml-2'>2023 Martins Ngene. All Rights Reserved.</span>
      </div>
      <div className='mb-1 lg:mb-0 flex items-center justify-between text-base md:text-2xl lg:text-[2rem] w-4/5 md:w-[500px]'>
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
