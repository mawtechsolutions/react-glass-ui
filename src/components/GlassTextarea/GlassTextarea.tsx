/**
 * GlassTextarea - A glassmorphism textarea component
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { forwardRef, useState, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const glassTextareaVariants = cva(
  [
    'w-full bg-glass-card/50 backdrop-blur-glass',
    'border border-white/12 rounded-xl',
    'text-white placeholder:text-white/40',
    'transition-all duration-200',
    'focus:outline-none focus:border-glass-cyan/50 focus:shadow-glass-glow',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'resize-none',
  ],
  {
    variants: {
      textareaSize: {
        sm: 'p-3 text-sm min-h-[80px]',
        md: 'p-4 text-base min-h-[120px]',
        lg: 'p-5 text-lg min-h-[160px]',
      },
      hasError: {
        true: 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_40px_rgba(239,68,68,0.2)]',
        false: '',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
    },
    defaultVariants: {
      textareaSize: 'md',
      hasError: false,
      resize: 'none',
    },
  }
);

export interface GlassTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof glassTextareaVariants> {
  /** Textarea label */
  label?: string;
  /** Helper text below textarea */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
  /** Full width textarea */
  fullWidth?: boolean;
  /** Additional container classes */
  containerClassName?: string;
}

/**
 * GlassTextarea - A glassmorphism textarea component
 *
 * @example
 * ```tsx
 * <GlassTextarea
 *   label="Message"
 *   placeholder="Enter your message"
 *   showCount
 *   maxLength={500}
 * />
 * ```
 */
export const GlassTextarea = forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
  (
    {
      label,
      helperText,
      error,
      textareaSize,
      resize,
      showCount = false,
      maxLength,
      fullWidth = true,
      disabled,
      className,
      containerClassName,
      value,
      defaultValue,
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    const [charCount, setCharCount] = useState(
      String(value || defaultValue || '').length
    );
    const textareaId = id || `glass-textarea-${Math.random().toString(36).substr(2, 9)}`;

    useEffect(() => {
      if (value !== undefined) {
        setCharCount(String(value).length);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full', containerClassName)}>
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-white/80">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          className={cn(
            glassTextareaVariants({ textareaSize, hasError: !!error, resize }),
            className
          )}
          {...props}
        />

        <div className="flex justify-between items-center">
          {(error || helperText) && (
            <p
              id={error ? `${textareaId}-error` : `${textareaId}-helper`}
              className={cn('text-sm', error ? 'text-red-400' : 'text-white/50')}
              role={error ? 'alert' : undefined}
            >
              {error || helperText}
            </p>
          )}
          
          {showCount && (
            <p
              className={cn(
                'text-sm text-white/50 ml-auto',
                maxLength && charCount > maxLength && 'text-red-400'
              )}
            >
              {charCount}
              {maxLength && `/${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

GlassTextarea.displayName = 'GlassTextarea';

export default GlassTextarea;

