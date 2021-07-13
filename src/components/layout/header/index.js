import React, {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../../assets/images/svg/routeliftlogo_white.svg";
import LinkButton from "../../elements/LinkButton";
import MobileMenu from "./MobileMenu";

const NavItem = ({url, title}) => {
  return (
    <div className="md:block ">
      <Link
        to="/"
        className="ml-10 whitespace-nowrap text-base font-medium text-white hover:text-secondary"
      >
        {title}
      </Link>
    </div>
  );
};

const DropdownNavItem = () => {
  return (
    <div className="relative">
      <button
        type="button"
        // onClick={handleOpen}
        className=" group inline-flex items-center text-base font-medium text-white hover:text-secondary focus:outline-none"
        aria-expanded="false"
      >
        <span>Products</span>

        <svg
          className="ml-2 h-2 w-3 group-hover:text-secondary"
          viewBox="0 0 6 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.56574 0.34375H0.434487C0.280581 0.34375 0.194643 0.50625 0.289956 0.617188L2.85558 3.59219C2.92902 3.67734 3.07042 3.67734 3.14464 3.59219L5.71027 0.617188C5.80558 0.50625 5.71964 0.34375 5.56574 0.34375Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="relative bg-transparent">
      <div className="max-w-full mx-auto">
        <div className="pt-5 pb-8 flex justify-between items-center lg:justify-start md:space-x-10">
          <div className="sm:mt-3 flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">RouteLift</span>
              <img className="w-32 md:w-full" src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="-mr-2 -my-2 flex items-center lg:hidden">
            <button
              type="button"
              className="p-2 inline-flex items-center justify-center text-white focus:outline-none "
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <DropdownNavItem />

            <NavItem url="/features" title="Features" />
            <NavItem url="/blog" title="Blog" />
            <NavItem url="/faqs" title="FAQs" />
            <NavItem url="/contact" title="Contact" />

            <div className="md:block ml-14">
              <LinkButton title="Get Started" url="/get-started" />
            </div>
          </nav>
        </div>
      </div>

      {/* <!--
      Mobile menu, show/hide based on mobile menu state.
    --> */}
      <MobileMenu isOpen={isOpen} handleClose={handleCloseMenu} />
    </header>
  );
};

export default Header;
