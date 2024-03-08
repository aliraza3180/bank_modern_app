import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { headContentAnimationUp } from "../utils/motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <AnimatePresence>
      <motion.header {...headContentAnimationUp}>
        <nav className="w-full py-6 flex justify-between items-center navbar">
          <img src={logo} alt="hoobank" className="w-32 h-8" />
          <ul className="list-none hidden sm:flex flex-1 justify-end items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal font-poppins text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-7 h-7 object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-center">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-normal font-poppins text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        ;
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
