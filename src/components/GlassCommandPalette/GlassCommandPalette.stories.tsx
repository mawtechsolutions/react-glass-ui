/**
 * GlassCommandPalette Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlassCommandPalette, type CommandItem } from './GlassCommandPalette';
import { GlassButton } from '../GlassButton';

const meta: Meta<typeof GlassCommandPalette> = {
  title: 'Components/GlassCommandPalette',
  component: GlassCommandPalette,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GlassCommandPalette>;

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

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const sampleCommands: CommandItem[] = [
  {
    id: '1',
    label: 'Go to Dashboard',
    description: 'Navigate to the main dashboard',
    icon: <HomeIcon />,
    shortcut: '⌘D',
    group: 'Navigation',
    onSelect: () => console.log('Go to Dashboard'),
  },
  {
    id: '2',
    label: 'Browse Projects',
    description: 'View all your projects',
    icon: <FolderIcon />,
    shortcut: '⌘P',
    group: 'Navigation',
    onSelect: () => console.log('Browse Projects'),
  },
  {
    id: '3',
    label: 'Search...',
    description: 'Search across your workspace',
    icon: <SearchIcon />,
    shortcut: '⌘F',
    group: 'Navigation',
    onSelect: () => console.log('Search'),
  },
  {
    id: '4',
    label: 'Create New Project',
    description: 'Start a new project from scratch',
    icon: <PlusIcon />,
    shortcut: '⌘N',
    group: 'Actions',
    onSelect: () => console.log('Create New Project'),
  },
  {
    id: '5',
    label: 'Import from GitHub',
    description: 'Import an existing repository',
    icon: <FolderIcon />,
    group: 'Actions',
    onSelect: () => console.log('Import from GitHub'),
  },
  {
    id: '6',
    label: 'Settings',
    description: 'Manage your account settings',
    icon: <SettingsIcon />,
    shortcut: '⌘,',
    group: 'Settings',
    onSelect: () => console.log('Settings'),
  },
  {
    id: '7',
    label: 'Theme',
    description: 'Change appearance',
    icon: <SettingsIcon />,
    group: 'Settings',
    onSelect: () => console.log('Theme'),
  },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <p className="text-white/60 text-sm">
          Press <kbd className="px-2 py-1 bg-white/10 rounded text-white">⌘K</kbd> or click the button below
        </p>
        <GlassButton onClick={() => setOpen(true)}>
          Open Command Palette
        </GlassButton>
        <GlassCommandPalette
          commands={sampleCommands}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const WithCustomPlaceholder: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <GlassButton onClick={() => setOpen(true)}>
          Open Command Palette
        </GlassButton>
        <GlassCommandPalette
          commands={sampleCommands}
          open={open}
          onOpenChange={setOpen}
          placeholder="Type a command or search..."
        />
      </div>
    );
  },
};

export const FewCommands: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const simpleCommands: CommandItem[] = [
      {
        id: '1',
        label: 'Copy',
        shortcut: '⌘C',
        onSelect: () => console.log('Copy'),
      },
      {
        id: '2',
        label: 'Paste',
        shortcut: '⌘V',
        onSelect: () => console.log('Paste'),
      },
      {
        id: '3',
        label: 'Cut',
        shortcut: '⌘X',
        onSelect: () => console.log('Cut'),
      },
    ];

    return (
      <div className="space-y-4">
        <GlassButton onClick={() => setOpen(true)}>
          Open Simple Commands
        </GlassButton>
        <GlassCommandPalette
          commands={simpleCommands}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const WithDisabledItems: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const commandsWithDisabled: CommandItem[] = [
      {
        id: '1',
        label: 'Available Action',
        icon: <HomeIcon />,
        onSelect: () => console.log('Available'),
      },
      {
        id: '2',
        label: 'Coming Soon',
        description: 'This feature is not available yet',
        icon: <FolderIcon />,
        onSelect: () => {},
        disabled: true,
      },
      {
        id: '3',
        label: 'Another Action',
        icon: <SettingsIcon />,
        onSelect: () => console.log('Another'),
      },
    ];

    return (
      <div className="space-y-4">
        <GlassButton onClick={() => setOpen(true)}>
          Open (with disabled)
        </GlassButton>
        <GlassCommandPalette
          commands={commandsWithDisabled}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [lastAction, setLastAction] = useState<string | null>(null);

    const interactiveCommands: CommandItem[] = sampleCommands.map((cmd) => ({
      ...cmd,
      onSelect: () => {
        setLastAction(cmd.label);
        console.log(`Selected: ${cmd.label}`);
      },
    }));

    return (
      <div className="space-y-4">
        <GlassButton onClick={() => setOpen(true)}>
          Open Command Palette
        </GlassButton>
        
        {lastAction && (
          <p className="text-white/60 text-sm">
            Last action: <span className="text-glass-cyan">{lastAction}</span>
          </p>
        )}
        
        <p className="text-white/40 text-xs">
          Try pressing ⌘K to toggle, use arrow keys to navigate, Enter to select
        </p>
        
        <GlassCommandPalette
          commands={interactiveCommands}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

