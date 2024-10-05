import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-block px-2 py-1 text-xs font-semibold rounded-full transition duration-300';
  const variantStyles = {
    default: 'bg-teal-600 text-white',
    secondary: 'bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400',
  };

  const classes = classNames(baseStyles, variantStyles[variant], className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'secondary']),
  className: PropTypes.string,
};
