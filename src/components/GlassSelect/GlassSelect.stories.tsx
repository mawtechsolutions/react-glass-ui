/**
 * GlassSelect Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassSelect } from './GlassSelect';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

const meta: Meta<typeof GlassSelect> = {
  title: 'Components/GlassSelect',
  component: GlassSelect,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    selectSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make select full width',
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
type Story = StoryObj<typeof GlassSelect>;

export const Default: Story = {
  args: {
    placeholder: 'Select a country',
    options: countries,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: countries,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Region',
    placeholder: 'Select a region',
    options: countries,
    helperText: 'Choose the region for your account settings.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: countries,
    error: 'Please select a country',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassSelect
        selectSize="sm"
        placeholder="Small select"
        label="Small"
        options={countries}
      />
      <GlassSelect
        selectSize="md"
        placeholder="Medium select"
        label="Medium"
        options={countries}
      />
      <GlassSelect
        selectSize="lg"
        placeholder="Large select"
        label="Large"
        options={countries}
      />
    </div>
  ),
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Availability',
    placeholder: 'Select a region',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada (Coming Soon)', disabled: true },
      { value: 'au', label: 'Australia (Coming Soon)', disabled: true },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot change',
    options: countries,
    disabled: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: countries,
    defaultValue: 'uk',
  },
};

