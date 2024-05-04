import { useState } from "react";
import logo from "../assets/Movie-logo-text.svg";
import styles from "./style"
import {navLinks, NavLink} from "../constants/constants.ts"

interface NavLink {
  id: string,
  title: string
}
const NavBar = () => {
  return (
    <>
      <nav className="w-full felx py-6 justify-between items-center navbar">
          <img src={logo} alt="moviewise" className="w-[124px] h-[32px]" />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-manrope cursor-pointer text-white flex px-5 justify-between`}>
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
