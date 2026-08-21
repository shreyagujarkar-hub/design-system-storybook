import React from 'react';
import './Card.css';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  headerImage?: string;
  variant?: 'elevated' | 'outlined' | 'flat';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  footer,
  headerImage,
  variant = 'elevated',
  padding = 'md',
  className = '',
}) => {
  const classes = [
    'uedp-card',
    `uedp-card--${variant}`,
    `uedp-card--p-${padding}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {headerImage && (
        <div className="uedp-card__image-wrapper">
          <img src={headerImage} alt={title || 'Card header'} className="uedp-card__image" />
        </div>
      )}
      {(title || subtitle) && (
        <div className="uedp-card__header">
          {title && <h3 className="uedp-card__title">{title}</h3>}
          {subtitle && <p className="uedp-card__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="uedp-card__body">{children}</div>
      {footer && <div className="uedp-card__footer">{footer}</div>}
    </div>
  );
};

export default Card;
