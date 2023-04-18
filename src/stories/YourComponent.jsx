import React from "react";
import PropTypes from "prop-types";

export const YourComponent = ({ title, ...props }) => {
  return <h1>this is your component {title} </h1>;
};

YourComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

YourComponent.defaultProps = { title: "empty" };
