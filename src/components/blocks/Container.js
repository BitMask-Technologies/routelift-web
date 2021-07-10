import React from "react";
import PropTypes from "prop-types";
const Container = ({hasMainContainer = true, ...props}) => {
  // This props is needed due to so it doenst distort the main layout, instead it specifically used for the home page
  return (
    <div className={hasMainContainer && "container mx-auto px-4"}>{props.children}</div>
  );
};

Container.propTypes = {
  hasMainContainer: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default Container;
