import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`uedp-input-group ${disabled ? 'uedp-input-group--disabled' : ''} ${error ? 'uedp-input-group--error' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="uedp-input__label">
          {label}
        </label>
      )}
      <div className="uedp-input__wrapper">
        {leftIcon && <span className="uedp-input__icon uedp-input__icon--left">{leftIcon}</span>}
        <input
          id={inputId}
          className={`uedp-input ${leftIcon ? 'uedp-input--has-left-icon' : ''} ${rightIcon ? 'uedp-input--has-right-icon' : ''} ${className}`}
          disabled={disabled}
          {...props}
        />
        {rightIcon && <span className="uedp-input__icon uedp-input__icon--right">{rightIcon}</span>}
      </div>
      {(error || helperText) && (
        <span className={`uedp-input__helper ${error ? 'uedp-input__helper--error' : ''}`}>
          {error || helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
