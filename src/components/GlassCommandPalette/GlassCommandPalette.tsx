/**
 * GlassCommandPalette - A glassmorphism command palette (⌘K) component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef, useState, useEffect, useCallback, useRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  group?: string;
  onSelect: () => void;
  disabled?: boolean;
}

export interface GlassCommandPaletteProps {
  /** Available commands */
  commands: CommandItem[];
  /** Whether the palette is open */
  open?: boolean;
  /** Called when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Placeholder text for search input */
  placeholder?: string;
  /** Empty state message */
  emptyMessage?: string;
  /** Custom filter function */
  filter?: (command: CommandItem, search: string) => boolean;
}

const SearchIcon = () => (
  <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

/**
 * GlassCommandPalette - A command palette for quick actions
 *
 * @example
 * ```tsx
 * <GlassCommandPalette
 *   commands={[
 *     { id: '1', label: 'Go to Dashboard', onSelect: () => navigate('/') },
 *     { id: '2', label: 'Create New', onSelect: () => openModal() },
 *   ]}
 * />
 * ```
 */
export const GlassCommandPalette = forwardRef<HTMLDivElement, GlassCommandPaletteProps>(
  (
    {
      commands,
      open: controlledOpen,
      onOpenChange,
      placeholder = 'Search commands...',
      emptyMessage = 'No commands found.',
      filter: customFilter,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const listRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const open = controlledOpen ?? internalOpen;
    const setOpen = onOpenChange ?? setInternalOpen;

    // Default filter function
    const defaultFilter = (command: CommandItem, searchTerm: string) => {
      const normalizedSearch = searchTerm.toLowerCase();
      return (
        command.label.toLowerCase().includes(normalizedSearch) ||
        command.description?.toLowerCase().includes(normalizedSearch) ||
        command.group?.toLowerCase().includes(normalizedSearch)
      );
    };

    const filterFn = customFilter ?? defaultFilter;

    // Filter commands based on search
    const filteredCommands = search
      ? commands.filter((cmd) => filterFn(cmd, search))
      : commands;

    // Group commands
    const groupedCommands = filteredCommands.reduce((acc, command) => {
      const group = command.group || 'Commands';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(command);
      return acc;
    }, {} as Record<string, CommandItem[]>);

    // Flatten for keyboard navigation
    const flatCommands = Object.values(groupedCommands).flat();

    // Keyboard shortcut to open
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          setOpen(!open);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, setOpen]);

    // Reset state when opening
    useEffect(() => {
      if (open) {
        setSearch('');
        setSelectedIndex(0);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }, [open]);

    // Keyboard navigation
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            setSelectedIndex((i) => Math.min(i + 1, flatCommands.length - 1));
            break;
          case 'ArrowUp':
            e.preventDefault();
            setSelectedIndex((i) => Math.max(i - 1, 0));
            break;
          case 'Enter':
            e.preventDefault();
            const command = flatCommands[selectedIndex];
            if (command && !command.disabled) {
              command.onSelect();
              setOpen(false);
            }
            break;
          case 'Escape':
            setOpen(false);
            break;
        }
      },
      [flatCommands, selectedIndex, setOpen]
    );

    // Scroll selected item into view
    useEffect(() => {
      const selectedElement = listRef.current?.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      selectedElement?.scrollIntoView({ block: 'nearest' });
    }, [selectedIndex]);

    // Reset selection when search changes
    useEffect(() => {
      setSelectedIndex(0);
    }, [search]);

    return (
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <AnimatePresence>
          {open && (
            <DialogPrimitive.Portal forceMount>
              <DialogPrimitive.Overlay asChild>
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
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
                  className={cn(
                    'fixed left-1/2 top-[20%] -translate-x-1/2',
                    'w-full max-w-xl',
                    'bg-glass-card/95 backdrop-blur-glass-lg',
                    'border border-white/12 rounded-2xl',
                    'shadow-glass-lg',
                    'overflow-hidden',
                    'z-[100]',
                    'focus:outline-none'
                  )}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  onKeyDown={handleKeyDown}
                >
                  {/* Search Input */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-white/12">
                    <SearchIcon />
                    <input
                      ref={inputRef}
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder={placeholder}
                      className={cn(
                        'flex-1 bg-transparent',
                        'text-white placeholder:text-white/40',
                        'focus:outline-none'
                      )}
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                    <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-white/40 bg-white/5 rounded border border-white/10">
                      ESC
                    </kbd>
                  </div>

                  {/* Command List */}
                  <div
                    ref={listRef}
                    className="max-h-[300px] overflow-y-auto p-2"
                    role="listbox"
                  >
                    {flatCommands.length === 0 ? (
                      <div className="py-8 text-center text-white/50">
                        {emptyMessage}
                      </div>
                    ) : (
                      Object.entries(groupedCommands).map(([group, items]) => (
                        <div key={group} className="mb-2 last:mb-0">
                          <div className="px-3 py-2 text-xs font-medium text-white/40 uppercase">
                            {group}
                          </div>
                          {items.map((command) => {
                            const index = flatCommands.indexOf(command);
                            const isSelected = index === selectedIndex;

                            return (
                              <button
                                key={command.id}
                                data-index={index}
                                onClick={() => {
                                  if (!command.disabled) {
                                    command.onSelect();
                                    setOpen(false);
                                  }
                                }}
                                onMouseEnter={() => setSelectedIndex(index)}
                                disabled={command.disabled}
                                className={cn(
                                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl',
                                  'text-left transition-colors duration-100',
                                  isSelected
                                    ? 'bg-white/10 text-white'
                                    : 'text-white/70 hover:text-white',
                                  command.disabled && 'opacity-50 cursor-not-allowed'
                                )}
                                role="option"
                                aria-selected={isSelected}
                              >
                                {command.icon && (
                                  <span className="shrink-0 w-5 h-5">
                                    {command.icon}
                                  </span>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium truncate">
                                    {command.label}
                                  </div>
                                  {command.description && (
                                    <div className="text-sm text-white/50 truncate">
                                      {command.description}
                                    </div>
                                  )}
                                </div>
                                {command.shortcut && (
                                  <kbd className="shrink-0 px-2 py-1 text-xs text-white/40 bg-white/5 rounded border border-white/10">
                                    {command.shortcut}
                                  </kbd>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      ))
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-4 py-2 border-t border-white/12 text-xs text-white/40">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10">↑↓</kbd>
                        <span>Navigate</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10">↵</kbd>
                        <span>Select</span>
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10">⌘K</kbd>
                      <span>Toggle</span>
                    </span>
                  </div>
                </motion.div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          )}
        </AnimatePresence>
      </DialogPrimitive.Root>
    );
  }
);

GlassCommandPalette.displayName = 'GlassCommandPalette';

export default GlassCommandPalette;

