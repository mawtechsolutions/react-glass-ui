/**
 * GlassModal - A glassmorphism modal/dialog component using Radix UI
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassModalVariants = cva(
  [
    'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'w-full bg-glass-card/90 backdrop-blur-glass-lg',
    'border border-white/12 rounded-glass',
    'shadow-glass-lg',
    'p-6',
    'z-50',
    'focus:outline-none',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface GlassModalProps
  extends DialogPrimitive.DialogProps,
    VariantProps<typeof glassModalVariants> {
  /** Modal title */
  title?: string;
  /** Modal description */
  description?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Show close button */
  showClose?: boolean;
  /** Additional content classes */
  contentClassName?: string;
  /** Trigger element */
  trigger?: React.ReactNode;
}

const CloseIcon = () => (
  <svg
    className="w-4 h-4"
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
);

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

/**
 * GlassModal - A glassmorphism modal component
 *
 * @example
 * ```tsx
 * <GlassModal
 *   trigger={<GlassButton>Open Modal</GlassButton>}
 *   title="Modal Title"
 *   description="This is a modal description"
 * >
 *   <p>Modal content goes here</p>
 * </GlassModal>
 * ```
 */
export const GlassModal = forwardRef<HTMLDivElement, GlassModalProps>(
  (
    {
      title,
      description,
      children,
      size,
      showClose = true,
      contentClassName,
      trigger,
      open,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    return (
      <DialogPrimitive.Root open={open} onOpenChange={onOpenChange} {...props}>
        {trigger && (
          <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
        )}

        <AnimatePresence>
          {open !== false && (
            <DialogPrimitive.Portal forceMount>
              <DialogPrimitive.Overlay asChild>
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                />
              </DialogPrimitive.Overlay>

              <DialogPrimitive.Content asChild>
                <motion.div
                  ref={ref}
                  className={cn(glassModalVariants({ size }), contentClassName)}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  {showClose && (
                    <DialogPrimitive.Close
                      className={cn(
                        'absolute top-4 right-4',
                        'p-2 rounded-lg',
                        'text-white/50 hover:text-white hover:bg-white/10',
                        'transition-colors duration-150',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-glass-cyan'
                      )}
                      aria-label="Close"
                    >
                      <CloseIcon />
                    </DialogPrimitive.Close>
                  )}

                  {title && (
                    <DialogPrimitive.Title className="text-xl font-semibold text-white mb-2">
                      {title}
                    </DialogPrimitive.Title>
                  )}

                  {description && (
                    <DialogPrimitive.Description className="text-sm text-white/60 mb-4">
                      {description}
                    </DialogPrimitive.Description>
                  )}

                  {children}
                </motion.div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          )}
        </AnimatePresence>
      </DialogPrimitive.Root>
    );
  }
);

GlassModal.displayName = 'GlassModal';

// Export sub-components for custom composition
export const GlassModalTrigger = DialogPrimitive.Trigger;
export const GlassModalClose = DialogPrimitive.Close;

export default GlassModal;

