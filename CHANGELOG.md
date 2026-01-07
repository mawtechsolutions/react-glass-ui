# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-01-06

### Fixed

- **GlassButton**: Fixed form submission - button now properly supports `type="submit"` for form submission
  - Added explicit `type` prop with safe default of `"button"` (prevents accidental form submissions)
  - Must now explicitly set `type="submit"` for form submit buttons
- **GlassInput**: Improved controlled component support
  - Explicitly handles `value`, `defaultValue`, and `onChange` props for better React controlled component patterns
  - Uses React `useId()` hook for stable ID generation instead of random IDs

### Changed

- **GlassButton**: Default `type` is now `"button"` instead of browser default `"submit"` (safer default)
- Updated documentation with proper form usage examples

## [0.1.0] - 2024-12-08

### Added

- Initial release of @mawtech/glass-ui
- Core components:
  - GlassCard - Glassmorphism container
  - GlassButton - Button with multiple variants
  - GlassInput - Text input with icons and validation
- Form components:
  - GlassTextarea - Multi-line text input with character count
  - GlassSelect - Dropdown select using Radix UI
  - GlassCheckbox - Custom styled checkbox
  - GlassSwitch - Toggle switch
- Layout components:
  - GlassModal - Dialog with backdrop blur
  - GlassNavbar - Responsive navigation bar
  - GlassSidebar - Collapsible sidebar navigation
- Overlay components:
  - GlassDropdown - Dropdown menu
  - GlassTooltip - Tooltip on hover
  - GlassTabs - Tab navigation
- Feedback components:
  - GlassToast - Toast notifications with provider
  - GlassProgress - Linear and circular progress indicators
- Display components:
  - GlassAvatar - Avatar with status indicator
  - GlassBadge - Badge/chip component
  - GlassCommandPalette - ⌘K command menu
- Hooks:
  - useToast - Toast notification management
  - useModal - Modal state management
  - useTheme - Theme (dark/light mode) management
- Full TypeScript support
- Framer Motion animations
- Accessibility features (ARIA, keyboard navigation)
- Storybook documentation
- Tailwind CSS integration

