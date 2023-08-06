import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { Button, MenuButton } from "../button";
import { Links } from "../constants/NavBar.Schema";
import Menu from "../menu";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className='w-[100%] h-[80px] bg-white'>
      {/* Logo */}
      <div className='logo w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center'>
        <Image src='/logo.png' width={50} height={50} alt='' />
      </div>

      <ul className='w-[80%] xl:w-[55%] items-center justify-between hidden md:flex'>
        {/* Links from NavBar Schema mapped into buttons */}
        {Links.map((item, index) => {
          return (
            <Link key={index} href={item.route}>
              <Button className='text-[#000] text-[0.75rem] xl:text-[1rem] font-[700] leading-[1.5rem'>
                {item.link}
              </Button>
            </Link>
          );
        })}
      </ul>
      {/* Open Menu Button */}
      <div className='block md:hidden'>
        <MenuButton onClick={() => setMenuState(true)}>
          <RiMenu5Fill />
        </MenuButton>
      </div>
      {/* Menu */}
      {menuState && <Menu ctrlMenu={() => setMenuState(false)} />}
    </div>
  );
};

export default NavBar;
