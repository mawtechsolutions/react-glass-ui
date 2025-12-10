/**
 * GlassBadge Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlassBadge } from './GlassBadge';

const meta: Meta<typeof GlassBadge> = {
  title: 'Components/GlassBadge',
  component: GlassBadge,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'error', 'outline'],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    dot: {
      control: 'boolean',
      description: 'Show dot indicator',
    },
    dotColor: {
      control: 'select',
      options: ['cyan', 'violet', 'pink', 'success', 'warning', 'error'],
      description: 'Dot color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassBadge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <GlassBadge variant="default">Default</GlassBadge>
      <GlassBadge variant="primary">Primary</GlassBadge>
      <GlassBadge variant="secondary">Secondary</GlassBadge>
      <GlassBadge variant="accent">Accent</GlassBadge>
      <GlassBadge variant="success">Success</GlassBadge>
      <GlassBadge variant="warning">Warning</GlassBadge>
      <GlassBadge variant="error">Error</GlassBadge>
      <GlassBadge variant="outline">Outline</GlassBadge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <GlassBadge size="sm" variant="primary">Small</GlassBadge>
      <GlassBadge size="md" variant="primary">Medium</GlassBadge>
      <GlassBadge size="lg" variant="primary">Large</GlassBadge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <GlassBadge dot dotColor="cyan">Active</GlassBadge>
      <GlassBadge dot dotColor="success">Online</GlassBadge>
      <GlassBadge dot dotColor="warning">Away</GlassBadge>
      <GlassBadge dot dotColor="error">Busy</GlassBadge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <GlassBadge
        variant="primary"
        leftIcon={
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        }
      >
        Verified
      </GlassBadge>
      <GlassBadge
        variant="warning"
        leftIcon={
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        }
      >
        Warning
      </GlassBadge>
      <GlassBadge
        variant="success"
        rightIcon={
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        }
      >
        Next
      </GlassBadge>
    </div>
  ),
};

export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <GlassBadge variant="primary" onRemove={() => alert('Removed!')}>
        React
      </GlassBadge>
      <GlassBadge variant="secondary" onRemove={() => alert('Removed!')}>
        TypeScript
      </GlassBadge>
      <GlassBadge variant="accent" onRemove={() => alert('Removed!')}>
        Tailwind
      </GlassBadge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <GlassBadge variant="success" dot dotColor="success">
        Active
      </GlassBadge>
      <GlassBadge variant="warning" dot dotColor="warning">
        Pending
      </GlassBadge>
      <GlassBadge variant="error" dot dotColor="error">
        Failed
      </GlassBadge>
      <GlassBadge variant="default" dot dotColor="cyan">
        Processing
      </GlassBadge>
    </div>
  ),
};

export const NotificationCount: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="relative">
        <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <GlassBadge
          variant="error"
          size="sm"
          className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1"
        >
          3
        </GlassBadge>
      </div>
      
      <div className="relative">
        <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        <GlassBadge
          variant="primary"
          size="sm"
          className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1"
        >
          12
        </GlassBadge>
      </div>
    </div>
  ),
};

export const TagList: Story = {
  render: () => {
    const [tags, setTags] = React.useState([
      'JavaScript',
      'React',
      'TypeScript',
      'Node.js',
      'GraphQL',
    ]);

    return (
      <div className="flex flex-wrap gap-2 max-w-sm">
        {tags.map((tag) => (
          <GlassBadge
            key={tag}
            variant="default"
            onRemove={() => setTags(tags.filter((t) => t !== tag))}
          >
            {tag}
          </GlassBadge>
        ))}
      </div>
    );
  },
};

