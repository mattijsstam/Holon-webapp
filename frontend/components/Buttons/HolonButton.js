import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const variants = {
  darkmode:
    "border-white text-white bg-holon-blue-900 shadow-holon-white enabled:hover:bg-holon-blue-500 enabled:active:shadow-holon-white-hover",
  gold: "bg-holon-gold-200 border-holon-blue-900 shadow-holon-blue hover:bg-holon-gold-600 active:shadow-holon-blue-hover",
  blue: "bg-holon-blue-200 border-holon-blue-900 shadow-holon-blue hover:bg-holon-blue-500 active:shadow-holon-blue-hover hover:text-white",
  darkblue:
    "text-white bg-holon-blue-500 border-holon-blue-900 shadow-holon-blue hover:bg-holon-blue-900 active:shadow-holon-blue-hover",
};

const ButtonContext = createContext();

export default function Button({ children, tag = "button", variant = "darkmode", ...rest }) {

  const Tag = tag;
  const colorClasses = variants[variant] || variants.darkmode;
  return (
    <Tag
      className={`${colorClasses} relative m-2 w-72 rounded-md border-2 p-3 font-medium leading-5 text-center`}
      {...rest}
    >
      <ButtonContext.Provider value={variant}>{children}</ButtonContext.Provider>
    </Tag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(['a','button']),
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
};

/**
 * Hook which provides access to the button variant.
 */
export function useButtonContext() {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error("useButtonContext must be used within a Button");
  }

  return context;
}
