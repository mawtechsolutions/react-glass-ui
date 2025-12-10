/**
 * GlassAvatar - A glassmorphism avatar component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassAvatarVariants = cva(
  [
    'relative inline-flex items-center justify-center',
    'bg-glass-card/70 backdrop-blur-glass',
    'border border-white/12',
    'overflow-hidden',
    'shrink-0',
  ],
  {
    variants: {
      size: {
        xs: 'w-6 h-6 text-xs',
        sm: 'w-8 h-8 text-sm',
        md: 'w-10 h-10 text-base',
        lg: 'w-12 h-12 text-lg',
        xl: 'w-16 h-16 text-xl',
        '2xl': 'w-20 h-20 text-2xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-xl',
      },
      variant: {
        default: '',
        gradient: 'bg-gradient-to-br from-glass-cyan via-glass-violet to-glass-pink',
        glow: 'shadow-glass-glow border-glass-cyan/30',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
      variant: 'default',
    },
  }
);

const statusVariants = cva('absolute border-2 border-glass-dark rounded-full', {
  variants: {
    status: {
      online: 'bg-emerald-500',
      offline: 'bg-slate-500',
      away: 'bg-amber-500',
      busy: 'bg-red-500',
    },
    size: {
      xs: 'w-1.5 h-1.5 bottom-0 right-0',
      sm: 'w-2 h-2 bottom-0 right-0',
      md: 'w-2.5 h-2.5 bottom-0 right-0',
      lg: 'w-3 h-3 bottom-0.5 right-0.5',
      xl: 'w-3.5 h-3.5 bottom-1 right-1',
      '2xl': 'w-4 h-4 bottom-1 right-1',
    },
  },
  defaultVariants: {
    status: 'offline',
    size: 'md',
  },
});

export interface GlassAvatarProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>,
    VariantProps<typeof glassAvatarVariants> {
  /** Image source URL */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback text (usually initials) */
  fallback?: string;
  /** Status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /** Custom fallback icon */
  fallbackIcon?: React.ReactNode;
}

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const DefaultFallbackIcon = () => (
  <svg
    className="w-1/2 h-1/2 text-white/60"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

/**
 * GlassAvatar - A glassmorphism avatar component
 *
 * @example
 * ```tsx
 * <GlassAvatar
 *   src="/avatar.jpg"
 *   alt="John Doe"
 *   fallback="JD"
 *   status="online"
 * />
 * ```
 */
export const GlassAvatar = forwardRef<HTMLDivElement, GlassAvatarProps>(
  (
    {
      src,
      alt,
      fallback,
      size,
      shape,
      variant,
      status,
      fallbackIcon,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);
    const showFallback = !src || imageError;

    return (
      <div
        ref={ref}
        className={cn(glassAvatarVariants({ size, shape, variant }), className)}
      >
        {showFallback ? (
          <span className="font-medium text-white select-none">
            {fallback ? (
              getInitials(fallback)
            ) : fallbackIcon ? (
              fallbackIcon
            ) : (
              <DefaultFallbackIcon />
            )}
          </span>
        ) : (
          <img
            src={src}
            alt={alt || fallback || 'Avatar'}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
            {...props}
          />
        )}

        {status && (
          <span
            className={cn(statusVariants({ status, size }))}
            aria-label={`Status: ${status}`}
          />
        )}
      </div>
    );
  }
);

GlassAvatar.displayName = 'GlassAvatar';

// Avatar Group Component
export interface GlassAvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum avatars to show */
  max?: number;
  /** Size of avatars */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Avatar children */
  children: React.ReactNode;
}

/**
 * GlassAvatarGroup - Group multiple avatars with overlap
 *
 * @example
 * ```tsx
 * <GlassAvatarGroup max={3}>
 *   <GlassAvatar src="/user1.jpg" />
 *   <GlassAvatar src="/user2.jpg" />
 *   <GlassAvatar src="/user3.jpg" />
 *   <GlassAvatar src="/user4.jpg" />
 * </GlassAvatarGroup>
 * ```
 */
export const GlassAvatarGroup = forwardRef<HTMLDivElement, GlassAvatarGroupProps>(
  ({ max, size = 'md', children, className, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const excess = max ? Math.max(0, childArray.length - max) : 0;
    const visibleChildren = max ? childArray.slice(0, max) : childArray;

    const spacingClasses = {
      xs: '-space-x-2',
      sm: '-space-x-2.5',
      md: '-space-x-3',
      lg: '-space-x-4',
      xl: '-space-x-5',
      '2xl': '-space-x-6',
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center', spacingClasses[size], className)}
        {...props}
      >
        {visibleChildren.map((child, index) => (
          <div
            key={index}
            className="relative ring-2 ring-glass-dark rounded-full"
            style={{ zIndex: visibleChildren.length - index }}
          >
            {React.cloneElement(child as React.ReactElement, { size })}
          </div>
        ))}
        
        {excess > 0 && (
          <div
            className="relative ring-2 ring-glass-dark rounded-full"
            style={{ zIndex: 0 }}
          >
            <GlassAvatar
              size={size}
              fallback={`+${excess}`}
              variant="default"
            />
          </div>
        )}
      </div>
    );
  }
);

GlassAvatarGroup.displayName = 'GlassAvatarGroup';

export default GlassAvatar;

