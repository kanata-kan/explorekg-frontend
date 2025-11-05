// lib/motion.ts
import { motion } from "framer-motion";
import Link from "next/link";

export const m = {
  div: motion.create("div"),
  section: motion.create("section"),
  article: motion.create("article"),
  header: motion.create("header"),
  footer: motion.create("footer"),
  img: motion.create("img"),
  span: motion.create("span"),
  p: motion.create("p"),
  Link: motion.create("Link"),
};
