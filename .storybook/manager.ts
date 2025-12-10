/**
 * Storybook manager configuration
 * @package @mawtech/glass-ui
 * @author MAW Tech Solutions
 * @see https://mawtechsolutions.com
 */

import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: '@mawtech/glass-ui',
    brandUrl: 'https://mawtechsolutions.com',
    brandImage: undefined,
    brandTarget: '_blank',

    // Colors
    colorPrimary: '#00F0FF',
    colorSecondary: '#8B5CF6',

    // UI
    appBg: '#09090B',
    appContentBg: '#0F172A',
    appBorderColor: 'rgba(255, 255, 255, 0.12)',
    appBorderRadius: 12,

    // Typography
    fontBase: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontCode: '"SF Mono", "Fira Code", monospace',

    // Text colors
    textColor: '#FFFFFF',
    textInverseColor: '#09090B',
    textMutedColor: '#94A3B8',

    // Toolbar default and active colors
    barTextColor: '#94A3B8',
    barSelectedColor: '#00F0FF',
    barBg: '#0F172A',

    // Form colors
    inputBg: '#0F172A',
    inputBorder: 'rgba(255, 255, 255, 0.12)',
    inputTextColor: '#FFFFFF',
    inputBorderRadius: 8,
  },
});

