import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Card = ({ children, className = '', ...props }) => {
  const classes = classNames(
    'bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden transition duration-300',
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardHeader = ({ children, className = '', ...props }) => {
  const classes = classNames('p-4 border-b border-gray-200 dark:border-gray-700', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardContent = ({ children, className = '', ...props }) => {
  const classes = classNames('p-4', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardFooter = ({ children, className = '', ...props }) => {
  const classes = classNames('p-4 border-t border-gray-200 dark:border-gray-700', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardTitle = ({ children, className = '', ...props }) => {
  const classes = classNames('text-lg font-semibold', className);
  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  );
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardDescription = ({ children, className = '', ...props }) => {
  const classes = classNames('text-sm text-gray-600 dark:text-gray-400', className);
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
