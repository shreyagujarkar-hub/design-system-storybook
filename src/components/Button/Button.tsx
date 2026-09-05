import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'tiny' | 'sm' | 'medium' | 'md' | 'large' | 'lg' | 'giant';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Whether to show the orange info icon (defaults to true for primary variant) */
  showInfoIcon?: boolean;
  /** Left icon element */
  leftIcon?: React.ReactNode;
  /** Right icon element */
  rightIcon?: React.ReactNode;
  /** Button label */
  children?: React.ReactNode;
}

/**
 * Orange circular info icon with white 'i' glyph matching Figma design
 */
export const InfoIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="var(--uedp-orange-500, #F97316)" />
    <circle cx="10" cy="5.75" r="1.25" fill="#FFFFFF" />
    <rect x="8.75" y="8.5" width="2.5" height="6.25" rx="1.25" fill="#FFFFFF" />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  showInfoIcon,
  leftIcon,
  rightIcon,
  children = 'more info',
  className = '',
  disabled,
  ...props
}) => {
  const classes = [
    'uedp-button',
    `uedp-button--${variant}`,
    `uedp-button--${size}`,
    fullWidth ? 'uedp-button--full' : '',
    isLoading ? 'uedp-button--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hasInfoIcon = showInfoIcon ?? (variant === 'primary');
  const effectiveRightIcon =
    rightIcon !== undefined
      ? rightIcon
      : hasInfoIcon
      ? <InfoIcon />
      : null;

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="uedp-button__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="31.4 31.4" />
          </svg>
        </span>
      )}
      {!isLoading && leftIcon && <span className="uedp-button__icon">{leftIcon}</span>}
      <span className="uedp-button__label">{children}</span>
      {!isLoading && effectiveRightIcon && (
        <span className="uedp-button__icon uedp-button__icon--right">
          {effectiveRightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
