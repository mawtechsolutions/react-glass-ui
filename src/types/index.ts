/**
 * Shared types for @mawtech/glass-ui
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { HTMLMotionProps } from 'framer-motion';

/** Common size variants */
export type Size = 'sm' | 'md' | 'lg' | 'xl';

/** Common color variants */
export type ColorVariant = 'cyan' | 'violet' | 'pink' | 'success' | 'warning' | 'error';

/** Status indicator types */
export type Status = 'online' | 'offline' | 'away' | 'busy';

/** Position types */
export type Position = 'top' | 'right' | 'bottom' | 'left';

/** Alignment types */
export type Alignment = 'start' | 'center' | 'end';

/** Base component props with common patterns */
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string;
  /** Whether the component is disabled */
  disabled?: boolean;
}

/** Props for components that support children */
export interface WithChildren {
  children: React.ReactNode;
}

/** Props for components with motion support */
export type MotionDivProps = HTMLMotionProps<'div'>;
export type MotionButtonProps = HTMLMotionProps<'button'>;

