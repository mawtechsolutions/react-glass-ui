/**
 * GlassCheckbox - A glassmorphism checkbox component using Radix UI
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { forwardRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const glassCheckboxVariants = cva(
  [
    "flex items-center justify-center",
    "bg-glass-card/50 backdrop-blur-glass",
    "border border-white/20 rounded-md",
    "transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-glass-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-glass-dark",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "data-[state=checked]:bg-glass-cyan data-[state=checked]:border-glass-cyan",
    "hover:border-white/40",
    "data-[state=checked]:hover:bg-glass-cyan/90",
  ],
  {
    variants: {
      checkboxSize: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: {
      checkboxSize: "md",
    },
  }
);

export interface GlassCheckboxProps
  extends Omit<CheckboxPrimitive.CheckboxProps, "children">,
    VariantProps<typeof glassCheckboxVariants> {
  /** Checkbox label */
  label?: string;
  /** Description text */
  description?: string;
  /** Additional container classes */
  containerClassName?: string;
}

const CheckIcon = ({ size }: { size: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <motion.svg
      className={cn(sizes[size], "text-glass-dark")}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      />
    </motion.svg>
  );
};

/**
 * GlassCheckbox - A glassmorphism checkbox component
 *
 * @example
 * ```tsx
 * <GlassCheckbox
 *   label="Accept terms"
 *   description="I agree to the terms and conditions"
 * />
 * ```
 */
export const GlassCheckbox = forwardRef<HTMLButtonElement, GlassCheckboxProps>(
  (
    {
      label,
      description,
      checkboxSize = "md",
      disabled,
      className,
      containerClassName,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId =
      id || `glass-checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn("flex items-start gap-3", containerClassName)}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          disabled={disabled}
          className={cn(glassCheckboxVariants({ checkboxSize }), className)}
          {...props}
        >
          <CheckboxPrimitive.Indicator asChild>
            <AnimatePresence mode="wait">
              <CheckIcon size={checkboxSize || "md"} />
            </AnimatePresence>
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  "text-sm font-medium text-white cursor-pointer",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p
                className={cn(
                  "text-sm text-white/50",
                  disabled && "opacity-50"
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

GlassCheckbox.displayName = "GlassCheckbox";

export default GlassCheckbox;
