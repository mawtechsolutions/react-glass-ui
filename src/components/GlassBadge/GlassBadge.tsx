/**
 * GlassBadge - A glassmorphism badge/chip component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const glassBadgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1",
    "font-medium",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-glass-card/70 backdrop-blur-glass",
          "border border-white/12",
          "text-white",
        ],
        primary: [
          "bg-glass-cyan/20 backdrop-blur-glass",
          "border border-glass-cyan/30",
          "text-glass-cyan",
        ],
        secondary: [
          "bg-glass-violet/20 backdrop-blur-glass",
          "border border-glass-violet/30",
          "text-glass-violet",
        ],
        accent: [
          "bg-glass-pink/20 backdrop-blur-glass",
          "border border-glass-pink/30",
          "text-glass-pink",
        ],
        success: [
          "bg-emerald-500/20 backdrop-blur-glass",
          "border border-emerald-500/30",
          "text-emerald-400",
        ],
        warning: [
          "bg-amber-500/20 backdrop-blur-glass",
          "border border-amber-500/30",
          "text-amber-400",
        ],
        error: [
          "bg-red-500/20 backdrop-blur-glass",
          "border border-red-500/30",
          "text-red-400",
        ],
        outline: ["bg-transparent", "border border-white/20", "text-white"],
      },
      size: {
        sm: "h-5 px-2 text-xs rounded-md",
        md: "h-6 px-2.5 text-xs rounded-lg",
        lg: "h-7 px-3 text-sm rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface GlassBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof glassBadgeVariants> {
  /** Badge content */
  children: React.ReactNode;
  /** Icon on the left */
  leftIcon?: React.ReactNode;
  /** Icon on the right */
  rightIcon?: React.ReactNode;
  /** Dot indicator */
  dot?: boolean;
  /** Dot color */
  dotColor?: "cyan" | "violet" | "pink" | "success" | "warning" | "error";
  /** Make badge removable */
  onRemove?: () => void;
}

const dotColors = {
  cyan: "bg-glass-cyan",
  violet: "bg-glass-violet",
  pink: "bg-glass-pink",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
};

/**
 * GlassBadge - A glassmorphism badge component
 *
 * @example
 * ```tsx
 * <GlassBadge variant="primary">New</GlassBadge>
 * <GlassBadge variant="success" dot>Active</GlassBadge>
 * ```
 */
export const GlassBadge = forwardRef<HTMLSpanElement, GlassBadgeProps>(
  (
    {
      children,
      variant,
      size,
      leftIcon,
      rightIcon,
      dot,
      dotColor = "cyan",
      onRemove,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(glassBadgeVariants({ variant, size }), className)}
        {...props}
      >
        {dot && (
          <span
            className={cn("w-1.5 h-1.5 rounded-full", dotColors[dotColor])}
            aria-hidden="true"
          />
        )}
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        {onRemove && (
          <button
            onClick={onRemove}
            className="shrink-0 ml-0.5 p-0.5 rounded hover:bg-white/10 transition-colors"
            aria-label="Remove"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

GlassBadge.displayName = "GlassBadge";

export default GlassBadge;
