"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Wrapper, LangButton } from "./LanguageSwitcher.styled";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLang = (lang: "en" | "fr") => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <Wrapper>
      <LangButton
        as={motion.button}
        whileTap={{ scale: 0.9 }}
        $active={locale === "en"}
        onClick={() => switchLang("en")}
      >
        EN
      </LangButton>

      <LangButton
        as={motion.button}
        whileTap={{ scale: 0.9 }}
        $active={locale === "fr"}
        onClick={() => switchLang("fr")}
      >
        FR
      </LangButton>
    </Wrapper>
  );
}
