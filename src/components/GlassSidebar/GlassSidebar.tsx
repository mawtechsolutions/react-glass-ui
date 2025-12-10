/**
 * GlassSidebar - A glassmorphism sidebar navigation component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef, createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassSidebarVariants = cva(
  [
    'flex flex-col',
    'bg-glass-card/70 backdrop-blur-glass',
    'border-r border-white/12',
    'shadow-glass',
    'transition-all duration-300',
  ],
  {
    variants: {
      position: {
        left: 'left-0',
        right: 'right-0 border-r-0 border-l',
      },
      variant: {
        default: '',
        floating: 'rounded-glass m-4 border shadow-glass-lg',
      },
    },
    defaultVariants: {
      position: 'left',
      variant: 'default',
    },
  }
);

const glassSidebarItemVariants = cva(
  [
    'relative flex items-center gap-3 px-4 py-3 rounded-xl',
    'text-sm font-medium text-white/70',
    'transition-all duration-200',
    'hover:text-white hover:bg-white/10',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-glass-cyan focus-visible:ring-inset',
  ],
  {
    variants: {
      active: {
        true: 'text-white bg-white/10',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

// Context for sidebar state
interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('Sidebar components must be used within GlassSidebar');
  }
  return context;
};

export interface GlassSidebarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassSidebarItemVariants> {
  /** Item icon */
  icon?: React.ReactNode;
  /** Item label */
  children: React.ReactNode;
  /** Link href */
  href?: string;
  /** Badge content */
  badge?: React.ReactNode;
}

export const GlassSidebarItem = forwardRef<HTMLButtonElement, GlassSidebarItemProps>(
  ({ children, active, icon, href, badge, className, ...props }, ref) => {
    const { collapsed } = useSidebar();

    const content = (
      <>
        {icon && <span className="shrink-0 w-5 h-5">{icon}</span>}
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="truncate"
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
        {badge && !collapsed && (
          <span className="ml-auto shrink-0">{badge}</span>
        )}
        {active && (
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-glass-cyan rounded-r-full"
            layoutId="sidebar-indicator"
            transition={{ duration: 0.2 }}
          />
        )}
      </>
    );

    const itemClasses = cn(
      glassSidebarItemVariants({ active }),
      collapsed && 'justify-center px-3',
      className
    );

    if (href) {
      return (
        <a href={href} className={itemClasses}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={itemClasses} {...props}>
        {content}
      </button>
    );
  }
);

GlassSidebarItem.displayName = 'GlassSidebarItem';

export interface GlassSidebarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof glassSidebarVariants> {
  /** Header content */
  header?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Navigation items */
  children: React.ReactNode;
  /** Collapsed state */
  collapsed?: boolean;
  /** Callback when collapsed state changes */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Default collapsed state */
  defaultCollapsed?: boolean;
  /** Collapsible */
  collapsible?: boolean;
  /** Width when expanded */
  width?: number;
  /** Width when collapsed */
  collapsedWidth?: number;
}

const ChevronIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    className={cn('w-4 h-4', direction === 'left' && 'rotate-180')}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

/**
 * GlassSidebar - A glassmorphism sidebar component
 *
 * @example
 * ```tsx
 * <GlassSidebar
 *   header={<Logo />}
 *   footer={<UserMenu />}
 *   collapsible
 * >
 *   <GlassSidebarItem icon={<HomeIcon />} active>
 *     Dashboard
 *   </GlassSidebarItem>
 *   <GlassSidebarItem icon={<SettingsIcon />}>
 *     Settings
 *   </GlassSidebarItem>
 * </GlassSidebar>
 * ```
 */
export const GlassSidebar = forwardRef<HTMLElement, GlassSidebarProps>(
  (
    {
      header,
      footer,
      children,
      position,
      variant,
      collapsed: controlledCollapsed,
      onCollapsedChange,
      defaultCollapsed = false,
      collapsible = false,
      width = 260,
      collapsedWidth = 72,
      className,
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const collapsed = controlledCollapsed ?? internalCollapsed;

    const setCollapsed = (value: boolean) => {
      setInternalCollapsed(value);
      onCollapsedChange?.(value);
    };

    const currentWidth = collapsed ? collapsedWidth : width;

    return (
      <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
        <motion.aside
          ref={ref}
          animate={{ width: currentWidth }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            glassSidebarVariants({ position, variant }),
            'h-full overflow-hidden',
            className
          )}
          {...props}
        >
          {/* Header */}
          {header && (
            <div className={cn('p-4 border-b border-white/12', collapsed && 'px-3')}>
              {header}
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {children}
          </nav>

          {/* Collapse Toggle */}
          {collapsible && (
            <div className="p-3 border-t border-white/12">
              <button
                onClick={() => setCollapsed(!collapsed)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-xl',
                  'text-sm font-medium text-white/70',
                  'hover:text-white hover:bg-white/10',
                  'transition-all duration-200',
                  collapsed && 'justify-center px-3'
                )}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <ChevronIcon direction={collapsed ? 'right' : 'left'} />
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Collapse
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          )}

          {/* Footer */}
          {footer && (
            <div className={cn('p-4 border-t border-white/12', collapsed && 'px-3')}>
              {footer}
            </div>
          )}
        </motion.aside>
      </SidebarContext.Provider>
    );
  }
);

GlassSidebar.displayName = 'GlassSidebar';

export default GlassSidebar;

