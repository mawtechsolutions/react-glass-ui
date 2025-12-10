/**
 * GlassDropdown Stories
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  GlassDropdown,
  GlassDropdownItem,
  GlassDropdownSeparator,
  GlassDropdownLabel,
} from './GlassDropdown';
import { GlassButton } from '../GlassButton';

const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const ArchiveIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const MoreIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
);

const meta: Meta<typeof GlassDropdown> = {
  title: 'Components/GlassDropdown',
  component: GlassDropdown,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of the dropdown',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side to show dropdown',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassDropdown>;

export const Default: Story = {
  render: () => (
    <GlassDropdown trigger={<GlassButton variant="secondary">Options</GlassButton>}>
      <GlassDropdownItem icon={<EditIcon />}>Edit</GlassDropdownItem>
      <GlassDropdownItem icon={<CopyIcon />}>Duplicate</GlassDropdownItem>
      <GlassDropdownItem icon={<ArchiveIcon />}>Archive</GlassDropdownItem>
      <GlassDropdownSeparator />
      <GlassDropdownItem icon={<TrashIcon />} destructive>
        Delete
      </GlassDropdownItem>
    </GlassDropdown>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <GlassDropdown trigger={<GlassButton>Actions</GlassButton>}>
      <GlassDropdownItem icon={<EditIcon />} shortcut="⌘E">
        Edit
      </GlassDropdownItem>
      <GlassDropdownItem icon={<CopyIcon />} shortcut="⌘D">
        Duplicate
      </GlassDropdownItem>
      <GlassDropdownItem icon={<ArchiveIcon />} shortcut="⌘A">
        Archive
      </GlassDropdownItem>
      <GlassDropdownSeparator />
      <GlassDropdownItem icon={<TrashIcon />} shortcut="⌘⌫" destructive>
        Delete
      </GlassDropdownItem>
    </GlassDropdown>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <GlassDropdown trigger={<GlassButton variant="secondary">Menu</GlassButton>}>
      <GlassDropdownLabel>Actions</GlassDropdownLabel>
      <GlassDropdownItem icon={<EditIcon />}>Edit</GlassDropdownItem>
      <GlassDropdownItem icon={<CopyIcon />}>Duplicate</GlassDropdownItem>
      <GlassDropdownSeparator />
      <GlassDropdownLabel>Danger Zone</GlassDropdownLabel>
      <GlassDropdownItem icon={<ArchiveIcon />}>Archive</GlassDropdownItem>
      <GlassDropdownItem icon={<TrashIcon />} destructive>
        Delete
      </GlassDropdownItem>
    </GlassDropdown>
  ),
};

export const IconButton: Story = {
  render: () => (
    <GlassDropdown
      trigger={
        <GlassButton variant="ghost" className="!p-2">
          <MoreIcon />
        </GlassButton>
      }
      align="end"
    >
      <GlassDropdownItem icon={<EditIcon />}>Edit</GlassDropdownItem>
      <GlassDropdownItem icon={<CopyIcon />}>Duplicate</GlassDropdownItem>
      <GlassDropdownSeparator />
      <GlassDropdownItem icon={<TrashIcon />} destructive>
        Delete
      </GlassDropdownItem>
    </GlassDropdown>
  ),
};

export const AllAlignments: Story = {
  render: () => (
    <div className="flex gap-8">
      <GlassDropdown
        trigger={<GlassButton variant="secondary">Start</GlassButton>}
        align="start"
      >
        <GlassDropdownItem>Item 1</GlassDropdownItem>
        <GlassDropdownItem>Item 2</GlassDropdownItem>
        <GlassDropdownItem>Item 3</GlassDropdownItem>
      </GlassDropdown>

      <GlassDropdown
        trigger={<GlassButton variant="secondary">Center</GlassButton>}
        align="center"
      >
        <GlassDropdownItem>Item 1</GlassDropdownItem>
        <GlassDropdownItem>Item 2</GlassDropdownItem>
        <GlassDropdownItem>Item 3</GlassDropdownItem>
      </GlassDropdown>

      <GlassDropdown
        trigger={<GlassButton variant="secondary">End</GlassButton>}
        align="end"
      >
        <GlassDropdownItem>Item 1</GlassDropdownItem>
        <GlassDropdownItem>Item 2</GlassDropdownItem>
        <GlassDropdownItem>Item 3</GlassDropdownItem>
      </GlassDropdown>
    </div>
  ),
};

export const UserMenu: Story = {
  render: () => (
    <GlassDropdown
      trigger={
        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-glass-cyan to-glass-violet flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <span className="text-white text-sm">John Doe</span>
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      }
      align="end"
    >
      <GlassDropdownLabel>john@example.com</GlassDropdownLabel>
      <GlassDropdownSeparator />
      <GlassDropdownItem
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
      >
        Profile
      </GlassDropdownItem>
      <GlassDropdownItem
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      >
        Settings
      </GlassDropdownItem>
      <GlassDropdownSeparator />
      <GlassDropdownItem
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        }
        destructive
      >
        Sign out
      </GlassDropdownItem>
    </GlassDropdown>
  ),
};

