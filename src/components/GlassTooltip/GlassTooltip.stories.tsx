/**
 * GlassTooltip Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassTooltip } from './GlassTooltip';
import { GlassButton } from '../GlassButton';

const meta: Meta<typeof GlassTooltip> = {
  title: 'Components/GlassTooltip',
  component: GlassTooltip,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side to show tooltip',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of tooltip',
    },
    variant: {
      control: 'select',
      options: ['default', 'glow'],
      description: 'Visual variant',
    },
    showArrow: {
      control: 'boolean',
      description: 'Show arrow',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassTooltip>;

export const Default: Story = {
  render: () => (
    <GlassTooltip content="This is a tooltip">
      <GlassButton>Hover me</GlassButton>
    </GlassTooltip>
  ),
};

export const AllSides: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-16">
      <div />
      <GlassTooltip content="Top tooltip" side="top">
        <GlassButton variant="secondary" fullWidth>Top</GlassButton>
      </GlassTooltip>
      <div />
      
      <GlassTooltip content="Left tooltip" side="left">
        <GlassButton variant="secondary" fullWidth>Left</GlassButton>
      </GlassTooltip>
      <div />
      <GlassTooltip content="Right tooltip" side="right">
        <GlassButton variant="secondary" fullWidth>Right</GlassButton>
      </GlassTooltip>
      
      <div />
      <GlassTooltip content="Bottom tooltip" side="bottom">
        <GlassButton variant="secondary" fullWidth>Bottom</GlassButton>
      </GlassTooltip>
      <div />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassTooltip content="Default tooltip" variant="default">
        <GlassButton variant="secondary">Default</GlassButton>
      </GlassTooltip>
      <GlassTooltip content="Glow tooltip" variant="glow">
        <GlassButton>Glow</GlassButton>
      </GlassTooltip>
    </div>
  ),
};

export const WithoutArrow: Story = {
  render: () => (
    <GlassTooltip content="No arrow tooltip" showArrow={false}>
      <GlassButton variant="secondary">No Arrow</GlassButton>
    </GlassTooltip>
  ),
};

export const RichContent: Story = {
  render: () => (
    <GlassTooltip
      content={
        <div className="space-y-1">
          <p className="font-medium">Keyboard Shortcut</p>
          <p className="text-white/60 text-xs">Press ⌘K to open command palette</p>
        </div>
      }
    >
      <GlassButton variant="secondary">Rich Tooltip</GlassButton>
    </GlassTooltip>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassTooltip content="Instant (0ms)" delayDuration={0}>
        <GlassButton variant="secondary">Instant</GlassButton>
      </GlassTooltip>
      <GlassTooltip content="Fast (100ms)" delayDuration={100}>
        <GlassButton variant="secondary">Fast</GlassButton>
      </GlassTooltip>
      <GlassTooltip content="Normal (200ms)" delayDuration={200}>
        <GlassButton variant="secondary">Normal</GlassButton>
      </GlassTooltip>
      <GlassTooltip content="Slow (500ms)" delayDuration={500}>
        <GlassButton variant="secondary">Slow</GlassButton>
      </GlassTooltip>
    </div>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <GlassTooltip content="Edit">
        <GlassButton variant="ghost" className="!p-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </GlassButton>
      </GlassTooltip>
      
      <GlassTooltip content="Duplicate">
        <GlassButton variant="ghost" className="!p-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </GlassButton>
      </GlassTooltip>
      
      <GlassTooltip content="Delete">
        <GlassButton variant="ghost" className="!p-2 text-red-400 hover:text-red-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </GlassButton>
      </GlassTooltip>
    </div>
  ),
};

