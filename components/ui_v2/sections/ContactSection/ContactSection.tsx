// components/ui_v2/sections/contactSection/ContactSection.ts
"use client";

import { useTranslations } from "next-intl";
import { Typography, Button } from "@/components/ui_v2/foundation";
import {
  Description,
  FormField,
  FormWrapper,
  Header,
  InfoCard,
  InfoGrid,
  InfoItem,
  Inner,
  Section,
  SocialList,
  SubmitButton,
  Title,
} from "./ContactSection.styled";
import { ContactPage } from "@/lib/validators/contact";

/* -----------------------------------------------------------
   🧭 Main Component
----------------------------------------------------------- */
export default function ContactSection_v3({ data }: { data: ContactPage }) {
  const t = useTranslations("contact");

  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Inner>
        {/* 🧭 Header */}
        <Header>
          <Title as="h1" $variant="h2">
            {data.heading}
          </Title>
          {data.content.map((block, i) => (
            <Description key={i}>{block.text}</Description>
          ))}
        </Header>

        {/* 🗺️ Info + Socials */}
        <InfoGrid>
          <InfoCard whileHover={{ scale: 1.02 }}>
            <Typography as="h2" variant="h4" color="accent">
              {t("info.title")}
            </Typography>
            <InfoItem>
              📧 <a href={`mailto:${data.info.email}`}>{data.info.email}</a>
            </InfoItem>
            <InfoItem>
              📞 <a href={`tel:${data.info.phone}`}>{data.info.phone}</a>
            </InfoItem>
            <InfoItem>🏠 {data.info.address}</InfoItem>
            <InfoItem>
              🌍{" "}
              <a href={data.info.mapLink} target="_blank">
                {t("info.mapLink")}
              </a>
            </InfoItem>
          </InfoCard>

          <InfoCard whileHover={{ scale: 1.02 }}>
            <Typography as="h2" variant="h4" color="accent">
              {t("socials.title")}
            </Typography>
            <SocialList>
              {data.socials.map((social, i) => (
                <li key={i}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </SocialList>
          </InfoCard>
        </InfoGrid>

        {/* 💬 Form */}
        {data.form && (
          <FormWrapper>
            <Typography
              as="h2"
              variant="h3"
              color="accent"
              style={{ marginBottom: "1rem" }}
            >
              {t("form.title")}
            </Typography>
            <form>
              {data.form.fields.map((field, i) => (
                <FormField key={i}>
                  <label htmlFor={field.name}>{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      required={field.required}
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      required={field.required}
                    />
                  )}
                </FormField>
              ))}
              <SubmitButton as="button" $variant="primary">
                {data.form.submitText}
              </SubmitButton>
            </form>
          </FormWrapper>
        )}
      </Inner>
    </Section>
  );
}
