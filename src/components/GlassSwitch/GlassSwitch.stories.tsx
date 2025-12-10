/**
 * GlassSwitch Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GlassSwitch } from './GlassSwitch';

const meta: Meta<typeof GlassSwitch> = {
  title: 'Components/GlassSwitch',
  component: GlassSwitch,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    switchSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassSwitch>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Dark mode',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Notifications',
    description: 'Receive push notifications on your device',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassSwitch switchSize="sm" label="Small switch" />
      <GlassSwitch switchSize="md" label="Medium switch" />
      <GlassSwitch switchSize="lg" label="Large switch" />
    </div>
  ),
};

export const LabelOnLeft: Story = {
  args: {
    label: 'Enable feature',
    labelPosition: 'left',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enabled by default',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassSwitch label="Disabled off" disabled />
      <GlassSwitch label="Disabled on" disabled defaultChecked />
    </div>
  ),
};

export const SettingsExample: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Preferences</h3>
        
        <div className="flex justify-between items-center">
          <GlassSwitch
            label="Dark mode"
            description="Use dark theme"
            labelPosition="left"
            defaultChecked
          />
        </div>
        
        <div className="flex justify-between items-center">
          <GlassSwitch
            label="Auto-save"
            description="Save changes automatically"
            labelPosition="left"
            defaultChecked
          />
        </div>
        
        <div className="flex justify-between items-center">
          <GlassSwitch
            label="Show hints"
            description="Display helpful tips"
            labelPosition="left"
          />
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-6 space-y-4">
        <h3 className="text-lg font-semibold text-white">Notifications</h3>
        
        <div className="flex justify-between items-center">
          <GlassSwitch
            label="Email"
            labelPosition="left"
            defaultChecked
          />
        </div>
        
        <div className="flex justify-between items-center">
          <GlassSwitch
            label="Push"
            labelPosition="left"
          />
        </div>
        
        <div className="flex justify-between items-center">
          <GlassSwitch
            label="SMS"
            labelPosition="left"
            disabled
          />
        </div>
      </div>
    </div>
  ),
};

