import React from 'react';
import './Badge.css';
import { InfoIcon } from '../Button/Button';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'indigo'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'slate'
  | 'sky';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Size preset */
  size?: BadgeSize;
  /** Show status dot on the left */
  dot?: boolean;
  /** Show circular orange info icon on the right (matching reference) */
  showInfoIcon?: boolean;
  /** Badge content */
  children?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  showInfoIcon,
  children,
  className = '',
}) => {
  const isDefaultOrPrimary = variant === 'default' || variant === 'primary';
  const effectiveChildren = children !== undefined ? children : (isDefaultOrPrimary ? 'more info' : 'Active Component');
  const shouldShowInfoIcon = showInfoIcon !== undefined ? showInfoIcon : isDefaultOrPrimary;

  const classes = [
    'uedp-badge',
    `uedp-badge--${variant}`,
    `uedp-badge--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {dot && <span className="uedp-badge__dot" />}
      <span className="uedp-badge__label">{effectiveChildren}</span>
      {shouldShowInfoIcon && <InfoIcon className="uedp-badge__info-icon" />}
    </span>
  );
};

export default Badge;
