/**
 * GlassTabs Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  GlassTabs,
  GlassTabsList,
  GlassTabsTrigger,
  GlassTabsContent,
} from './GlassTabs';
import { GlassCard } from '../GlassCard';

const meta: Meta<typeof GlassTabs> = {
  title: 'Components/GlassTabs',
  component: GlassTabs,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GlassTabs>;

export const Default: Story = {
  render: () => (
    <GlassTabs defaultValue="account">
      <GlassTabsList>
        <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
        <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
        <GlassTabsTrigger value="notifications">Notifications</GlassTabsTrigger>
      </GlassTabsList>
      <GlassTabsContent value="account">
        <GlassCard>
          <h3 className="text-lg font-semibold text-white mb-2">Account Settings</h3>
          <p className="text-white/60">
            Manage your account information and preferences.
          </p>
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="password">
        <GlassCard>
          <h3 className="text-lg font-semibold text-white mb-2">Password Settings</h3>
          <p className="text-white/60">
            Update your password and security settings.
          </p>
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="notifications">
        <GlassCard>
          <h3 className="text-lg font-semibold text-white mb-2">Notification Settings</h3>
          <p className="text-white/60">
            Configure how and when you receive notifications.
          </p>
        </GlassCard>
      </GlassTabsContent>
    </GlassTabs>
  ),
};

export const PillsVariant: Story = {
  render: () => (
    <GlassTabs defaultValue="overview">
      <GlassTabsList variant="pills">
        <GlassTabsTrigger value="overview" variant="pills">Overview</GlassTabsTrigger>
        <GlassTabsTrigger value="analytics" variant="pills">Analytics</GlassTabsTrigger>
        <GlassTabsTrigger value="reports" variant="pills">Reports</GlassTabsTrigger>
      </GlassTabsList>
      <GlassTabsContent value="overview">
        <GlassCard>
          <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
          <p className="text-white/60">View your dashboard overview.</p>
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="analytics">
        <GlassCard>
          <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
          <p className="text-white/60">Track your analytics and metrics.</p>
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="reports">
        <GlassCard>
          <h3 className="text-lg font-semibold text-white mb-2">Reports</h3>
          <p className="text-white/60">Generate and view reports.</p>
        </GlassCard>
      </GlassTabsContent>
    </GlassTabs>
  ),
};

export const UnderlineVariant: Story = {
  render: () => (
    <GlassTabs defaultValue="tab1">
      <GlassTabsList variant="underline">
        <GlassTabsTrigger value="tab1" variant="underline">Profile</GlassTabsTrigger>
        <GlassTabsTrigger value="tab2" variant="underline">Settings</GlassTabsTrigger>
        <GlassTabsTrigger value="tab3" variant="underline">Billing</GlassTabsTrigger>
      </GlassTabsList>
      <GlassTabsContent value="tab1">
        <div className="text-white/70 py-4">Profile content goes here...</div>
      </GlassTabsContent>
      <GlassTabsContent value="tab2">
        <div className="text-white/70 py-4">Settings content goes here...</div>
      </GlassTabsContent>
      <GlassTabsContent value="tab3">
        <div className="text-white/70 py-4">Billing content goes here...</div>
      </GlassTabsContent>
    </GlassTabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <GlassTabs defaultValue="home">
      <GlassTabsList>
        <GlassTabsTrigger
          value="home"
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
        >
          Home
        </GlassTabsTrigger>
        <GlassTabsTrigger
          value="projects"
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          }
        >
          Projects
        </GlassTabsTrigger>
        <GlassTabsTrigger
          value="settings"
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        >
          Settings
        </GlassTabsTrigger>
      </GlassTabsList>
      <GlassTabsContent value="home">
        <GlassCard>
          <p className="text-white">Welcome home!</p>
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="projects">
        <GlassCard>
          <p className="text-white">Your projects</p>
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="settings">
        <GlassCard>
          <p className="text-white">Settings panel</p>
        </GlassCard>
      </GlassTabsContent>
    </GlassTabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <GlassTabs defaultValue="tab1">
      <GlassTabsList>
        <GlassTabsTrigger value="tab1">Active Tab</GlassTabsTrigger>
        <GlassTabsTrigger value="tab2">Another Tab</GlassTabsTrigger>
        <GlassTabsTrigger value="tab3" disabled>Disabled</GlassTabsTrigger>
      </GlassTabsList>
      <GlassTabsContent value="tab1">
        <div className="text-white/70 py-4">First tab content</div>
      </GlassTabsContent>
      <GlassTabsContent value="tab2">
        <div className="text-white/70 py-4">Second tab content</div>
      </GlassTabsContent>
    </GlassTabs>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <GlassTabs defaultValue="tab1" className="w-full">
      <GlassTabsList className="w-full grid grid-cols-3">
        <GlassTabsTrigger value="tab1" className="flex-1">Tab 1</GlassTabsTrigger>
        <GlassTabsTrigger value="tab2" className="flex-1">Tab 2</GlassTabsTrigger>
        <GlassTabsTrigger value="tab3" className="flex-1">Tab 3</GlassTabsTrigger>
      </GlassTabsList>
      <GlassTabsContent value="tab1">
        <GlassCard>
          <p className="text-white">Tab 1 content</p>
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="tab2">
        <GlassCard>
          <p className="text-white">Tab 2 content</p>
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="tab3">
        <GlassCard>
          <p className="text-white">Tab 3 content</p>
        </GlassCard>
      </GlassTabsContent>
    </GlassTabs>
  ),
};

