/**
 * GlassInput Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassInput } from './GlassInput';

const meta: Meta<typeof GlassInput> = {
  title: 'Components/GlassInput',
  component: GlassInput,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make input full width',
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
type Story = StoryObj<typeof GlassInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Your username must be unique and contain only letters and numbers.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Must be at least 8 characters long',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassInput inputSize="sm" placeholder="Small input" label="Small" />
      <GlassInput inputSize="md" placeholder="Medium input" label="Medium" />
      <GlassInput inputSize="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassInput
        label="Search"
        placeholder="Search..."
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      />
      <GlassInput
        label="Email"
        type="email"
        placeholder="you@example.com"
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
      />
      <GlassInput
        label="Website"
        type="url"
        placeholder="https://example.com"
        rightIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        }
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'Disabled value',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassInput
        label="Full Name"
        placeholder="John Doe"
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
      />
      <GlassInput
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
      />
      <GlassInput
        label="Password"
        type="password"
        placeholder="••••••••"
        helperText="Minimum 8 characters"
      />
    </div>
  ),
};

