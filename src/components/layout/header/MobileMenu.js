import React from "react";
import {Transition} from "@headlessui/react";
import Logo from "../../../assets/images/svg/logo-colored.svg";
import {Link} from "react-router-dom";
import LinkButton from "../../elements/LinkButton";

const MenuItem = ({url, title}) => {
  return (
    <Link to={url} className="-m-3 py-3 pr-5 flex items-center justify-between">
      <span className="ml-3 text-base font-medium text-primary">{title}</span>
    </Link>
  );
};

const MobileMenu = ({isOpen, handleClose}) => {
  return (
    <Transition
      show={isOpen}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div className="absolute top-0 inset-x-0 pt-3 pb-2 px-0 transition transform origin-top-right lg:hidden z-30">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={Logo} alt="Utiva" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-primary focus:outline-none"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-6 mb-6">
                <nav className="grid gap-y-8">
                  <MenuItem url="/features" title="Features" />
                  <MenuItem url="/blog" title="Blog" />
                  <MenuItem url="/faqs" title="FAQs" />
                  <MenuItem url="/contact" title="Contact" />
                </nav>
              </div>

              <div className="py-6 relative">
                <div className="pb-6">
                  <LinkButton className="w-full" title="Get Started" url="/get-started" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default MobileMenu;
