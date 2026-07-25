# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.2] - 2026-07-24

### Fixed

- **GlassModal**: the panel lost its centering the moment the open animation settled — its top-left corner landed at the viewport centre, pushing most of the modal off-screen. Root cause: the panel centered itself with transform classes (`left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`) on the same element framer-motion animates; framer owns `transform` and rests it at `none`, wiping the counter-shift. The bug is masked under `prefers-reduced-motion` (the transform never animates), which is how it escaped testing. Centering now lives on a static full-screen frame (`fixed inset-0 grid place-items-center`) wrapping the panel, so framer keeps exclusive ownership of the panel's `transform`; the frame is `pointer-events-none` (backdrop clicks still close the modal) and the panel re-enables its own pointer events.

### Changed

- **GlassModal**: the centering frame adds `p-4`, so the panel keeps a 1rem margin from the viewport edges at every size.

### Added

- First component regression tests (vitest + jsdom + Testing Library) pinning the GlassModal centering contract.

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

