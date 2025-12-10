/**
 * GlassModal Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlassModal, GlassModalClose } from './GlassModal';
import { GlassButton } from '../GlassButton';
import { GlassInput } from '../GlassInput';

const meta: Meta<typeof GlassModal> = {
  title: 'Components/GlassModal',
  component: GlassModal,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Size of the modal',
    },
    showClose: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassModal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <GlassModal
        open={open}
        onOpenChange={setOpen}
        trigger={<GlassButton>Open Modal</GlassButton>}
        title="Welcome"
        description="This is a beautiful glassmorphism modal."
      >
        <p className="text-white/70">
          This modal features a frosted glass effect with smooth animations.
        </p>
      </GlassModal>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
    const [openModal, setOpenModal] = useState<string | null>(null);

    return (
      <div className="flex flex-wrap gap-4">
        {sizes.map((size) => (
          <GlassModal
            key={size}
            open={openModal === size}
            onOpenChange={(open) => setOpenModal(open ? size : null)}
            trigger={<GlassButton variant="secondary">{size.toUpperCase()}</GlassButton>}
            title={`${size.toUpperCase()} Modal`}
            size={size}
          >
            <p className="text-white/70">
              This is a {size} sized modal. The content adjusts to the modal width.
            </p>
          </GlassModal>
        ))}
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <GlassModal
        open={open}
        onOpenChange={setOpen}
        trigger={<GlassButton>Sign In</GlassButton>}
        title="Sign In"
        description="Enter your credentials to continue."
        size="sm"
      >
        <div className="space-y-4">
          <GlassInput
            label="Email"
            type="email"
            placeholder="you@example.com"
          />
          <GlassInput
            label="Password"
            type="password"
            placeholder="••••••••"
          />
          <div className="flex gap-3 pt-2">
            <GlassModalClose asChild>
              <GlassButton variant="ghost" fullWidth>
                Cancel
              </GlassButton>
            </GlassModalClose>
            <GlassButton fullWidth>Sign In</GlassButton>
          </div>
        </div>
      </GlassModal>
    );
  },
};

export const ConfirmDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <GlassModal
        open={open}
        onOpenChange={setOpen}
        trigger={<GlassButton variant="danger">Delete Account</GlassButton>}
        title="Delete Account?"
        description="This action cannot be undone. All your data will be permanently deleted."
        size="sm"
      >
        <div className="flex gap-3 pt-4">
          <GlassModalClose asChild>
            <GlassButton variant="ghost" fullWidth>
              Cancel
            </GlassButton>
          </GlassModalClose>
          <GlassButton variant="danger" fullWidth>
            Delete
          </GlassButton>
        </div>
      </GlassModal>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <GlassModal
        open={open}
        onOpenChange={setOpen}
        trigger={<GlassButton>Terms & Conditions</GlassButton>}
        title="Terms of Service"
        showClose={false}
        size="lg"
      >
        <div className="max-h-60 overflow-y-auto text-white/70 text-sm mb-4 pr-2">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="flex gap-3">
          <GlassModalClose asChild>
            <GlassButton variant="ghost" fullWidth>
              Decline
            </GlassButton>
          </GlassModalClose>
          <GlassModalClose asChild>
            <GlassButton fullWidth>Accept</GlassButton>
          </GlassModalClose>
        </div>
      </GlassModal>
    );
  },
};

export const CustomContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <GlassModal
        open={open}
        onOpenChange={setOpen}
        trigger={<GlassButton variant="aurora">View Profile</GlassButton>}
        size="md"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-glass-cyan to-glass-violet flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">JD</span>
          </div>
          <h2 className="text-xl font-semibold text-white">John Doe</h2>
          <p className="text-white/60 text-sm">@johndoe</p>
          <p className="text-white/70 mt-4 mb-6">
            Full-stack developer passionate about building beautiful user interfaces.
          </p>
          <div className="flex gap-3 w-full">
            <GlassButton variant="secondary" fullWidth>
              Message
            </GlassButton>
            <GlassButton fullWidth>Follow</GlassButton>
          </div>
        </div>
      </GlassModal>
    );
  },
};

