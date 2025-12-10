/**
 * Storybook preview configuration
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#09090B' },
        { name: 'light', value: '#F8FAFC' },
        { name: 'card', value: '#0F172A' },
      ],
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

export default preview;

