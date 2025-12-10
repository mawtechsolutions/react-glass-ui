/**
 * GlassTabs - A glassmorphism tabs component using Radix UI
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassTabsListVariants = cva(
  [
    'inline-flex items-center gap-1 p-1',
    'bg-glass-card/50 backdrop-blur-glass',
    'border border-white/12 rounded-xl',
  ],
  {
    variants: {
      variant: {
        default: '',
        pills: 'bg-transparent border-0 p-0',
        underline: 'bg-transparent border-0 border-b border-white/12 rounded-none p-0 pb-px',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const glassTabsTriggerVariants = cva(
  [
    'relative px-4 py-2 rounded-lg',
    'text-sm font-medium text-white/60',
    'transition-all duration-200',
    'hover:text-white',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-glass-cyan focus-visible:ring-inset',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default: [
          'data-[state=active]:text-white',
          'data-[state=active]:bg-white/10',
        ],
        pills: [
          'data-[state=active]:text-glass-dark',
          'data-[state=active]:bg-glass-cyan',
        ],
        underline: [
          'rounded-none',
          'data-[state=active]:text-white',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface GlassTabsProps
  extends TabsPrimitive.TabsProps,
    VariantProps<typeof glassTabsListVariants> {
  /** Tabs content */
  children: React.ReactNode;
}

export interface GlassTabsListProps
  extends TabsPrimitive.TabsListProps,
    VariantProps<typeof glassTabsListVariants> {}

export interface GlassTabsTriggerProps
  extends TabsPrimitive.TabsTriggerProps,
    VariantProps<typeof glassTabsTriggerVariants> {
  /** Icon to show before label */
  icon?: React.ReactNode;
}

export interface GlassTabsContentProps extends TabsPrimitive.TabsContentProps {}

/**
 * GlassTabsList - Container for tab triggers
 */
export const GlassTabsList = forwardRef<HTMLDivElement, GlassTabsListProps>(
  ({ className, variant, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(glassTabsListVariants({ variant }), className)}
      {...props}
    />
  )
);

GlassTabsList.displayName = 'GlassTabsList';

/**
 * GlassTabsTrigger - Individual tab trigger button
 */
export const GlassTabsTrigger = forwardRef<HTMLButtonElement, GlassTabsTriggerProps>(
  ({ className, variant, icon, children, ...props }, ref) => (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(glassTabsTriggerVariants({ variant }), className)}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </TabsPrimitive.Trigger>
  )
);

GlassTabsTrigger.displayName = 'GlassTabsTrigger';

/**
 * GlassTabsContent - Content panel for a tab
 */
export const GlassTabsContent = forwardRef<HTMLDivElement, GlassTabsContentProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        'mt-4 focus:outline-none',
        'data-[state=active]:animate-fade-in',
        className
      )}
      {...props}
    />
  )
);

GlassTabsContent.displayName = 'GlassTabsContent';

/**
 * GlassTabs - A glassmorphism tabs component
 *
 * @example
 * ```tsx
 * <GlassTabs defaultValue="tab1">
 *   <GlassTabsList>
 *     <GlassTabsTrigger value="tab1">Tab 1</GlassTabsTrigger>
 *     <GlassTabsTrigger value="tab2">Tab 2</GlassTabsTrigger>
 *   </GlassTabsList>
 *   <GlassTabsContent value="tab1">Content 1</GlassTabsContent>
 *   <GlassTabsContent value="tab2">Content 2</GlassTabsContent>
 * </GlassTabs>
 * ```
 */
export const GlassTabs = forwardRef<HTMLDivElement, GlassTabsProps>(
  ({ className, children, ...props }, ref) => (
    <TabsPrimitive.Root
      ref={ref}
      className={cn('w-full', className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  )
);

GlassTabs.displayName = 'GlassTabs';

export default GlassTabs;

