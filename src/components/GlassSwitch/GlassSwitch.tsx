/**
 * GlassSwitch - A glassmorphism toggle switch component using Radix UI
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { forwardRef } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const glassSwitchVariants = cva(
  [
    "relative inline-flex shrink-0 cursor-pointer",
    "bg-glass-card/70 backdrop-blur-glass",
    "border border-white/20 rounded-full",
    "transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-glass-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-glass-dark",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "data-[state=checked]:bg-glass-cyan data-[state=checked]:border-glass-cyan",
  ],
  {
    variants: {
      switchSize: {
        sm: "w-8 h-5",
        md: "w-11 h-6",
        lg: "w-14 h-8",
      },
    },
    defaultVariants: {
      switchSize: "md",
    },
  }
);

const glassSwitchThumbVariants = cva(
  [
    "block rounded-full bg-white shadow-lg",
    "transition-transform duration-200",
    "data-[state=checked]:translate-x-full",
  ],
  {
    variants: {
      switchSize: {
        sm: "w-3.5 h-3.5 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:translate-x-[calc(100%-2px)]",
        md: "w-5 h-5 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:translate-x-[calc(100%-2px)]",
        lg: "w-6 h-6 data-[state=unchecked]:translate-x-1 data-[state=checked]:translate-x-[calc(100%)]",
      },
    },
    defaultVariants: {
      switchSize: "md",
    },
  }
);

export interface GlassSwitchProps
  extends Omit<SwitchPrimitive.SwitchProps, "children">,
    VariantProps<typeof glassSwitchVariants> {
  /** Switch label */
  label?: string;
  /** Description text */
  description?: string;
  /** Position of the label */
  labelPosition?: "left" | "right";
  /** Additional container classes */
  containerClassName?: string;
}

/**
 * GlassSwitch - A glassmorphism toggle switch component
 *
 * @example
 * ```tsx
 * <GlassSwitch
 *   label="Dark mode"
 *   description="Enable dark mode for the application"
 * />
 * ```
 */
export const GlassSwitch = forwardRef<HTMLButtonElement, GlassSwitchProps>(
  (
    {
      label,
      description,
      switchSize = "md",
      labelPosition = "right",
      disabled,
      className,
      containerClassName,
      id,
      ...props
    },
    ref
  ) => {
    const switchId =
      id || `glass-switch-${Math.random().toString(36).substr(2, 9)}`;

    const LabelContent = () =>
      (label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label
              htmlFor={switchId}
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
              className={cn("text-sm text-white/50", disabled && "opacity-50")}
            >
              {description}
            </p>
          )}
        </div>
      );

    return (
      <div
        className={cn(
          "flex items-center gap-3",
          labelPosition === "left" && "flex-row-reverse justify-end",
          containerClassName
        )}
      >
        <SwitchPrimitive.Root
          ref={ref}
          id={switchId}
          disabled={disabled}
          className={cn(glassSwitchVariants({ switchSize }), className)}
          {...props}
        >
          <SwitchPrimitive.Thumb
            className={glassSwitchThumbVariants({ switchSize })}
          />
        </SwitchPrimitive.Root>

        <LabelContent />
      </div>
    );
  }
);

GlassSwitch.displayName = "GlassSwitch";

export default GlassSwitch;
