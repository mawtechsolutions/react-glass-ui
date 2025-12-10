/**
 * GlassSelect - A glassmorphism select component using Radix UI
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassSelectTriggerVariants = cva(
  [
    'flex items-center justify-between gap-2',
    'w-full bg-glass-card/50 backdrop-blur-glass',
    'border border-white/12 rounded-xl',
    'text-white',
    'transition-all duration-200',
    'focus:outline-none focus:border-glass-cyan/50 focus:shadow-glass-glow',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'data-[placeholder]:text-white/40',
  ],
  {
    variants: {
      selectSize: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-base',
        lg: 'h-13 px-5 text-lg',
      },
      hasError: {
        true: 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_40px_rgba(239,68,68,0.2)]',
        false: '',
      },
    },
    defaultVariants: {
      selectSize: 'md',
      hasError: false,
    },
  }
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface GlassSelectProps
  extends Omit<SelectPrimitive.SelectProps, 'children'>,
    VariantProps<typeof glassSelectTriggerVariants> {
  /** Select label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Options to display */
  options: SelectOption[];
  /** Helper text below select */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Full width select */
  fullWidth?: boolean;
  /** Additional container classes */
  containerClassName?: string;
  /** Additional trigger classes */
  triggerClassName?: string;
}

const SelectIcon = () => (
  <svg
    className="w-4 h-4 text-white/50"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const CheckIcon = () => (
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
      d="M5 13l4 4L19 7"
    />
  </svg>
);

/**
 * GlassSelect - A glassmorphism select component
 *
 * @example
 * ```tsx
 * <GlassSelect
 *   label="Country"
 *   placeholder="Select a country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 * />
 * ```
 */
export const GlassSelect = forwardRef<HTMLButtonElement, GlassSelectProps>(
  (
    {
      label,
      placeholder = 'Select an option',
      options,
      helperText,
      error,
      selectSize,
      fullWidth = true,
      containerClassName,
      triggerClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const selectId = `glass-select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full', containerClassName)}>
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-white/80">
            {label}
          </label>
        )}

        <SelectPrimitive.Root disabled={disabled} {...props}>
          <SelectPrimitive.Trigger
            ref={ref}
            id={selectId}
            className={cn(
              glassSelectTriggerVariants({ selectSize, hasError: !!error }),
              triggerClassName
            )}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon asChild>
              <SelectIcon />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={cn(
                'overflow-hidden rounded-xl',
                'bg-glass-card/95 backdrop-blur-glass-lg',
                'border border-white/12',
                'shadow-glass-lg',
                'animate-scale-in',
                'z-50'
              )}
              position="popper"
              sideOffset={4}
            >
              <SelectPrimitive.Viewport className="p-1">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={cn(
                      'relative flex items-center px-3 py-2 rounded-lg',
                      'text-sm text-white',
                      'cursor-pointer select-none outline-none',
                      'data-[highlighted]:bg-white/10',
                      'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
                      'transition-colors duration-150'
                    )}
                  >
                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute right-2">
                      <CheckIcon />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {(error || helperText) && (
          <p
            id={error ? `${selectId}-error` : `${selectId}-helper`}
            className={cn('text-sm', error ? 'text-red-400' : 'text-white/50')}
            role={error ? 'alert' : undefined}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

GlassSelect.displayName = 'GlassSelect';

export default GlassSelect;

