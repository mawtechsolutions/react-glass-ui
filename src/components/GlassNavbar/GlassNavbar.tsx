/**
 * GlassNavbar - A glassmorphism navigation bar component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassNavbarVariants = cva(
  [
    'w-full bg-glass-card/70 backdrop-blur-glass',
    'border-b border-white/12',
    'shadow-glass-sm',
  ],
  {
    variants: {
      position: {
        static: 'relative',
        fixed: 'fixed top-0 left-0 right-0 z-50',
        sticky: 'sticky top-0 z-50',
      },
      size: {
        sm: 'h-14',
        md: 'h-16',
        lg: 'h-20',
      },
    },
    defaultVariants: {
      position: 'static',
      size: 'md',
    },
  }
);

const glassNavItemVariants = cva(
  [
    'relative px-4 py-2 rounded-lg',
    'text-sm font-medium text-white/70',
    'transition-all duration-200',
    'hover:text-white hover:bg-white/10',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-glass-cyan',
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

export interface GlassNavItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassNavItemVariants> {
  /** Item label */
  children: React.ReactNode;
  /** Icon to show */
  icon?: React.ReactNode;
  /** Link href (renders as anchor if provided) */
  href?: string;
}

export const GlassNavItem = forwardRef<HTMLButtonElement, GlassNavItemProps>(
  ({ children, active, icon, href, className, ...props }, ref) => {
    const content = (
      <>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
        {active && (
          <motion.div
            className="absolute bottom-0 left-2 right-2 h-0.5 bg-glass-cyan rounded-full"
            layoutId="navbar-indicator"
            transition={{ duration: 0.2 }}
          />
        )}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          className={cn(glassNavItemVariants({ active }), className)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(glassNavItemVariants({ active }), className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

GlassNavItem.displayName = 'GlassNavItem';

export interface GlassNavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof glassNavbarVariants> {
  /** Logo or brand element */
  logo?: React.ReactNode;
  /** Navigation items */
  children?: React.ReactNode;
  /** Right side actions */
  actions?: React.ReactNode;
  /** Container max width */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/**
 * GlassNavbar - A glassmorphism navigation component
 *
 * @example
 * ```tsx
 * <GlassNavbar
 *   logo={<Logo />}
 *   actions={<GlassButton>Sign In</GlassButton>}
 * >
 *   <GlassNavItem active>Home</GlassNavItem>
 *   <GlassNavItem>About</GlassNavItem>
 *   <GlassNavItem>Contact</GlassNavItem>
 * </GlassNavbar>
 * ```
 */
export const GlassNavbar = forwardRef<HTMLElement, GlassNavbarProps>(
  (
    {
      logo,
      children,
      actions,
      position,
      size,
      maxWidth = 'xl',
      className,
      ...props
    },
    ref
  ) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const maxWidthClasses = {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    };

    return (
      <nav
        ref={ref}
        className={cn(glassNavbarVariants({ position, size }), className)}
        {...props}
      >
        <div
          className={cn(
            'flex items-center justify-between h-full px-4 mx-auto',
            maxWidthClasses[maxWidth]
          )}
        >
          {/* Logo */}
          {logo && <div className="shrink-0">{logo}</div>}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {children}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">{actions}</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-glass-card/90 backdrop-blur-glass border-t border-white/12"
            >
              <div className="flex flex-col p-4 gap-2">
                {children}
                {actions && <div className="pt-4 border-t border-white/12 mt-2">{actions}</div>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }
);

GlassNavbar.displayName = 'GlassNavbar';

export default GlassNavbar;

