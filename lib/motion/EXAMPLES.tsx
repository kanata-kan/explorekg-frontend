/**
 * Motion System — Usage Examples
 *
 * This file demonstrates how to use the new centralized motion system.
 * These examples show migration patterns from old inline animations to the new system.
 */

import {
  motion,
  AnimatePresence,
  variants,
  interactions,
  VIEWPORT,
  usePrefersReducedMotion,
} from "@/lib/motion";

// ============================================
// EXAMPLE 1: Simple Fade In
// ============================================

// ❌ OLD WAY
function OldFadeIn() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  );
}

// ✅ NEW WAY
function NewFadeIn() {
  return (
    <motion.div variants={variants.fade} initial="initial" animate="animate">
      Content
    </motion.div>
  );
}

// ============================================
// EXAMPLE 2: Slide Up Animation
// ============================================

// ❌ OLD WAY
function OldSlideUp() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Section Content
    </motion.section>
  );
}

// ✅ NEW WAY
function NewSlideUp() {
  return (
    <motion.section
      variants={variants.slideUp}
      initial="initial"
      animate="animate"
    >
      Section Content
    </motion.section>
  );
}

// ============================================
// EXAMPLE 3: Staggered List Animation
// ============================================

// ❌ OLD WAY
function OldStaggeredList({ items }: { items: string[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}

// ✅ NEW WAY
function NewStaggeredList({ items }: { items: string[] }) {
  return (
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
    </motion.div>
  );
}

// ============================================
// EXAMPLE 4: Viewport-Triggered Animation
// ============================================

// ❌ OLD WAY
function OldViewportAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      Content
    </motion.div>
  );
}

// ✅ NEW WAY
function NewViewportAnimation() {
  return (
    <motion.div
      variants={variants.viewportFadeIn}
      initial="initial"
      whileInView="whileInView"
      viewport={VIEWPORT.once}
    >
      Content
    </motion.div>
  );
}

// ============================================
// EXAMPLE 5: Hover & Tap Interactions
// ============================================

// ❌ OLD WAY
function OldButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      Click Me
    </motion.button>
  );
}

// ✅ NEW WAY
function NewButton() {
  return (
    <motion.button
      whileHover={interactions.hoverScaleMedium}
      whileTap={interactions.tapScale}
    >
      Click Me
    </motion.button>
  );
}

// ============================================
// EXAMPLE 6: Card with Hover Effect
// ============================================

// ❌ OLD WAY
function OldCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.35 }}
    >
      Card Content
    </motion.div>
  );
}

// ✅ NEW WAY
function NewCard() {
  return (
    <motion.div
      variants={variants.cardEntrance}
      initial="initial"
      animate="animate"
      whileHover={interactions.hoverLift}
    >
      Card Content
    </motion.div>
  );
}

// ============================================
// EXAMPLE 7: Accessibility-Aware Animation
// ============================================

// ✅ NEW WAY with accessibility
function AccessibleAnimation() {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : variants.slideUp}
      initial="initial"
      animate="animate"
    >
      Content respects user preferences
    </motion.div>
  );
}

// ============================================
// EXAMPLE 8: Hero Section Animation
// ============================================

// ❌ OLD WAY
function OldHeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hero Title</h1>
      <p>Hero Description</p>
    </motion.div>
  );
}

// ✅ NEW WAY
function NewHeroSection() {
  return (
    <motion.div
      variants={variants.heroEntrance}
      initial="initial"
      animate="animate"
    >
      <h1>Hero Title</h1>
      <p>Hero Description</p>
    </motion.div>
  );
}

// ============================================
// EXAMPLE 9: Modal/Lightbox Animation
// ============================================

// ❌ OLD WAY
function OldModal({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overlay"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="content"
          >
            Modal Content
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ✅ NEW WAY
function NewModal({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={variants.overlayFade}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overlay"
          />
          <motion.div
            variants={variants.lightboxContent}
            initial="initial"
            animate="animate"
            exit="exit"
            className="content"
          >
            Modal Content
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ============================================
// EXAMPLE 10: Navigation Drawer
// ============================================

// ❌ OLD WAY
function OldDrawer({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Navigation Links
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ✅ NEW WAY
function NewDrawer({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={variants.drawerSlide}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Navigation Links
        </motion.div>
      )}
    </AnimatePresence>
  );
}
