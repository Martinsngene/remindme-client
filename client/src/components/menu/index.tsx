import Link from "next/link";
import { BsXLg } from "react-icons/bs";

import { Links } from "../constants/NavBar.Schema";
import { MenuPropsI } from "../interface";

const Menu = ({ ctrlMenu }: MenuPropsI) => {
  return (
    <div className='fixed flex items-start justify-center w-full h-[100vh] top-0 right-0 left-0 bottom-0 bg-[#2dc653]'>
      {/* Close Menu Button */}
      <div className='absolute top-[1.5%] right-[8%]'>
        <button className='text-white text-[2rem]' onClick={ctrlMenu}>
          <BsXLg />
        </button>
      </div>
      {/* Navigation Links */}
      <ul className='flex flex-col items-center justify-around h-[50%] pt-[10rem]'>
        {Links.map((item, index) => {
          return (
            <Link className='text-white' key={index} href={item.route} passHref>
              <button>{item.link}</button>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
