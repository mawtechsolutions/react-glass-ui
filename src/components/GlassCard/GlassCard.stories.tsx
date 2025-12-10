/**
 * GlassCard Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassCard } from './GlassCard';

const meta: Meta<typeof GlassCard> = {
  title: 'Components/GlassCard',
  component: GlassCard,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'glow', 'glow-violet', 'glow-pink'],
      description: 'Visual variant of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Internal padding',
    },
    radius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius',
    },
    hoverable: {
      control: 'boolean',
      description: 'Enable hover lift effect',
    },
    innerLight: {
      control: 'boolean',
      description: 'Enable inner light effect',
    },
    disableAnimation: {
      control: 'boolean',
      description: 'Disable entrance animation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassCard>;

export const Default: Story = {
  args: {
    children: (
      <div className="text-white">
        <h3 className="text-xl font-semibold mb-2">Glass Card</h3>
        <p className="text-white/70">This is a beautiful glassmorphism card component.</p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <GlassCard variant="default">
        <p className="text-white font-medium">Default Variant</p>
        <p className="text-white/60 text-sm">Standard glass effect</p>
      </GlassCard>
      <GlassCard variant="elevated">
        <p className="text-white font-medium">Elevated Variant</p>
        <p className="text-white/60 text-sm">Stronger blur and shadow</p>
      </GlassCard>
      <GlassCard variant="outlined">
        <p className="text-white font-medium">Outlined Variant</p>
        <p className="text-white/60 text-sm">Subtle with thicker border</p>
      </GlassCard>
      <GlassCard variant="glow">
        <p className="text-white font-medium">Glow Variant (Cyan)</p>
        <p className="text-white/60 text-sm">Cyan glow effect</p>
      </GlassCard>
      <GlassCard variant="glow-violet">
        <p className="text-white font-medium">Glow Variant (Violet)</p>
        <p className="text-white/60 text-sm">Violet glow effect</p>
      </GlassCard>
      <GlassCard variant="glow-pink">
        <p className="text-white font-medium">Glow Variant (Pink)</p>
        <p className="text-white/60 text-sm">Pink glow effect</p>
      </GlassCard>
    </div>
  ),
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div className="text-white">
        <h3 className="text-xl font-semibold mb-2">Hover Me</h3>
        <p className="text-white/70">This card lifts on hover with a smooth animation.</p>
      </div>
    ),
  },
};

export const PaddingVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <GlassCard padding="none">
        <div className="p-2 text-white">No padding (p-0)</div>
      </GlassCard>
      <GlassCard padding="sm">
        <p className="text-white">Small padding (p-3)</p>
      </GlassCard>
      <GlassCard padding="md">
        <p className="text-white">Medium padding (p-5)</p>
      </GlassCard>
      <GlassCard padding="lg">
        <p className="text-white">Large padding (p-7)</p>
      </GlassCard>
      <GlassCard padding="xl">
        <p className="text-white">Extra large padding (p-9)</p>
      </GlassCard>
    </div>
  ),
};

export const RadiusVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <GlassCard radius="sm" className="w-32 h-32 flex items-center justify-center">
        <p className="text-white text-center text-sm">Small</p>
      </GlassCard>
      <GlassCard radius="md" className="w-32 h-32 flex items-center justify-center">
        <p className="text-white text-center text-sm">Medium</p>
      </GlassCard>
      <GlassCard radius="lg" className="w-32 h-32 flex items-center justify-center">
        <p className="text-white text-center text-sm">Large</p>
      </GlassCard>
      <GlassCard radius="xl" className="w-32 h-32 flex items-center justify-center">
        <p className="text-white text-center text-sm">XL</p>
      </GlassCard>
      <GlassCard radius="full" className="w-32 h-32 flex items-center justify-center">
        <p className="text-white text-center text-sm">Full</p>
      </GlassCard>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <GlassCard variant="glow" padding="lg" className="w-[400px]">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-glass-cyan to-glass-violet flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">Lightning Fast</h3>
          <p className="text-white/60 text-sm mt-1">
            Our components are optimized for performance with minimal bundle size.
          </p>
        </div>
      </div>
    </GlassCard>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[500px]">
      {['Cyan', 'Violet', 'Pink', 'Default'].map((color) => (
        <GlassCard
          key={color}
          variant={color === 'Default' ? 'default' : `glow-${color.toLowerCase()}` as any}
          hoverable
          className="aspect-square flex items-center justify-center"
        >
          <p className="text-white font-medium">{color}</p>
        </GlassCard>
      ))}
    </div>
  ),
};

