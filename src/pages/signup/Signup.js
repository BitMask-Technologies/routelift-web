import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/svg/logo-colored.svg";
import Button from "../../components/elements/Button";
import InputGroup from "../../components/elements/InputGroup";
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/">
            <img className="mx-auto h-12 w-auto" src={Logo} alt="RouteLift" />
          </Link>
          <h2 className="mt-6 text-center text-2xl lg:text-3xl font-semibold text-primary">
            We’re launching very soon!
          </h2>
          <p className="mt-2 text-center text-sm md:text-base text-gray-600">
            Register with us now and get one month free when we launch!
          </p>
        </div>
        <form className="mt-8">
          <div className="">
            <InputGroup label="Name" placeholder="Name" />
            <InputGroup label="Phone Number" placeholder="Phone Number" type="tel" />
            <InputGroup label="Email Address" placeholder="Email Address" type="email" />
          </div>

          <div className="mt-8">
            <Button title="Sign In" className="w-full bg-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
