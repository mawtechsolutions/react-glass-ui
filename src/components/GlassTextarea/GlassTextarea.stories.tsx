/**
 * GlassTextarea Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassTextarea } from './GlassTextarea';

const meta: Meta<typeof GlassTextarea> = {
  title: 'Components/GlassTextarea',
  component: GlassTextarea,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    textareaSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the textarea',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GlassTextarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Write a short description that will appear on your profile.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message',
    value: 'Hi',
    error: 'Message must be at least 10 characters long',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Description',
    placeholder: 'Write a description...',
    showCount: true,
    maxLength: 200,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassTextarea textareaSize="sm" placeholder="Small textarea" label="Small" />
      <GlassTextarea textareaSize="md" placeholder="Medium textarea" label="Medium" />
      <GlassTextarea textareaSize="lg" placeholder="Large textarea" label="Large" />
    </div>
  ),
};

export const Resizable: Story = {
  args: {
    label: 'Resizable Textarea',
    placeholder: 'You can resize this vertically...',
    resize: 'vertical',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'This textarea is disabled and cannot be edited.',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassTextarea
        label="Feedback"
        placeholder="Share your feedback with us..."
        showCount
        maxLength={500}
        helperText="Your feedback helps us improve."
      />
    </div>
  ),
};

