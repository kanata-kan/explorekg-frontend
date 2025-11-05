# 🚀 Quick Reference Guide

**Motion System Cheat Sheet for Developers**

---

## 🎯 Most Common Patterns

### 1. Simple Page Section

```tsx
import { motion, variants } from "@/lib/motion";

<motion.section
  variants={variants.sectionEntrance}
  initial="initial"
  animate="animate"
>
  {content}
</motion.section>;
```

### 2. Hero Section

```tsx
import { motion, variants } from "@/lib/motion";

<motion.div
  variants={variants.heroEntrance}
  initial="initial"
  animate="animate"
>
  <h1>{title}</h1>
  <p>{subtitle}</p>
</motion.div>;
```

### 3. Card Grid

```tsx
import { motion, variants } from "@/lib/motion";

<motion.div
  variants={variants.staggerContainer}
  initial="hidden"
  animate="visible"
>
  {cards.map((card) => (
    <motion.div
      key={card.id}
      variants={variants.staggerItem}
      whileHover={interactions.hoverLift}
    >
      {card.content}
    </motion.div>
  ))}
</motion.div>;
```

### 4. Interactive Button

```tsx
import { motion, interactions } from "@/lib/motion";

<motion.button
  whileHover={interactions.hoverScaleMedium}
  whileTap={interactions.tapScale}
>
  Click Me
</motion.button>;
```

### 5. Modal/Drawer

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
        onClick={onClose}
      />
      <motion.div
        variants={variants.drawerSlide}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {content}
      </motion.div>
    </>
  )}
</AnimatePresence>;
```

---

## ⚡ Quick Imports

```tsx
// Everything you need
import {
  motion, // Motion components
  AnimatePresence, // For exit animations
  variants, // Animation presets
  interactions, // Hover/tap states
  DURATION, // Timing constants
  EASING, // Easing curves
  SPRING, // Spring configs
  VIEWPORT, // Viewport settings
  usePrefersReducedMotion, // Accessibility hook
} from "@/lib/motion";
```

---

## 🎨 Variant Selector

**Need to fade in?** → `variants.fade`  
**Need to slide up?** → `variants.slideUp`  
**Need a card entrance?** → `variants.cardEntrance`  
**Need a hero entrance?** → `variants.heroEntrance`  
**Need a drawer?** → `variants.drawerSlide`  
**Need an overlay?** → `variants.overlayFade`  
**Need stagger?** → `variants.staggerContainer` + `variants.staggerItem`

---

## 🖱️ Interaction Selector

**Subtle hover?** → `interactions.hoverScale`  
**Strong hover?** → `interactions.hoverScaleMedium`  
**Lift effect?** → `interactions.hoverLift`  
**Button press?** → `interactions.tapScale`  
**Playful tap?** → `interactions.tapRotate`

---

## ⏱️ Timing Selector

**Instant feedback?** → `DURATION.instant` (0.15s)  
**Quick interaction?** → `DURATION.fast` (0.25s)  
**Standard animation?** → `DURATION.smooth` (0.6s)  
**Emphasized motion?** → `DURATION.relaxed` (0.75s)  
**Dramatic effect?** → `DURATION.extended` (1.5s)

---

## ♿ Accessibility Pattern

```tsx
import { motion, variants, usePrefersReducedMotion } from "@/lib/motion";

function MyComponent() {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : variants.slideUp}
      initial="initial"
      animate="animate"
    >
      {content}
    </motion.div>
  );
}
```

---

## 🎯 Common Recipes

### Fade + Slide Up (Page Content)

```tsx
<motion.div variants={variants.slideUp} initial="initial" animate="animate">
```

### Hover + Tap (Button)

```tsx
<motion.button
  whileHover={interactions.hoverScaleMedium}
  whileTap={interactions.tapScale}
>
```

### Card with Entrance + Hover

```tsx
<motion.div
  variants={variants.cardEntrance}
  initial="initial"
  animate="animate"
  whileHover={interactions.hoverLift}
>
```

### Viewport-Triggered Animation

```tsx
<motion.div
  variants={variants.viewportFadeIn}
  initial="initial"
  whileInView="whileInView"
  viewport={VIEWPORT.once}
>
```

---

## 📏 Golden Rules

1. **Always use constants** - Never hardcode `duration: 0.6`
2. **Always use presets** - Don't recreate `fadeIn`
3. **Always think accessibility** - Add reduced motion support
4. **Always use GPU props** - `transform` and `opacity` only
5. **Keep it short** - Most animations < 1s

---

## 🐛 Quick Fixes

**Animation not triggering?**

- Check if using `motion.div` (not `div`)
- Verify `initial` and `animate` props

**Too slow?**

- Use shorter duration: `DURATION.fast`

**Jittery animation?**

- Use `will-change: transform` in styled component

**Accessibility warning?**

- Add `usePrefersReducedMotion()` hook

---

**Remember:** This system makes animations consistent, performant, and accessible by default. Just import and use! 🚀
