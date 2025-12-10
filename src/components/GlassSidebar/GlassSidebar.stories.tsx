/**
 * GlassSidebar Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlassSidebar, GlassSidebarItem } from './GlassSidebar';
import { GlassBadge } from '../GlassBadge';

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const FolderIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const InboxIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Logo = ({ collapsed }: { collapsed?: boolean }) => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-glass-cyan to-glass-violet shrink-0" />
    {!collapsed && <span className="text-white font-bold text-lg">GlassUI</span>}
  </div>
);

const meta: Meta<typeof GlassSidebar> = {
  title: 'Components/GlassSidebar',
  component: GlassSidebar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the sidebar',
    },
    variant: {
      control: 'select',
      options: ['default', 'floating'],
      description: 'Visual variant',
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow collapsing',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-glass-dark">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GlassSidebar>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    return (
      <GlassSidebar header={<Logo />}>
        <GlassSidebarItem
          icon={<HomeIcon />}
          active={active === 'dashboard'}
          onClick={() => setActive('dashboard')}
        >
          Dashboard
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<FolderIcon />}
          active={active === 'projects'}
          onClick={() => setActive('projects')}
        >
          Projects
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<InboxIcon />}
          active={active === 'inbox'}
          onClick={() => setActive('inbox')}
          badge={<GlassBadge variant="primary" size="sm">5</GlassBadge>}
        >
          Inbox
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<UsersIcon />}
          active={active === 'team'}
          onClick={() => setActive('team')}
        >
          Team
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<SettingsIcon />}
          active={active === 'settings'}
          onClick={() => setActive('settings')}
        >
          Settings
        </GlassSidebarItem>
      </GlassSidebar>
    );
  },
};

export const Collapsible: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    const [collapsed, setCollapsed] = useState(false);
    return (
      <GlassSidebar
        header={<Logo collapsed={collapsed} />}
        collapsible
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      >
        <GlassSidebarItem
          icon={<HomeIcon />}
          active={active === 'dashboard'}
          onClick={() => setActive('dashboard')}
        >
          Dashboard
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<FolderIcon />}
          active={active === 'projects'}
          onClick={() => setActive('projects')}
        >
          Projects
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<InboxIcon />}
          active={active === 'inbox'}
          onClick={() => setActive('inbox')}
        >
          Inbox
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<SettingsIcon />}
          active={active === 'settings'}
          onClick={() => setActive('settings')}
        >
          Settings
        </GlassSidebarItem>
      </GlassSidebar>
    );
  },
};

export const Floating: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    return (
      <div className="p-4 h-full">
        <GlassSidebar
          header={<Logo />}
          variant="floating"
          collapsible
        >
          <GlassSidebarItem
            icon={<HomeIcon />}
            active={active === 'dashboard'}
            onClick={() => setActive('dashboard')}
          >
            Dashboard
          </GlassSidebarItem>
          <GlassSidebarItem
            icon={<FolderIcon />}
            active={active === 'projects'}
            onClick={() => setActive('projects')}
          >
            Projects
          </GlassSidebarItem>
          <GlassSidebarItem
            icon={<InboxIcon />}
            active={active === 'inbox'}
            onClick={() => setActive('inbox')}
          >
            Inbox
          </GlassSidebarItem>
        </GlassSidebar>
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    return (
      <GlassSidebar
        header={<Logo />}
        footer={
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-glass-violet to-glass-pink flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-white/50 truncate">john@example.com</p>
            </div>
          </div>
        }
        collapsible
      >
        <GlassSidebarItem
          icon={<HomeIcon />}
          active={active === 'dashboard'}
          onClick={() => setActive('dashboard')}
        >
          Dashboard
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<FolderIcon />}
          active={active === 'projects'}
          onClick={() => setActive('projects')}
        >
          Projects
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<InboxIcon />}
          active={active === 'inbox'}
          onClick={() => setActive('inbox')}
          badge={<GlassBadge variant="primary" size="sm">3</GlassBadge>}
        >
          Inbox
        </GlassSidebarItem>
        <GlassSidebarItem
          icon={<SettingsIcon />}
          active={active === 'settings'}
          onClick={() => setActive('settings')}
        >
          Settings
        </GlassSidebarItem>
      </GlassSidebar>
    );
  },
};

export const FullLayout: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    return (
      <div className="flex h-full">
        <GlassSidebar
          header={<Logo />}
          collapsible
        >
          <GlassSidebarItem
            icon={<HomeIcon />}
            active={active === 'dashboard'}
            onClick={() => setActive('dashboard')}
          >
            Dashboard
          </GlassSidebarItem>
          <GlassSidebarItem
            icon={<FolderIcon />}
            active={active === 'projects'}
            onClick={() => setActive('projects')}
          >
            Projects
          </GlassSidebarItem>
          <GlassSidebarItem
            icon={<InboxIcon />}
            active={active === 'inbox'}
            onClick={() => setActive('inbox')}
          >
            Inbox
          </GlassSidebarItem>
          <GlassSidebarItem
            icon={<SettingsIcon />}
            active={active === 'settings'}
            onClick={() => setActive('settings')}
          >
            Settings
          </GlassSidebarItem>
        </GlassSidebar>
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-white mb-4 capitalize">{active}</h1>
          <p className="text-white/60">
            This is the {active} page content. The sidebar works seamlessly with your main content area.
          </p>
        </main>
      </div>
    );
  },
};

