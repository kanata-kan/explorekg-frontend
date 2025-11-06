"use client";

import { useEffect, useState } from "react";
import { Nav, Brand, NavLinks, NavLink } from "./Navbar.styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "../toggles/ThemeToggleButton/ThemeToggleButton";
import LanguageSwitcher from "../toggles/LanguageSwitcher/LanguageSwitcher";
import { SITE } from "@/config/constants";
import { variants, interactions } from "@/lib/motion";

/* 🖥️ NavbarDesktop Component
   ------------------------------------------------------------
   - Fetches localized links dynamically (EN / FR)
   - Displays brand, nav links, and toggles (theme/lang)
   - Features animated nav links with icon hover effects
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

export default function NavbarDesktop({ scrolled }: { scrolled?: boolean }) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";

  const [navLinks, setNavLinks] = useState<{ label: string; href: string }[]>(
    [],
  );

  useEffect(() => {
    import(`@/data/content/${locale}/navLinks.json`)
      .then((mod) => setNavLinks(mod.default))
      .catch(console.error);
  }, [locale]);

  return (
    <Nav
      $scrolled={!!scrolled}
      variants={variants.navbarEntrance}
      initial="initial"
      animate="animate"
    >
      {/* 🧭 Brand */}
      <Brand>
        <span>{SITE.NAME}</span>
        <span>{SITE.SUBTITLE}</span>
      </Brand>

      {/* 🔗 Navigation Links */}
      <NavLinks>
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            whileHover={interactions.hoverScale}
            whileTap={interactions.tapScale}
          >
            <Link href={`/${locale}${link.href}`}>
              <span>{link.label}</span>
              <span className="nav-icon">{getNavIcon(link.href)}</span>
            </Link>
          </NavLink>
        ))}
      </NavLinks>

      {/* ⚙️ Theme + Lang */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <ThemeToggleButton />
        <LanguageSwitcher />
      </div>
    </Nav>
  );
}
