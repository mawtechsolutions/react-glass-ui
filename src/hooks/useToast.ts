/**
 * useToast - Hook for showing toast notifications
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { useToastContext, type Toast } from '../components/GlassToast';

export interface UseToastReturn {
  /** Show a toast notification */
  toast: (options: Omit<Toast, 'id'>) => string;
  /** Show a success toast */
  success: (title: string, description?: string) => string;
  /** Show an error toast */
  error: (title: string, description?: string) => string;
  /** Show a warning toast */
  warning: (title: string, description?: string) => string;
  /** Show an info toast */
  info: (title: string, description?: string) => string;
  /** Dismiss a toast by id */
  dismiss: (id: string) => void;
  /** Dismiss all toasts */
  dismissAll: () => void;
  /** All active toasts */
  toasts: Toast[];
}

/**
 * useToast - Hook for managing toast notifications
 *
 * @example
 * ```tsx
 * const { toast, success, error } = useToast();
 *
 * // Show a custom toast
 * toast({
 *   variant: 'success',
 *   title: 'Saved!',
 *   description: 'Your changes have been saved.',
 * });
 *
 * // Show a success toast
 * success('File uploaded', 'Your file has been uploaded successfully.');
 *
 * // Show an error toast
 * error('Error', 'Something went wrong.');
 * ```
 */
export function useToast(): UseToastReturn {
  const { toasts, addToast, removeToast, clearToasts } = useToastContext();

  const toast = (options: Omit<Toast, 'id'>) => {
    return addToast(options);
  };

  const success = (title: string, description?: string) => {
    return addToast({ variant: 'success', title, description });
  };

  const error = (title: string, description?: string) => {
    return addToast({ variant: 'error', title, description });
  };

  const warning = (title: string, description?: string) => {
    return addToast({ variant: 'warning', title, description });
  };

  const info = (title: string, description?: string) => {
    return addToast({ variant: 'info', title, description });
  };

  return {
    toast,
    success,
    error,
    warning,
    info,
    dismiss: removeToast,
    dismissAll: clearToasts,
    toasts,
  };
}

export default useToast;

