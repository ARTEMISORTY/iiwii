import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Input = ({ type = 'text', className = '', ...props }) => {
  const baseStyles =
    'w-full px-3 py-2 border rounded-lg focus:outline-none transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600';
  const classes = classNames(baseStyles, className);

  return <input type={type} className={classes} {...props} />;
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};
