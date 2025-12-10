/**
 * GlassAvatar Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassAvatar, GlassAvatarGroup } from './GlassAvatar';

const meta: Meta<typeof GlassAvatar> = {
  title: 'Components/GlassAvatar',
  component: GlassAvatar,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
    },
    variant: {
      control: 'select',
      options: ['default', 'gradient', 'glow'],
      description: 'Visual variant',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy', undefined],
      description: 'Status indicator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassAvatar>;

export const Default: Story = {
  args: {
    fallback: 'John Doe',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'John Doe',
    fallback: 'JD',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <GlassAvatar size="xs" fallback="XS" />
      <GlassAvatar size="sm" fallback="SM" />
      <GlassAvatar size="md" fallback="MD" />
      <GlassAvatar size="lg" fallback="LG" />
      <GlassAvatar size="xl" fallback="XL" />
      <GlassAvatar size="2xl" fallback="2X" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassAvatar shape="circle" fallback="C" size="lg" />
      <GlassAvatar shape="square" fallback="S" size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassAvatar variant="default" fallback="DF" size="lg" />
      <GlassAvatar variant="gradient" fallback="GR" size="lg" />
      <GlassAvatar variant="glow" fallback="GL" size="lg" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassAvatar fallback="On" status="online" size="lg" />
      <GlassAvatar fallback="Of" status="offline" size="lg" />
      <GlassAvatar fallback="Aw" status="away" size="lg" />
      <GlassAvatar fallback="Bu" status="busy" size="lg" />
    </div>
  ),
};

export const Fallback: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassAvatar fallback="John Doe" size="lg" />
      <GlassAvatar fallback="Jane Smith" size="lg" />
      <GlassAvatar fallback="Bob Wilson" variant="gradient" size="lg" />
    </div>
  ),
};

export const BrokenImage: Story = {
  args: {
    src: 'https://broken-image-url.com/image.jpg',
    fallback: 'JD',
    size: 'lg',
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <GlassAvatarGroup>
      <GlassAvatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        fallback="JD"
      />
      <GlassAvatar
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
        fallback="JS"
      />
      <GlassAvatar variant="gradient" fallback="BW" />
      <GlassAvatar variant="gradient" fallback="AK" />
    </GlassAvatarGroup>
  ),
};

export const AvatarGroupWithMax: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-white/60 text-sm mb-2">Max 3</p>
        <GlassAvatarGroup max={3}>
          <GlassAvatar fallback="JD" />
          <GlassAvatar fallback="JS" />
          <GlassAvatar fallback="BW" />
          <GlassAvatar fallback="AK" />
          <GlassAvatar fallback="MJ" />
        </GlassAvatarGroup>
      </div>
      <div>
        <p className="text-white/60 text-sm mb-2">Max 5</p>
        <GlassAvatarGroup max={5} size="lg">
          <GlassAvatar fallback="JD" />
          <GlassAvatar fallback="JS" />
          <GlassAvatar fallback="BW" />
          <GlassAvatar fallback="AK" />
          <GlassAvatar fallback="MJ" />
          <GlassAvatar fallback="TK" />
          <GlassAvatar fallback="LP" />
        </GlassAvatarGroup>
      </div>
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <GlassAvatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        fallback="JD"
        size="xl"
        status="online"
      />
      <div>
        <p className="text-white font-medium">John Doe</p>
        <p className="text-white/60 text-sm">@johndoe</p>
      </div>
    </div>
  ),
};

