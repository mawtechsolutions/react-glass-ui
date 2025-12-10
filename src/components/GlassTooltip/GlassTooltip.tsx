/**
 * GlassTooltip - A glassmorphism tooltip component using Radix UI
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { forwardRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const glassTooltipVariants = cva(
  [
    "px-3 py-2 rounded-lg",
    "bg-glass-card backdrop-blur-glass",
    "shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.1)]",
    "text-sm text-white",
    "z-50",
    "animate-scale-in",
  ],
  {
    variants: {
      variant: {
        default: "",
        glow: "shadow-[0_4px_20px_rgba(34,211,238,0.25),inset_0_0_0_1px_rgba(34,211,238,0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface GlassTooltipProps
  extends Omit<TooltipPrimitive.TooltipProps, "children">,
    VariantProps<typeof glassTooltipVariants> {
  /** Tooltip content */
  content: React.ReactNode;
  /** Element to attach tooltip to */
  children: React.ReactNode;
  /** Side to show tooltip */
  side?: "top" | "right" | "bottom" | "left";
  /** Alignment of tooltip */
  align?: "start" | "center" | "end";
  /** Offset from trigger */
  sideOffset?: number;
  /** Delay before showing (ms) */
  delayDuration?: number;
  /** Additional content classes */
  contentClassName?: string;
  /** Show arrow */
  showArrow?: boolean;
}

/**
 * GlassTooltip - A glassmorphism tooltip component
 *
 * @example
 * ```tsx
 * <GlassTooltip content="This is a tooltip">
 *   <GlassButton>Hover me</GlassButton>
 * </GlassTooltip>
 * ```
 */
export const GlassTooltip = forwardRef<HTMLDivElement, GlassTooltipProps>(
  (
    {
      content,
      children,
      variant,
      side = "top",
      align = "center",
      sideOffset = 8,
      delayDuration = 200,
      contentClassName,
      showArrow = true,
      open,
      defaultOpen,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipPrimitive.Provider delayDuration={delayDuration}>
        <TooltipPrimitive.Root
          open={open}
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
          {...props}
        >
          <TooltipPrimitive.Trigger asChild>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
              ref={ref}
              side={side}
              align={align}
              sideOffset={sideOffset}
              className={cn(
                glassTooltipVariants({ variant }),
                contentClassName
              )}
            >
              {content}
              {showArrow && (
                <TooltipPrimitive.Arrow
                  className="fill-glass-card"
                  width={12}
                  height={6}
                />
              )}
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    );
  }
);

GlassTooltip.displayName = "GlassTooltip";

// Export Provider for apps that need to wrap multiple tooltips
export const GlassTooltipProvider = TooltipPrimitive.Provider;

export default GlassTooltip;
