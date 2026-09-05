import React from 'react';
import './Badge.css';

export type BadgeVariant = 'indigo' | 'emerald' | 'amber' | 'rose' | 'slate' | 'sky';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'indigo',
  size = 'md',
  dot = false,
  children,
  className = '',
}) => {
  const classes = [
    'uedp-badge',
    `uedp-badge--${variant}`,
    `uedp-badge--${size}`,
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
