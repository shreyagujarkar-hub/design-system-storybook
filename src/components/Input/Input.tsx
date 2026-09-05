import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shape?: 'rounded' | 'pill';
}

export const MailIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#CBD5E1" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.44-.4-.75 0-.66.69-1.1 1.28-.73L12 11.08l6.72-4.31c.59-.38 1.28.07 1.28.73 0 .31-.15.59-.4.75z" />
  </svg>
);

export const LockIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#CBD5E1" aria-hidden="true">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
  </svg>
);

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  shape = 'rounded',
  className = '',
  disabled,
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div
      className={`uedp-input-group ${disabled ? 'uedp-input-group--disabled' : ''} ${
        error ? 'uedp-input-group--error' : ''
      }`}
    >
      {label && (
        <label htmlFor={inputId} className="uedp-input__label">
          {label}
        </label>
      )}
      <div className="uedp-input__wrapper">
        {leftIcon && <span className="uedp-input__icon uedp-input__icon--left">{leftIcon}</span>}
        <input
          id={inputId}
          className={`uedp-input uedp-input--${shape} ${
            leftIcon ? 'uedp-input--has-left-icon' : ''
          } ${rightIcon ? 'uedp-input--has-right-icon' : ''} ${className}`}
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
