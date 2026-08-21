import React from 'react';
import './Avatar.css';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps {
  src?: string;
  name: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  status,
  className = '',
}) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const classes = [
    'uedp-avatar',
    `uedp-avatar--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {src ? (
        <img src={src} alt={name} className="uedp-avatar__img" />
      ) : (
        <span className="uedp-avatar__fallback">{initials}</span>
      )}
      {status && <span className={`uedp-avatar__status uedp-avatar__status--${status}`} />}
    </div>
  );
};

export default Avatar;
