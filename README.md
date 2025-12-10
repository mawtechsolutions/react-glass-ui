# @mawtech/glass-ui

Beautiful Apple-style glassmorphism React components.

[![npm](https://img.shields.io/npm/v/@mawtech/glass-ui)](https://www.npmjs.com/package/@mawtech/glass-ui)
[![license](https://img.shields.io/npm/l/@mawtech/glass-ui)](https://github.com/mawtechsolutions/react-glass-ui/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Live%20Demo-FF4785?logo=storybook&logoColor=white)](https://glass-ui.mawtechsolutions.com)

<p align="center">
  <a href="https://glass-ui.mawtechsolutions.com">
    <img src="https://raw.githubusercontent.com/mawtechsolutions/react-glass-ui/main/assets/preview.svg" alt="GlassUI Preview" width="700" />
  </a>
</p>

<p align="center">
  <a href="https://glass-ui.mawtechsolutions.com"><strong>📚 View Live Documentation & Components →</strong></a>
</p>

## ✨ Features

- 🎨 **Beautiful Design** - Apple macOS/visionOS inspired glassmorphism
- 🌙 **Dark Mode First** - Optimized for dark interfaces
- ♿ **Accessible** - Full keyboard navigation and ARIA support
- 📦 **Tree-shakeable** - Only import what you use
- 🎭 **Framer Motion** - Smooth animations out of the box
- 🛠 **TypeScript** - Full type safety
- 📚 **Storybook** - Interactive component documentation

## 📦 Installation

```bash
npm install @mawtech/glass-ui
# or
yarn add @mawtech/glass-ui
# or
pnpm add @mawtech/glass-ui
```

## 🚀 Quick Start

### 1. Import Styles

Add the styles to your app's entry point:

```tsx
import '@mawtech/glass-ui/styles.css';
```

### 2. Use Components

```tsx
import { GlassCard, GlassButton, GlassInput } from '@mawtech/glass-ui';

function App() {
  return (
    <div className="min-h-screen bg-glass-dark p-8">
      <GlassCard variant="glow" padding="lg">
        <h2 className="text-2xl font-bold text-white mb-4">Welcome</h2>
        <GlassInput 
          label="Email" 
          placeholder="Enter your email"
          type="email"
        />
        <GlassButton variant="primary" className="mt-4">
          Get Started
        </GlassButton>
      </GlassCard>
    </div>
  );
}
```

## 📚 Components

### Core
- **GlassCard** - Container with glassmorphism effect
- **GlassButton** - Button with multiple variants
- **GlassInput** - Text input with icons and validation

### Form
- **GlassTextarea** - Multi-line text input
- **GlassSelect** - Dropdown select
- **GlassCheckbox** - Checkbox with custom styling
- **GlassSwitch** - Toggle switch

### Layout
- **GlassModal** - Dialog/modal with backdrop blur
- **GlassNavbar** - Responsive navigation bar
- **GlassSidebar** - Collapsible sidebar

### Overlay
- **GlassDropdown** - Dropdown menu
- **GlassTooltip** - Tooltip on hover
- **GlassTabs** - Tab navigation

### Feedback
- **GlassToast** - Toast notifications
- **GlassProgress** - Linear and circular progress

### Display
- **GlassAvatar** - User avatar with status
- **GlassBadge** - Badge/chip component
- **GlassCommandPalette** - ⌘K command menu

## 🪝 Hooks

### useToast

```tsx
import { ToastProvider, useToast } from '@mawtech/glass-ui';

function App() {
  return (
    <ToastProvider position="top-right">
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const { success, error } = useToast();

  return (
    <button onClick={() => success('Saved!', 'Your changes have been saved.')}>
      Save
    </button>
  );
}
```

### useModal

```tsx
import { useModal, GlassModal, GlassButton } from '@mawtech/glass-ui';

function MyComponent() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <GlassButton onClick={open}>Open Modal</GlassButton>
      <GlassModal 
        open={isOpen} 
        onOpenChange={close}
        title="Hello!"
      >
        Modal content
      </GlassModal>
    </>
  );
}
```

### useTheme

```tsx
import { useTheme } from '@mawtech/glass-ui';

function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button onClick={toggle}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
```

## 🎨 Design Tokens

```css
/* Colors */
--glass-cyan: #00F0FF;
--glass-violet: #8B5CF6;
--glass-pink: #EC4899;
--glass-dark: #09090B;
--glass-card: #0F172A;

/* Glass Effect */
--glass-blur: 40px;
--glass-bg-opacity: 0.7;
--glass-border-opacity: 0.12;
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
--glass-glow: 0 0 40px rgba(0, 240, 255, 0.3);
--glass-radius: 20px;

/* Animation */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
```

## 🛠 With Tailwind CSS

If you're using Tailwind CSS, you can extend your config:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your content
    './node_modules/@mawtech/glass-ui/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          cyan: '#00F0FF',
          violet: '#8B5CF6',
          pink: '#EC4899',
          dark: '#09090B',
          card: '#0F172A',
        },
      },
    },
  },
};
```

## 📖 Documentation

🔗 **[View Live Documentation & Interactive Examples →](https://glass-ui.mawtechsolutions.com)**

Explore all components with live previews, code examples, and customization options in our Storybook documentation.

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) first.

## 📄 License

MIT © [MAW Tech Solutions](https://mawtechsolutions.com)

---

<p align="center">
  Built with 💜 by <a href="https://mawtechsolutions.com">MAW Tech Solutions</a>
</p>

<p align="center">
  Need custom components or enterprise support? <a href="mailto:hello@mawtechsolutions.com">Contact us</a>
</p>

