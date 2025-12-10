/**
 * GlassDropdown - A glassmorphism dropdown menu component using Radix UI
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { forwardRef } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

export interface GlassDropdownProps
  extends DropdownMenuPrimitive.DropdownMenuProps {
  /** Trigger element */
  trigger: React.ReactNode;
  /** Menu items */
  children: React.ReactNode;
  /** Content alignment */
  align?: "start" | "center" | "end";
  /** Content side */
  side?: "top" | "right" | "bottom" | "left";
  /** Offset from trigger */
  sideOffset?: number;
}

export interface GlassDropdownItemProps
  extends DropdownMenuPrimitive.DropdownMenuItemProps {
  /** Item icon */
  icon?: React.ReactNode;
  /** Shortcut key hint */
  shortcut?: string;
  /** Destructive/danger item */
  destructive?: boolean;
}

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

/**
 * GlassDropdownItem - A dropdown menu item
 */
export const GlassDropdownItem = forwardRef<
  HTMLDivElement,
  GlassDropdownItemProps
>(({ children, icon, shortcut, destructive, className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex items-center gap-2 px-3 py-2 rounded-lg",
        "text-sm text-white outline-none cursor-pointer",
        "data-[highlighted]:bg-white/10",
        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
        "transition-colors duration-150",
        destructive && "text-red-400 data-[highlighted]:bg-red-500/20",
        className
      )}
      {...props}
    >
      {icon && <span className="w-4 h-4 shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="ml-auto text-xs text-white/40">{shortcut}</span>
      )}
    </DropdownMenuPrimitive.Item>
  );
});

GlassDropdownItem.displayName = "GlassDropdownItem";

/**
 * GlassDropdownSeparator - A separator between menu items
 */
export const GlassDropdownSeparator = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("h-px my-1 bg-white/10", className)}
    {...props}
  />
));

GlassDropdownSeparator.displayName = "GlassDropdownSeparator";

/**
 * GlassDropdownLabel - A label for grouping items
 */
export const GlassDropdownLabel = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuLabelProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-3 py-2 text-xs font-medium text-white/50", className)}
    {...props}
  />
));

GlassDropdownLabel.displayName = "GlassDropdownLabel";

/**
 * GlassDropdown - A glassmorphism dropdown menu
 *
 * @example
 * ```tsx
 * <GlassDropdown trigger={<GlassButton>Options</GlassButton>}>
 *   <GlassDropdownItem icon={<EditIcon />}>Edit</GlassDropdownItem>
 *   <GlassDropdownItem icon={<CopyIcon />}>Duplicate</GlassDropdownItem>
 *   <GlassDropdownSeparator />
 *   <GlassDropdownItem icon={<DeleteIcon />} destructive>Delete</GlassDropdownItem>
 * </GlassDropdown>
 * ```
 */
export const GlassDropdown = forwardRef<HTMLDivElement, GlassDropdownProps>(
  (
    {
      trigger,
      children,
      align = "start",
      side = "bottom",
      sideOffset = 4,
      open,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        {...props}
      >
        <DropdownMenuPrimitive.Trigger asChild>
          {trigger}
        </DropdownMenuPrimitive.Trigger>

        <AnimatePresence>
          <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
              ref={ref}
              align={align}
              side={side}
              sideOffset={sideOffset}
              asChild
            >
              <motion.div
                className={cn(
                  "min-w-[180px] p-1 rounded-xl",
                  "bg-glass-card/95 backdrop-blur-glass-lg",
                  "border border-white/12",
                  "shadow-glass-lg",
                  "z-50"
                )}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                {children}
              </motion.div>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        </AnimatePresence>
      </DropdownMenuPrimitive.Root>
    );
  }
);

GlassDropdown.displayName = "GlassDropdown";

export default GlassDropdown;
