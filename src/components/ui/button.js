import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ children, variant = 'default', size = 'md', className = '', ...props }) => {
  const baseStyles = 'font-semibold rounded focus:outline-none transition duration-300';
  const variantStyles = {
    default: 'bg-teal-600 text-white hover:bg-teal-700',
    outline: 'border border-teal-600 text-teal-600 hover:bg-teal-100 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900',
    link: 'text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300',
    ghost: 'bg-transparent text-teal-600 hover:bg-teal-100 dark:text-teal-400 dark:hover:bg-gray-800',
  };
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2',
  };

  return (
    <button
      className={classNames(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'outline', 'link', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'icon']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
