import React from "react";

export const Button = ({
  className = "",
  size = "default",
  children,
  asChild,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-colors inline-flex items-center justify-center gap-2";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${classes} ${children.props.className || ""}`,
    });
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};