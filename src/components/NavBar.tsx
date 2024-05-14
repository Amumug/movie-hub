import { useState } from "react";
import logo from "../assets/Movie-logo-text.svg";
import styles from "./style"
import {navLinks} from "../constants/constants.ts"

interface NavLink {
  id: string,
  title: string
}
const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full py-6 navbar">
          <img src={logo} alt="moviewise" className="w-[124px] h-[32px]" />
          <ul className="items-center justify-end flex-1 hidden list-none sm:flex"> 
            {navLinks.map((nav, index) => (
				<li key={nav.id} className={`font-["Manrope", "sans-serif"] font-normal cursor-pointer text-[16px] text-white mr-10`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            )) }
          </ul>
      </nav>
    </>
  );
};

export default NavBar;


