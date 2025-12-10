/**
 * useModal - Hook for managing modal state
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { useState, useCallback } from 'react';

export interface UseModalReturn {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Open the modal */
  open: () => void;
  /** Close the modal */
  close: () => void;
  /** Toggle the modal */
  toggle: () => void;
  /** Set modal state */
  setOpen: (open: boolean) => void;
}

export interface UseModalOptions {
  /** Initial open state */
  defaultOpen?: boolean;
  /** Callback when modal opens */
  onOpen?: () => void;
  /** Callback when modal closes */
  onClose?: () => void;
}

/**
 * useModal - Hook for managing modal/dialog state
 *
 * @example
 * ```tsx
 * const { isOpen, open, close } = useModal();
 *
 * return (
 *   <>
 *     <GlassButton onClick={open}>Open Modal</GlassButton>
 *     <GlassModal open={isOpen} onOpenChange={(open) => !open && close()}>
 *       <p>Modal content</p>
 *     </GlassModal>
 *   </>
 * );
 * ```
 */
export function useModal(options: UseModalOptions = {}): UseModalReturn {
  const { defaultOpen = false, onOpen, onClose } = options;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        onOpen?.();
      } else {
        onClose?.();
      }
      return next;
    });
  }, [onOpen, onClose]);

  const setOpen = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      if (open) {
        onOpen?.();
      } else {
        onClose?.();
      }
    },
    [onOpen, onClose]
  );

  return {
    isOpen,
    open,
    close,
    toggle,
    setOpen,
  };
}

export default useModal;

