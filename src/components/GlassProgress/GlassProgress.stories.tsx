/**
 * GlassProgress Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlassProgress, GlassCircularProgress } from './GlassProgress';

const meta: Meta<typeof GlassProgress> = {
  title: 'Components/GlassProgress',
  component: GlassProgress,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the progress bar',
    },
    color: {
      control: 'select',
      options: ['cyan', 'violet', 'pink', 'success', 'warning', 'error', 'aurora'],
      description: 'Color variant',
    },
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Progress value',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GlassProgress>;

export const Default: Story = {
  args: {
    value: 60,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-white/60 text-sm mb-2">Small</p>
        <GlassProgress value={60} size="sm" />
      </div>
      <div>
        <p className="text-white/60 text-sm mb-2">Medium</p>
        <GlassProgress value={60} size="md" />
      </div>
      <div>
        <p className="text-white/60 text-sm mb-2">Large</p>
        <GlassProgress value={60} size="lg" />
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassProgress value={80} color="cyan" showLabel />
      <GlassProgress value={70} color="violet" showLabel />
      <GlassProgress value={60} color="pink" showLabel />
      <GlassProgress value={90} color="success" showLabel />
      <GlassProgress value={50} color="warning" showLabel />
      <GlassProgress value={40} color="error" showLabel />
      <GlassProgress value={65} color="aurora" showLabel />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Animated: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setValue((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 500);
      return () => clearInterval(interval);
    }, []);

    return <GlassProgress value={value} showLabel color="aurora" />;
  },
};

export const GlowVariant: Story = {
  args: {
    value: 75,
    variant: 'glow',
    showLabel: true,
  },
};

// Circular Progress Stories
export const Circular: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <GlassCircularProgress value={75} showLabel />
      <GlassCircularProgress value={50} color="violet" showLabel />
      <GlassCircularProgress value={90} color="success" showLabel />
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <GlassCircularProgress value={75} size={32} strokeWidth={3} showLabel />
      <GlassCircularProgress value={75} size={48} strokeWidth={4} showLabel />
      <GlassCircularProgress value={75} size={64} strokeWidth={5} showLabel />
      <GlassCircularProgress value={75} size={96} strokeWidth={6} showLabel />
    </div>
  ),
};

export const CircularIndeterminate: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <GlassCircularProgress indeterminate />
      <GlassCircularProgress indeterminate color="violet" />
      <GlassCircularProgress indeterminate color="pink" />
    </div>
  ),
};

export const CircularWithCustomLabel: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <GlassCircularProgress
        value={75}
        size={80}
        label={
          <div className="text-center">
            <div className="text-lg font-bold text-white">75</div>
            <div className="text-xs text-white/50">tasks</div>
          </div>
        }
      />
      <GlassCircularProgress
        value={4.5}
        size={80}
        color="success"
        label={
          <div className="text-center">
            <div className="text-lg font-bold text-white">4.5</div>
            <div className="text-xs text-white/50">rating</div>
          </div>
        }
      />
    </div>
  ),
};

export const UploadProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);

    const startUpload = () => {
      setUploading(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 300);
    };

    return (
      <div className="space-y-4">
        <GlassProgress
          value={progress}
          showLabel
          color={progress >= 100 ? 'success' : 'cyan'}
        />
        <button
          onClick={startUpload}
          disabled={uploading}
          className="text-sm text-glass-cyan hover:text-glass-cyan/80 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : progress >= 100 ? 'Upload Complete!' : 'Start Upload'}
        </button>
      </div>
    );
  },
};

