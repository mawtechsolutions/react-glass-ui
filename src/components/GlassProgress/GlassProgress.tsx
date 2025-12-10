/**
 * GlassProgress - A glassmorphism progress indicator component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import {
  forwardRef,
  type HTMLAttributes,
  type SVGAttributes,
  type ReactNode,
} from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const glassProgressVariants = cva(
  [
    "relative overflow-hidden",
    "bg-glass-card/50 backdrop-blur-glass",
    "border border-white/12",
  ],
  {
    variants: {
      size: {
        sm: "h-1.5 rounded-full",
        md: "h-2.5 rounded-full",
        lg: "h-4 rounded-full",
      },
      variant: {
        default: "",
        glow: "shadow-glass-glow",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const glassProgressBarVariants = cva(
  "h-full rounded-full transition-all duration-300",
  {
    variants: {
      color: {
        cyan: "bg-glass-cyan",
        violet: "bg-glass-violet",
        pink: "bg-glass-pink",
        success: "bg-emerald-500",
        warning: "bg-amber-500",
        error: "bg-red-500",
        aurora: "aurora-gradient animate-aurora bg-[length:200%_200%]",
      },
    },
    defaultVariants: {
      color: "cyan",
    },
  }
);

export interface GlassProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "color">,
    VariantProps<typeof glassProgressVariants>,
    VariantProps<typeof glassProgressBarVariants> {
  /** Progress value (0-100) */
  value?: number;
  /** Indeterminate loading state */
  indeterminate?: boolean;
  /** Show percentage label */
  showLabel?: boolean;
  /** Label position */
  labelPosition?: "inside" | "outside";
  /** Custom label formatter */
  formatLabel?: (value: number) => string;
}

/**
 * GlassProgress - Linear progress indicator
 *
 * @example
 * ```tsx
 * <GlassProgress value={75} showLabel />
 * ```
 */
export const GlassProgress = forwardRef<HTMLDivElement, GlassProgressProps>(
  (
    {
      value = 0,
      indeterminate = false,
      showLabel = false,
      labelPosition = "outside",
      formatLabel = (v) => `${Math.round(v)}%`,
      size,
      variant,
      color,
      className,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
      <div className={cn("w-full", className)}>
        {showLabel && labelPosition === "outside" && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/70">Progress</span>
            <span className="text-sm font-medium text-white">
              {formatLabel(clampedValue)}
            </span>
          </div>
        )}

        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          className={cn(glassProgressVariants({ size, variant }))}
          {...props}
        >
          {indeterminate ? (
            <motion.div
              className={cn(glassProgressBarVariants({ color }), "w-1/3")}
              animate={{
                x: ["-100%", "400%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ) : (
            <motion.div
              className={cn(glassProgressBarVariants({ color }))}
              initial={{ width: 0 }}
              animate={{ width: `${clampedValue}%` }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {showLabel && labelPosition === "inside" && size === "lg" && (
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                  {formatLabel(clampedValue)}
                </span>
              )}
            </motion.div>
          )}
        </div>
      </div>
    );
  }
);

GlassProgress.displayName = "GlassProgress";

// Circular Progress Component
export interface GlassCircularProgressProps
  extends Omit<SVGAttributes<SVGSVGElement>, "children"> {
  /** Progress value (0-100) */
  value?: number;
  /** Indeterminate loading state */
  indeterminate?: boolean;
  /** Size of the circle */
  size?: number;
  /** Stroke width */
  strokeWidth?: number;
  /** Color variant */
  color?: "cyan" | "violet" | "pink" | "success" | "warning" | "error";
  /** Show percentage label */
  showLabel?: boolean;
  /** Custom label */
  label?: ReactNode;
}

const colorClasses: Record<string, string> = {
  cyan: "stroke-glass-cyan",
  violet: "stroke-glass-violet",
  pink: "stroke-glass-pink",
  success: "stroke-emerald-500",
  warning: "stroke-amber-500",
  error: "stroke-red-500",
};

/**
 * GlassCircularProgress - Circular progress indicator
 *
 * @example
 * ```tsx
 * <GlassCircularProgress value={75} showLabel />
 * ```
 */
export const GlassCircularProgress = forwardRef<
  SVGSVGElement,
  GlassCircularProgressProps
>(
  (
    {
      value = 0,
      indeterminate = false,
      size = 48,
      strokeWidth = 4,
      color = "cyan",
      showLabel = false,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (clampedValue / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className={cn("transform -rotate-90", className)}
          {...props}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-white/10"
          />

          {/* Progress circle */}
          {indeterminate ? (
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className={colorClasses[color]}
              strokeDasharray={circumference}
              strokeDashoffset={circumference * 0.75}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformOrigin: "center" }}
            />
          ) : (
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className={colorClasses[color]}
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            />
          )}
        </svg>

        {/* Center label */}
        {(showLabel || label) && !indeterminate && (
          <div className="absolute inset-0 flex items-center justify-center">
            {label || (
              <span className="text-xs font-medium text-white">
                {Math.round(clampedValue)}%
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

GlassCircularProgress.displayName = "GlassCircularProgress";

export default GlassProgress;
