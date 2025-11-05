"use client";

import { useEffect, useState } from "react";
import { NavbarWrapper, Brand, NavLinks } from "./Navbar.styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "../toggles/ThemeToggleButton/ThemeToggleButton";
import LanguageSwitcher from "../toggles/LanguageSwitcher/LanguageSwitcher";
import { SITE } from "@/config/constants";

/* 🖥️ NavbarDesktop Component
   ------------------------------------------------------------
   - Fetches localized links dynamically (EN / FR)
   - Displays brand, nav links, and toggles (theme/lang)
*/

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
    <NavbarWrapper
      $scrolled={scrolled}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* 🧭 Brand */}
      <Brand>
        <span>{SITE.NAME}</span>
        <span>{SITE.SUBTITLE}</span>
      </Brand>

      {/* 🔗 Navigation Links */}
      <NavLinks>
        {navLinks.map((link) => (
          <Link key={link.href} href={`/${locale}${link.href}`}>
            {link.label}
          </Link>
        ))}
      </NavLinks>

      {/* ⚙️ Theme + Lang */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <ThemeToggleButton />
        <LanguageSwitcher />
      </div>
    </NavbarWrapper>
  );
}
