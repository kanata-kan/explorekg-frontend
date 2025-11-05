"use client";

import { useState, useEffect, useRef } from "react";
import {
  BurgerButton,
  Drawer,
  DrawerHeader,
  DrawerLinks,
  DrawerFooter,
  Overlay,
} from "./Navbar.styled";
import { motion, AnimatePresence, variants } from "@/lib/motion";
import ThemeToggleButton from "../toggles/ThemeToggleButton/ThemeToggleButton";
import LanguageSwitcher from "../toggles/LanguageSwitcher/LanguageSwitcher";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/config/constants";

/* 📱 NavbarResponsive Component
   ------------------------------------------------------------
   - Drawer-based mobile navigation
   - Localized links + Theme/Language toggles
   - Features animated icons for each route
*/

// Icon mapping for each route
const getNavIcon = (href: string) => {
  const icons: Record<string, string> = {
    "/": "🏠",
    "/activities": "🎯",
    "/cars": "🚗",
    "/travel-packs": "✈️",
    "/gallery": "📸",
    "/our-story": "📖",
    "/contact": "📧",
  };
  return icons[href] || "→";
};

export default function NavbarResponsive({ scrolled }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";
  const [navLinks, setNavLinks] = useState<{ label: string; href: string }[]>(
    []
  );
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import(`@/data/content/${locale}/navLinks.json`)
      .then((mod) => setNavLinks(mod.default))
      .catch(console.error);
  }, [locale]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* 🍔 Burger Button */}
      {!open && (
        <BurgerButton
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            top: "1.2rem",
            right: "1.3rem",
            zIndex: 11000,
          }}
        >
          ☰
        </BurgerButton>
      )}

      <AnimatePresence>
        {open && (
          <>
            <Overlay
              variants={variants.overlayFade}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            <Drawer
              ref={drawerRef}
              variants={variants.drawerSlide}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* 🧭 Drawer Header */}
              <DrawerHeader>
                <div className="header-content">
                  <h2>{SITE.NAME}</h2>
                  <span>{SITE.SUBTITLE}</span>
                </div>
                <button onClick={() => setOpen(false)} className="close-btn">
                  ✕
                </button>
              </DrawerHeader>

              {/* 🔗 Drawer Links */}
              <DrawerLinks>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <span style={{ fontSize: "1.4rem" }}>
                      {getNavIcon(link.href)}
                    </span>
                    <Link
                      href={`/${locale}${link.href}`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </DrawerLinks>

              {/* ⚙️ Drawer Footer */}
              <DrawerFooter>
                <div className="footer-inner">
                  <ThemeToggleButton />
                  <LanguageSwitcher />
                </div>
                <p>{SITE.COPYRIGHT}</p>
              </DrawerFooter>
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
