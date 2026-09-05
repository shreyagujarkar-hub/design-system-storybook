import React from 'react';
import './Card.css';
import { Button } from '../Button/Button';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card state variant */
  variant?: 'default' | 'pressed' | 'elevated' | 'outlined' | 'flat';
  /** Date tag string */
  date?: string;
  /** Time tag string */
  time?: string;
  /** Card title */
  title?: string;
  /** Card body description text */
  description?: string;
  /** Image URL */
  imageSrc?: string;
  /** Subtitle (backward compatibility) */
  subtitle?: string;
  /** Header image URL (backward compatibility) */
  headerImage?: string;
  /** Custom children (overrides default description) */
  children?: React.ReactNode;
  /** Custom footer (overrides default action buttons) */
  footer?: React.ReactNode;
  /** Padding preset */
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CalendarIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008CA3" aria-hidden="true">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
  </svg>
);

const ClockIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#008CA3" />
    <polyline points="12 6 12 12 16 12" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const CommentIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316" aria-hidden="true">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    <line x1="7" y1="8" x2="17" y2="8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="7" y1="12" x2="13" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BookmarkIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  date = '10 fri',
  time = '11:59',
  title = 'Rohtak girl scores 99.8% in CBSE class X, aims for IIT',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sagittis tortor, et sagittis eros. Quisque neque ipsum, porttitor euismod semper facilisis, bibendum fermentum est',
  imageSrc = '/spacecraft.jpg',
  subtitle,
  headerImage,
  children,
  footer,
  padding = 'md',
  className = '',
  ...props
}) => {
  const effectiveImage = headerImage || imageSrc;
  const isPressed = variant === 'pressed';

  const classes = [
    'uedp-card',
    `uedp-card--${variant}`,
    `uedp-card--p-${padding}`,
    isPressed ? 'uedp-card--pressed' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {/* Top Meta Tags */}
      {(date || time) && (
        <div className="uedp-card__meta">
          {date && (
            <div className="uedp-card__meta-item">
              <CalendarIcon />
              <span>{date}</span>
            </div>
          )}
          {time && (
            <div className="uedp-card__meta-item">
              <ClockIcon />
              <span>{time}</span>
            </div>
          )}
        </div>
      )}

      {/* Card Title */}
      {title && <h3 className="uedp-card__title">{title}</h3>}
      {subtitle && <p className="uedp-card__subtitle">{subtitle}</p>}

      {/* Card Image */}
      {effectiveImage && (
        <div className="uedp-card__image-container">
          <img src={effectiveImage} alt={title || 'Card banner'} className="uedp-card__image" />
        </div>
      )}

      {/* Card Body / Description */}
      <div className="uedp-card__body">
        {children || (description && <p className="uedp-card__description">{description}</p>)}
      </div>

      {/* Card Action Footer */}
      {footer || (
        <div className="uedp-card__footer">
          <div className="uedp-card__actions-left">
            <Button variant="primary" size="tiny">
              more info
            </Button>
            <button type="button" className="uedp-card__icon-btn" aria-label="Comment">
              <CommentIcon />
            </button>
            <button type="button" className="uedp-card__icon-btn" aria-label="Bookmark">
              <BookmarkIcon />
            </button>
          </div>

          <div className="uedp-card__avatar">
            <img src="/cat-avatar.jpg" alt="User avatar" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
