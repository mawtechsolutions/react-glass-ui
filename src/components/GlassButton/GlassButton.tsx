/**
 * GlassButton - A glassmorphism button component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassButtonVariants = cva(
  // Base styles
  [
    'relative inline-flex items-center justify-center gap-2',
    'font-medium transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-glass-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-glass-dark',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-glass-cyan text-glass-dark',
          'hover:bg-glass-cyan/90 hover:shadow-glass-glow',
          'active:scale-[0.98]',
        ],
        secondary: [
          'bg-glass-card/70 backdrop-blur-glass text-white',
          'border border-glass-cyan/50',
          'hover:bg-glass-card/90 hover:border-glass-cyan',
          'active:scale-[0.98]',
        ],
        ghost: [
          'bg-transparent text-white',
          'hover:bg-white/10',
          'active:bg-white/20',
        ],
        outline: [
          'bg-transparent text-white',
          'border border-white/20',
          'hover:bg-white/10 hover:border-white/40',
          'active:bg-white/20',
        ],
        danger: [
          'bg-red-500/80 backdrop-blur-glass text-white',
          'border border-red-400/50',
          'hover:bg-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]',
          'active:scale-[0.98]',
        ],
        success: [
          'bg-emerald-500/80 backdrop-blur-glass text-white',
          'border border-emerald-400/50',
          'hover:bg-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]',
          'active:scale-[0.98]',
        ],
        aurora: [
          'aurora-gradient text-white animate-aurora bg-[length:200%_200%]',
          'hover:shadow-glass-glow',
          'active:scale-[0.98]',
        ],
        violet: [
          'bg-glass-violet text-white',
          'hover:bg-glass-violet/90 hover:shadow-glass-glow-violet',
          'active:scale-[0.98]',
        ],
        pink: [
          'bg-glass-pink text-white',
          'hover:bg-glass-pink/90 hover:shadow-glass-glow-pink',
          'active:scale-[0.98]',
        ],
      },
      size: {
        xs: 'h-7 px-2.5 text-xs rounded-lg',
        sm: 'h-8 px-3 text-sm rounded-lg',
        md: 'h-10 px-4 text-sm rounded-xl',
        lg: 'h-12 px-6 text-base rounded-xl',
        xl: 'h-14 px-8 text-lg rounded-2xl',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface GlassButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    VariantProps<typeof glassButtonVariants> {
  /** Button content */
  children: React.ReactNode;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon to show on the left */
  leftIcon?: React.ReactNode;
  /** Icon to show on the right */
  rightIcon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Disable hover animation */
  disableHoverAnimation?: boolean;
}

/**
 * GlassButton - A glassmorphism button component
 *
 * @example
 * ```tsx
 * <GlassButton variant="primary" size="lg">
 *   Click me
 * </GlassButton>
 * ```
 */
export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      children,
      variant,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      disableHoverAnimation = false,
      className,
      ...props
    },
    ref
  ) => {
    const motionProps = disableHoverAnimation
      ? {}
      : {
          whileHover: { y: -2 },
          whileTap: { scale: 0.98 },
          transition: { duration: 0.15 },
        };

    return (
      <motion.button
        ref={ref}
        className={cn(glassButtonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        {...motionProps}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

GlassButton.displayName = 'GlassButton';

export default GlassButton;

