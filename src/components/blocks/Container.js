import React from "react";
const Container = ({hasMainContainer = "true", ...props}) => {
  // This props is needed due to so it doenst distort the main layout, instead it specifically used for the home page
  return (
    <div className={hasMainContainer === "true" ? "container mx-auto px-4" : ""}>
      {props.children}
    </div>
  );
};

export default Container;
