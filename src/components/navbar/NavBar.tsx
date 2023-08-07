import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { Links } from "../constants/NavBar.Schema";
import Menu from "../menu";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className='w-[100%] h-[80px] bg-white border border-black py-2 lg:py-0 px-4 lg:px-[3rem] flex flex-col lg:flex-row items-center justify-between'>
      {/* Logo */}
      <div className='logo w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center'>
        D
      </div>

      <ul className='w-[80%] xl:w-[55%] items-center justify-between hidden md:flex'>
        {/* Links from NavBar Schema mapped into buttons */}
        {Links.map((item, index) => {
          return (
            <Link key={index} href={item.route}>
              <button className='text-[#000] text-[0.75rem] xl:text-[1rem] font-[700] leading-[1.5rem]'>
                {item.link}
              </button>
            </Link>
          );
        })}
      </ul>
      {/* Open Menu Button */}
      <div className='block md:hidden'>
        <button onClick={() => setMenuState(true)}>
          <RiMenu5Fill />
        </button>
      </div>
      {/* Menu */}
      {menuState && <Menu ctrlMenu={() => setMenuState(false)} />}
    </div>
  );
};

export default NavBar;
