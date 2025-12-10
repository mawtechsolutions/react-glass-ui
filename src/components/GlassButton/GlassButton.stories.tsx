/**
 * GlassButton Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassButton } from './GlassButton';

const meta: Meta<typeof GlassButton> = {
  title: 'Components/GlassButton',
  component: GlassButton,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline', 'danger', 'success', 'aurora', 'violet', 'pink'],
      description: 'Visual variant of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassButton>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 max-w-2xl">
      <GlassButton variant="primary">Primary</GlassButton>
      <GlassButton variant="secondary">Secondary</GlassButton>
      <GlassButton variant="ghost">Ghost</GlassButton>
      <GlassButton variant="outline">Outline</GlassButton>
      <GlassButton variant="danger">Danger</GlassButton>
      <GlassButton variant="success">Success</GlassButton>
      <GlassButton variant="aurora">Aurora</GlassButton>
      <GlassButton variant="violet">Violet</GlassButton>
      <GlassButton variant="pink">Pink</GlassButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <GlassButton size="xs">Extra Small</GlassButton>
      <GlassButton size="sm">Small</GlassButton>
      <GlassButton size="md">Medium</GlassButton>
      <GlassButton size="lg">Large</GlassButton>
      <GlassButton size="xl">Extra Large</GlassButton>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <GlassButton
        leftIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        }
      >
        Add Item
      </GlassButton>
      <GlassButton
        variant="secondary"
        rightIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        }
      >
        Continue
      </GlassButton>
      <GlassButton
        variant="ghost"
        leftIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        }
      >
        Upload
      </GlassButton>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassButton loading>Loading...</GlassButton>
      <GlassButton variant="secondary" loading>Processing</GlassButton>
      <GlassButton variant="aurora" loading>Saving</GlassButton>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassButton disabled>Disabled Primary</GlassButton>
      <GlassButton variant="secondary" disabled>Disabled Secondary</GlassButton>
      <GlassButton variant="ghost" disabled>Disabled Ghost</GlassButton>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <GlassButton fullWidth>Full Width Primary</GlassButton>
      <GlassButton variant="secondary" fullWidth>Full Width Secondary</GlassButton>
      <GlassButton variant="outline" fullWidth>Full Width Outline</GlassButton>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassButton size="sm" className="!px-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </GlassButton>
      <GlassButton variant="secondary" className="!px-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </GlassButton>
      <GlassButton variant="ghost" size="lg" className="!px-3">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </GlassButton>
    </div>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex">
      <GlassButton className="rounded-r-none border-r-0">Left</GlassButton>
      <GlassButton variant="secondary" className="rounded-none border-x-0">Center</GlassButton>
      <GlassButton className="rounded-l-none border-l-0">Right</GlassButton>
    </div>
  ),
};

