# 🎬 Motion System

**Centralized, intelligent motion system for Nomadia Travels**

A unified animation framework built on `framer-motion` that provides consistent, performant, and accessible animations throughout the application.

---

## 📦 Quick Start

```tsx
import { motion, variants, interactions } from '@/lib/motion';

// Simple fade in
<motion.div variants={variants.fade} initial="initial" animate="animate">
  Content
</motion.div>

// Card with hover
<motion.div
  variants={variants.cardEntrance}
  whileHover={interactions.hoverLift}
>
  Card Content
</motion.div>

// With accessibility
import { usePrefersReducedMotion } from '@/lib/motion';

function MyComponent() {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : variants.slideUp}
      initial="initial"
      animate="animate"
    >
      Content
    </motion.div>
  );
}
```

---

## 📚 System Structure

```
lib/motion/
├── index.ts              # Main API export
├── constants.ts          # Duration, easing, spring configs
├── variants.ts           # Animation presets (fade, slide, etc.)
├── interactions.ts       # Hover, tap, focus states
├── hooks.ts              # Accessibility hooks
├── utils.ts              # Helper functions
├── motion.ts             # Legacy motion components
├── motion-link.ts        # Motion-enabled Next Link
├── EXAMPLES.tsx          # Usage examples
└── README.md             # This file
```

---

## 🎨 Available Variants

### Fade Animations

- `fade` - Simple fade in/out
- `fadeScale` - Fade with subtle zoom
- `fadeBlur` - Fade with blur effect

### Slide Animations

- `slideUp` - Slide from bottom (most common)
- `slideDown` - Slide from top
- `slideRight` - Slide from left
- `slideLeft` - Slide from right

### Special Animations

- `cardEntrance` - Card reveal with blur
- `heroEntrance` - Hero section entrance
- `navbarEntrance` - Navbar slide from top
- `drawerSlide` - Mobile drawer
- `overlayFade` - Modal overlay
- `lightboxContent` - Lightbox zoom

### Stagger Animations

- `staggerContainer` - Parent container
- `staggerItem` - Child items
- `fadeInUpStagger` - Custom stagger with delay

---

## 🎯 Interaction Presets

### Hover States

- `hoverScale` - Subtle scale (1.02)
- `hoverScaleMedium` - Medium scale (1.05)
- `hoverScaleLarge` - Large scale (1.08)
- `hoverLift` - Scale + translateY
- `hoverRotate` - Rotation effect

### Tap States

- `tapScale` - Standard press (0.97)
- `tapScaleMedium` - Medium press (0.94)
- `tapScaleLarge` - Strong press (0.9)
- `tapRotate` - Press + rotation

### Combined Presets

- `buttonInteraction` - Complete button behavior
- `cardInteraction` - Card hover + tap
- `iconButtonInteraction` - Icon button with rotation
- `linkInteraction` - Link with arrow slide

---

## ⚙️ Constants

### Duration Values

```typescript
DURATION.instant; // 0.15s - Micro-interactions
DURATION.fast; // 0.25s - Quick feedback
DURATION.quick; // 0.3s
DURATION.normal; // 0.4s - Standard
DURATION.moderate; // 0.5s
DURATION.smooth; // 0.6s - Most animations
DURATION.relaxed; // 0.75s
DURATION.slow; // 0.8s
DURATION.extended; // 1.5s - Dramatic effects
```

### Easing Curves

```typescript
EASING.easeOut; // Fast start, slow end (entrances)
EASING.easeIn; // Slow start, fast end (exits)
EASING.easeInOut; // Smooth both ways
EASING.smooth; // Custom smooth curve
// + more variants
```

### Spring Configurations

```typescript
SPRING.gentle; // Soft spring
SPRING.responsive; // Standard spring
SPRING.snappy; // Fast spring
SPRING.bouncy; // Playful spring
SPRING.tight; // Minimal overshoot
```

---

## ♿ Accessibility

The motion system automatically respects user preferences:

```tsx
// Hook-based approach
import { usePrefersReducedMotion } from "@/lib/motion";

const shouldReduceMotion = usePrefersReducedMotion();
// Returns true if user prefers reduced motion

// Variant-based approach
import { useMotionVariants } from "@/lib/motion";

const safeVariants = useMotionVariants(
  variants.slideUp, // Animated version
  {} // Static fallback
);
```

---

## 📖 Usage Examples

### Basic Animation

```tsx
import { motion, variants } from "@/lib/motion";

<motion.div variants={variants.slideUp} initial="initial" animate="animate">
  Content appears from bottom
</motion.div>;
```

### With Interactions

```tsx
import { motion, variants, interactions } from "@/lib/motion";

<motion.button
  variants={variants.fade}
  initial="initial"
  animate="animate"
  whileHover={interactions.hoverScaleMedium}
  whileTap={interactions.tapScale}
>
  Click Me
</motion.button>;
```

### Viewport-Triggered

```tsx
import { motion, variants, VIEWPORT } from "@/lib/motion";

<motion.div
  variants={variants.viewportFadeIn}
  initial="initial"
  whileInView="whileInView"
  viewport={VIEWPORT.once}
>
  Appears when scrolled into view
</motion.div>;
```

### Staggered List

```tsx
import { motion, variants } from "@/lib/motion";

<motion.div
  variants={variants.staggerContainer}
  initial="hidden"
  animate="visible"
>
  {items.map((item, i) => (
    <motion.div key={i} variants={variants.staggerItem}>
      {item}
    </motion.div>
  ))}
</motion.div>;
```

### Modal/Drawer

```tsx
import { motion, AnimatePresence, variants } from "@/lib/motion";

<AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        variants={variants.overlayFade}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.div
        variants={variants.drawerSlide}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Drawer Content
      </motion.div>
    </>
  )}
</AnimatePresence>;
```

---

## 🔧 Advanced Usage

### Custom Variants

```tsx
import { createFadeVariant, DURATION, EASING } from "@/lib/motion";

const customFade = createFadeVariant("left", 40);
// Creates a fade that slides from left with 40px distance
```

### Dynamic Stagger

```tsx
import { createStaggerVariant, STAGGER } from "@/lib/motion";

const customStagger = createStaggerVariant(STAGGER.tight, DURATION.fast);
```

### Spring Transitions

```tsx
import { createSpringTransition } from "@/lib/motion";

const customSpring = createSpringTransition(350, 18);
// Custom stiffness and damping
```

---

## 🎯 Best Practices

### DO ✅

- Use constants for timing values
- Use presets for common patterns
- Respect `prefers-reduced-motion`
- Keep durations under 1s
- Use GPU-friendly properties (`transform`, `opacity`)

### DON'T ❌

- Hardcode timing values
- Duplicate animation logic
- Ignore accessibility
- Animate `width`, `height`, `left`, `top`
- Use durations > 1s for UI feedback

---

## 🐛 Troubleshooting

### Animation not working?

1. Check if component uses `motion.div` (not regular `div`)
2. Ensure `initial` and `animate` props are set
3. Verify variants are imported correctly

### Performance issues?

1. Use `will-change: transform` in styled components
2. Avoid animating layout properties
3. Keep duration values reasonable (< 1s)

### Accessibility concerns?

1. Always use `usePrefersReducedMotion()` for critical animations
2. Provide instant alternatives (`duration: 0`)
3. Test with OS-level reduced motion enabled

---

## 📊 Performance Tips

1. **GPU Acceleration**: Use `transform` and `opacity` only
2. **Will-Change**: Applied automatically in styled components
3. **Reduce Complexity**: Keep spring configs reasonable
4. **Lazy Animation**: Use `whileInView` for off-screen content

---

## 📝 Migration Guide

See `EXAMPLES.tsx` for detailed before/after patterns.

### Quick Migration Steps

1. Import from central system:

   ```tsx
   import { motion, variants, interactions } from "@/lib/motion";
   ```

2. Replace inline props:

   ```tsx
   // Before
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}

   // After
   variants={variants.slideUp}
   initial="initial"
   animate="animate"
   ```

3. Use interaction presets:

   ```tsx
   // Before
   whileHover={{ scale: 1.05 }}

   // After
   whileHover={interactions.hoverScaleMedium}
   ```

---

## 📚 Further Reading

- [Complete System Report](../MOTION_SYSTEM_REBUILD_REPORT.md)
- [Usage Examples](./EXAMPLES.tsx)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**Maintained by:** Nomadia Travels Team  
**Version:** 1.0.0  
**Last Updated:** November 5, 2025
