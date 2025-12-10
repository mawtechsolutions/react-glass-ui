/**
 * GlassToast Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlassToast, ToastProvider, useToastContext } from './GlassToast';
import { GlassButton } from '../GlassButton';

const meta: Meta<typeof GlassToast> = {
  title: 'Components/GlassToast',
  component: GlassToast,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'Visual variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassToast>;

export const Default: Story = {
  args: {
    title: 'Notification',
    description: 'This is a default toast notification.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <GlassToast
        variant="default"
        title="Default"
        description="This is a default notification."
      />
      <GlassToast
        variant="success"
        title="Success"
        description="Your action was completed successfully."
      />
      <GlassToast
        variant="error"
        title="Error"
        description="Something went wrong. Please try again."
      />
      <GlassToast
        variant="warning"
        title="Warning"
        description="Please review this before continuing."
      />
      <GlassToast
        variant="info"
        title="Info"
        description="Here's some helpful information for you."
      />
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    variant: 'success',
    title: 'Message Sent',
    description: 'Your message has been sent successfully.',
    action: {
      label: 'Undo',
      onClick: () => alert('Undo clicked!'),
    },
  },
};

export const WithClose: Story = {
  args: {
    title: 'Notification',
    description: 'Click the X to close this toast.',
    onClose: () => alert('Toast closed!'),
  },
};

// Interactive Demo with Provider
const ToastDemo = () => {
  const { addToast, clearToasts } = useToastContext();

  return (
    <div className="flex flex-wrap gap-4">
      <GlassButton
        onClick={() =>
          addToast({
            variant: 'default',
            title: 'Notification',
            description: 'This is a default notification.',
          })
        }
      >
        Default
      </GlassButton>
      <GlassButton
        variant="success"
        onClick={() =>
          addToast({
            variant: 'success',
            title: 'Success!',
            description: 'Your changes have been saved.',
          })
        }
      >
        Success
      </GlassButton>
      <GlassButton
        variant="danger"
        onClick={() =>
          addToast({
            variant: 'error',
            title: 'Error',
            description: 'Something went wrong.',
          })
        }
      >
        Error
      </GlassButton>
      <GlassButton
        variant="secondary"
        onClick={() =>
          addToast({
            variant: 'warning',
            title: 'Warning',
            description: 'Please check your input.',
          })
        }
      >
        Warning
      </GlassButton>
      <GlassButton
        variant="secondary"
        onClick={() =>
          addToast({
            variant: 'info',
            title: 'Info',
            description: 'Here is some information.',
          })
        }
      >
        Info
      </GlassButton>
      <GlassButton
        variant="ghost"
        onClick={() =>
          addToast({
            variant: 'success',
            title: 'With Action',
            description: 'This toast has an action button.',
            action: {
              label: 'View',
              onClick: () => alert('Action clicked!'),
            },
          })
        }
      >
        With Action
      </GlassButton>
      <GlassButton variant="ghost" onClick={clearToasts}>
        Clear All
      </GlassButton>
    </div>
  );
};

export const Interactive: Story = {
  render: () => (
    <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>
  ),
};

export const Positions: Story = {
  render: () => {
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ] as const;
    const [position, setPosition] = React.useState<typeof positions[number]>('top-right');

    return (
      <ToastProvider position={position} key={position}>
        <div className="space-y-4">
          <p className="text-white text-sm">Select position:</p>
          <div className="flex flex-wrap gap-2">
            {positions.map((pos) => (
              <GlassButton
                key={pos}
                variant={position === pos ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setPosition(pos)}
              >
                {pos}
              </GlassButton>
            ))}
          </div>
          <ToastTrigger />
        </div>
      </ToastProvider>
    );
  },
};

const ToastTrigger = () => {
  const { addToast } = useToastContext();
  return (
    <GlassButton
      onClick={() =>
        addToast({
          variant: 'info',
          title: 'Position Demo',
          description: 'Toast appears at selected position!',
        })
      }
    >
      Show Toast
    </GlassButton>
  );
};

