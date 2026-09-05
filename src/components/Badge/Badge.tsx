import React from 'react';
import './Badge.css';

export type BadgeVariant =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'indigo'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'slate'
  | 'sky';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeShape = 'pill' | 'rounded';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  shape?: BadgeShape;
  dot?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'md',
  shape = 'rounded',
  dot = false,
  children = 'Base Palette',
  className = '',
}) => {
  const classes = [
    'uedp-badge',
    `uedp-badge--${variant}`,
    `uedp-badge--${size}`,
    `uedp-badge--${shape}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {dot && <span className="uedp-badge__dot" />}
      <span className="uedp-badge__label">{children}</span>
    </span>
  );
};

export default Badge;
