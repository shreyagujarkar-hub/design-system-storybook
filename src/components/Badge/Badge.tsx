import React from 'react';
import './Badge.css';

export type BadgeVariant =
  | 'default'
  | 'hover'
  | 'press'
  | 'disabled'
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
  /** Show circular info icon on the right (matching reference) */
  showInfoIcon?: boolean;
  /** Badge content */
  children?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

/**
 * Info icon with customizable circle & glyph colors matching Figma states:
 * - Default/Hover: orange circle with white "i"
 * - Press: white circle with orange "i"
 * - Disabled: grey circle with white "i"
 */
export const BadgeInfoIcon: React.FC<{
  variant?: 'orange' | 'white' | 'gray';
  className?: string;
  style?: React.CSSProperties;
}> = ({ variant = 'orange', className, style }) => {
  let circleFill = 'var(--uedp-orange-500, #F97316)';
  let glyphFill = '#FFFFFF';

  if (variant === 'white') {
    circleFill = '#FFFFFF';
    glyphFill = 'var(--uedp-orange-500, #F97316)';
  } else if (variant === 'gray') {
    circleFill = '#8C96A6';
    glyphFill = '#FFFFFF';
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill={circleFill} />
      <circle cx="12" cy="6.75" r="1.5" fill={glyphFill} />
      <rect x="10.5" y="10" width="3" height="7.5" rx="1.5" fill={glyphFill} />
    </svg>
  );
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  showInfoIcon,
  children,
  className = '',
}) => {
  const isPillReference =
    variant === 'default' ||
    variant === 'hover' ||
    variant === 'press' ||
    variant === 'disabled' ||
    variant === 'primary';

  const effectiveChildren = children !== undefined ? children : (isPillReference ? 'more info' : 'Active Component');
  const shouldShowInfoIcon = showInfoIcon !== undefined ? showInfoIcon : isPillReference;

  const iconVariant: 'orange' | 'white' | 'gray' =
    variant === 'press' ? 'white' : variant === 'disabled' ? 'gray' : 'orange';

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
      {shouldShowInfoIcon && <BadgeInfoIcon variant={iconVariant} className="uedp-badge__info-icon" />}
    </span>
  );
};

export default Badge;
