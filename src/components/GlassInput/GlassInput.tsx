/**
 * GlassInput - A glassmorphism input component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassInputVariants = cva(
  [
    'w-full bg-glass-card/50 backdrop-blur-glass',
    'border border-white/12 rounded-xl',
    'text-white placeholder:text-white/40',
    'transition-all duration-200',
    'focus:outline-none focus:border-glass-cyan/50 focus:shadow-glass-glow',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      inputSize: {
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
      inputSize: 'md',
      hasError: false,
    },
  }
);

export interface GlassInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof glassInputVariants> {
  /** Input label */
  label?: string;
  /** Helper text below input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Icon on the left side */
  leftIcon?: React.ReactNode;
  /** Icon on the right side */
  rightIcon?: React.ReactNode;
  /** Full width input */
  fullWidth?: boolean;
  /** Additional container classes */
  containerClassName?: string;
}

/**
 * GlassInput - A glassmorphism input component
 *
 * @example
 * ```tsx
 * <GlassInput
 *   label="Email"
 *   placeholder="Enter your email"
 *   type="email"
 * />
 * ```
 */
export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  (
    {
      label,
      helperText,
      error,
      inputSize,
      leftIcon,
      rightIcon,
      fullWidth = true,
      disabled,
      className,
      containerClassName,
      type = 'text',
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
    const inputId = id || `glass-input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full', containerClassName)}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-white/80">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={inputType}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            className={cn(
              glassInputVariants({ inputSize, hasError: !!error }),
              leftIcon && 'pl-10',
              (rightIcon || isPassword) && 'pr-10',
              className
            )}
            {...props}
          />

          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          ) : rightIcon ? (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
              {rightIcon}
            </div>
          ) : null}
        </div>

        {(error || helperText) && (
          <p
            id={error ? `${inputId}-error` : `${inputId}-helper`}
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

GlassInput.displayName = 'GlassInput';

export default GlassInput;

