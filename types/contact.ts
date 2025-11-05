// types/contact.ts
import { Metadata, ContentBlock } from "./common";

export interface SocialLink {
  platform: string;
  url: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  mapLink: string;
}

export interface ContactForm {
  fields: FormField[];
  submitText: string;
}

export interface ContactPage {
  id: string;
  heading: string;
  content: ContentBlock[];
  form?: ContactForm;
  info: ContactInfo;
  socials: SocialLink[];
  metadata: Metadata;
}
