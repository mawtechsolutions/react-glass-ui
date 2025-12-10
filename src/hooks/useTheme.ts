/**
 * useTheme - Hook for managing theme state
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { useState, useEffect, useCallback, useMemo } from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export interface UseThemeReturn {
  /** Current theme setting */
  theme: Theme;
  /** Resolved theme (system resolved to light or dark) */
  resolvedTheme: ResolvedTheme;
  /** Set theme */
  setTheme: (theme: Theme) => void;
  /** Toggle between light and dark */
  toggle: () => void;
  /** Whether the current theme is dark */
  isDark: boolean;
  /** Whether the current theme is light */
  isLight: boolean;
}

export interface UseThemeOptions {
  /** Default theme */
  defaultTheme?: Theme;
  /** Storage key for persistence */
  storageKey?: string;
  /** Attribute to set on document element */
  attribute?: string;
}

const STORAGE_KEY = 'glass-ui-theme';
const ATTRIBUTE = 'class';

/**
 * useTheme - Hook for managing theme (light/dark mode)
 *
 * @example
 * ```tsx
 * const { theme, setTheme, toggle, isDark } = useTheme();
 *
 * return (
 *   <GlassButton onClick={toggle}>
 *     {isDark ? 'Light Mode' : 'Dark Mode'}
 *   </GlassButton>
 * );
 * ```
 */
export function useTheme(options: UseThemeOptions = {}): UseThemeReturn {
  const {
    defaultTheme = 'system',
    storageKey = STORAGE_KEY,
    attribute = ATTRIBUTE,
  } = options;

  // Get initial theme from storage or default
  const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }

    const stored = localStorage.getItem(storageKey);
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored as Theme;
    }

    return defaultTheme;
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Get system preference
  const getSystemTheme = useCallback((): ResolvedTheme => {
    if (typeof window === 'undefined') {
      return 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }, []);

  // Resolve theme to light or dark
  const resolvedTheme = useMemo((): ResolvedTheme => {
    if (theme === 'system') {
      return getSystemTheme();
    }
    return theme;
  }, [theme, getSystemTheme]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    if (attribute === 'class') {
      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);
    } else {
      root.setAttribute(attribute, resolvedTheme);
    }
  }, [resolvedTheme, attribute]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      if (theme === 'system') {
        // Force re-render to update resolvedTheme
        setThemeState('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Set theme
  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, newTheme);
      }
    },
    [storageKey]
  );

  // Toggle between light and dark
  const toggle = useCallback(() => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }, [resolvedTheme, setTheme]);

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggle,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
  };
}

export default useTheme;

