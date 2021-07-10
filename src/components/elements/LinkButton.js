import React from "react";
import {Link} from "react-router-dom";

const LinkButton = ({url, title, className}) => {
  return (
    <Link
      to={url}
      className={`font-semibold w-auto pt-4 pb-4 px-6 whitespace-nowrap inline-flex items-center justify-center text-white rounded-md focus:outline-none text-sm lg:text-base bg-secondary ${className}`}
    >
      {title || "Get started for free"}
    </Link>
  );
};

export default LinkButton;
