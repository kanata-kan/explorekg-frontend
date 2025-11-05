"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useFooter } from "./useFooter";
import { SOCIALS } from "./footer.data";
import {
  BrandCol,
  FooterGrid,
  FooterWrapper,
  LinksCol,
  NewsletterCol,
  SocialRow,
  BottomBar,
} from "./Footer.styled";
import { Typography } from "../foundation";
import { SITE } from "@/config/constants";

export default function FooterDesktop() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";

  const { email, setEmail, submitting, status, handleSubmit } = useFooter();

  const [footerLinks, setFooterLinks] = useState<
    Record<string, { href: string; label: string }[]>
  >({});

  useEffect(() => {
    import(`@/data/content/${locale}/footerLinks.json`)
      .then((mod) => setFooterLinks(mod.default))
      .catch(console.error);
  }, [locale]);

  return (
    <FooterWrapper
      as={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <FooterGrid>
        {/* 🧭 Brand */}
        <BrandCol>
          <Image
            src="/images/Logo.png"
            alt={`${SITE.NAME} Logo`}
            width={160}
            height={60}
            priority
            sizes="(max-width: 768px) 120px, 160px"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <Typography variant="h3" align="left" color="primary">
            {SITE.NAME}
          </Typography>

          <Typography variant="body" align="left" color="tertiary">
            {SITE.DESCRIPTION}
          </Typography>

          {/* 🌐 Socials */}
          <SocialRow>
            {SOCIALS.map((s) => (
              <Link key={s.name} href={s.href} aria-label={s.alt}>
                <Image src={s.src} alt={s.alt} width={24} height={24} />
              </Link>
            ))}
          </SocialRow>
        </BrandCol>

        {/* 🔗 Footer links */}
        {Object.entries(footerLinks).map(([sectionKey, section]) => (
          <LinksCol key={sectionKey}>
            <Typography variant="h4" align="left" color="primary">
              {sectionKey}
            </Typography>

            {section.map((link) => (
              <Link key={link.href} href={`/${locale}${link.href}`}>
                <Typography variant="body" align="left" color="tertiary">
                  {link.label}
                </Typography>
              </Link>
            ))}
          </LinksCol>
        ))}

        {/* 💌 Newsletter */}
        <NewsletterCol onSubmit={handleSubmit}>
          <Typography variant="h4" align="left">
            {locale === "fr" ? "Newsletter" : "Stay Updated"}
          </Typography>

          <input
            type="email"
            placeholder={
              locale === "fr" ? "Entrez votre email" : "Enter your email"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />

          <button type="submit" disabled={submitting}>
            {submitting
              ? locale === "fr"
                ? "Envoi…"
                : "Sending…"
              : locale === "fr"
                ? "Rejoindre"
                : "Join"}
          </button>

          {status === "ok" && (
            <Typography variant="caption" color="success">
              {locale === "fr" ? "Inscrit avec succès !" : "Subscribed!"}
            </Typography>
          )}
          {status === "err" && (
            <Typography variant="caption" color="danger">
              {locale === "fr" ? "Email invalide" : "Invalid email"}
            </Typography>
          )}
        </NewsletterCol>
      </FooterGrid>

      {/* ⚙️ Bottom Bar */}
      <BottomBar>
        <Typography variant="caption" align="center" color="tertiary">
          {SITE.COPYRIGHT}
        </Typography>
        <Typography variant="caption" align="center" color="tertiary">
          {locale === "fr"
            ? "Construit avec Next.js + styled-components"
            : "Built with Next.js + styled-components"}
        </Typography>
      </BottomBar>
    </FooterWrapper>
  );
}
