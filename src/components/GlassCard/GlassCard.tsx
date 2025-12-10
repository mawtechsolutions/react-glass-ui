/**
 * GlassCard - A glassmorphism container component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassCardVariants = cva(
  // Base styles
  'relative overflow-hidden transition-all duration-250',
  {
    variants: {
      variant: {
        default: [
          'bg-glass-card/70 backdrop-blur-glass',
          'border border-white/12',
          'shadow-glass',
        ],
        elevated: [
          'bg-glass-card/80 backdrop-blur-glass-lg',
          'border border-white/15',
          'shadow-glass-lg',
        ],
        outlined: [
          'bg-glass-card/40 backdrop-blur-glass-sm',
          'border-2 border-white/20',
          'shadow-glass-sm',
        ],
        glow: [
          'bg-glass-card/70 backdrop-blur-glass',
          'border border-glass-cyan/30',
          'shadow-glass-glow',
        ],
        'glow-violet': [
          'bg-glass-card/70 backdrop-blur-glass',
          'border border-glass-violet/30',
          'shadow-glass-glow-violet',
        ],
        'glow-pink': [
          'bg-glass-card/70 backdrop-blur-glass',
          'border border-glass-pink/30',
          'shadow-glass-glow-pink',
        ],
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-7',
        xl: 'p-9',
      },
      radius: {
        sm: 'rounded-glass-sm',
        md: 'rounded-xl',
        lg: 'rounded-glass',
        xl: 'rounded-glass-lg',
        full: 'rounded-full',
      },
      hoverable: {
        true: 'cursor-pointer hover:-translate-y-0.5 hover:shadow-glass-lg hover:border-white/20',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      radius: 'lg',
      hoverable: false,
    },
  }
);

export interface GlassCardProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>,
    VariantProps<typeof glassCardVariants> {
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Enable inner light effect */
  innerLight?: boolean;
  /** Disable entrance animation */
  disableAnimation?: boolean;
}

/**
 * GlassCard - A glassmorphism container component
 *
 * @example
 * ```tsx
 * <GlassCard variant="glow" padding="lg">
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </GlassCard>
 * ```
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      variant,
      padding,
      radius,
      hoverable,
      innerLight = true,
      disableAnimation = false,
      className,
      ...props
    },
    ref
  ) => {
    const animationProps = disableAnimation
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
        };

    return (
      <motion.div
        ref={ref}
        className={cn(
          glassCardVariants({ variant, padding, radius, hoverable }),
          innerLight && 'shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
          className
        )}
        {...animationProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;

