import Logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="container m-auto px-2.5 md:p-0 md:py-4 flex justify-between items-center font-plus-jakarta-sun font-Arial sticky top-0 bg-white">
      <div className="md:hidden">
        <RxHamburgerMenu className="text-3xl" />
      </div>
      <div className="md:hidden flex justify-center font-bold items-center m-auto gap-1">
        <p className="px-2 py-1.5 mobile-brand-icon text-[12px] rounded-md text-white font-bold">
          DS
        </p>
        <p className="text-xl">
          Dev<span className=" brand-text">Stack</span>
        </p>
      </div>
      <div className="md:block hidden">
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul className="hidden flex justify-center items-center gap-4  md:flex">
          <li className="text-[#db2777] jakarta-font">Home </li>
          <li>Technologies </li>
          <li>Projects </li>
          <li>About </li>
          <li>Contact </li>
        </ul>
      </div>
      <div className="flex gap-1 md:gap-4">
        <button className="text-[9px] md:text-[16px]">Sign In</button>
        <button className="text-[9px] md:text-[16px] font-bold md:font-normal px-2 py-1 md:px-4 text-white bg-fuchsia-600 md:btn md:btn-secondary rounded-4xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
