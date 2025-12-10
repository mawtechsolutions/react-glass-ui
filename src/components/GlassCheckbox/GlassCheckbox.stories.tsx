/**
 * GlassCheckbox Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassCheckbox } from './GlassCheckbox';

const meta: Meta<typeof GlassCheckbox> = {
  title: 'Components/GlassCheckbox',
  component: GlassCheckbox,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    checkboxSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassCheckbox>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive emails about new products, features, and more.',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassCheckbox checkboxSize="sm" label="Small checkbox" />
      <GlassCheckbox checkboxSize="md" label="Medium checkbox" />
      <GlassCheckbox checkboxSize="lg" label="Large checkbox" />
    </div>
  ),
};

export const Checked: Story = {
  args: {
    label: 'Checked by default',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassCheckbox label="Disabled unchecked" disabled />
      <GlassCheckbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm font-medium text-white mb-2">Notification preferences</p>
      <GlassCheckbox
        label="Email notifications"
        description="Get notified via email"
        defaultChecked
      />
      <GlassCheckbox
        label="Push notifications"
        description="Get notified on your device"
      />
      <GlassCheckbox
        label="SMS notifications"
        description="Get notified via text message"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-4">
        <p className="text-sm font-medium text-white">Select your interests</p>
        <GlassCheckbox label="Technology" defaultChecked />
        <GlassCheckbox label="Design" />
        <GlassCheckbox label="Business" defaultChecked />
        <GlassCheckbox label="Marketing" />
      </div>
      <div className="pt-4 border-t border-white/10">
        <GlassCheckbox
          label="I agree to the terms"
          description="By checking this, you agree to our Terms of Service and Privacy Policy."
        />
      </div>
    </div>
  ),
};

