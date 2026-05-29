import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

const CONTACT_LINKS = {
  email: "mailto:contact@yoannrobert.com",
  linkedin: "https://www.linkedin.com/in/robertyoann/",
  github: "https://github.com/luneroka",
} as const;

const contactVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contactCardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

const contactCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const contactCardClassName =
  "group flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-[#0586c7]/25 bg-card px-3 py-5 text-muted-foreground shadow-[0_8px_24px_-18px_rgba(5,134,199,0.35)] transition-[background-color,border-color,box-shadow,color] duration-150 ease-linear will-change-transform hover:border-[#0586c7]/45 hover:bg-[#0586c7]/10 hover:text-[#0586c7] hover:shadow-[0_14px_34px_-18px_rgba(5,134,199,0.55)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#0586c7]";

export default function Contact() {
  const { copy } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/70 px-4 py-28 sm:py-32">
      <motion.div
        className="container mx-auto flex max-w-3xl flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={contactVariants}
      >
        <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {copy.contact.title}
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-7 text-muted-foreground sm:text-lg">
          {copy.contact.phrase}
        </p>

        <motion.div
          className="mt-10 grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-5"
          variants={contactCardsVariants}
        >
          <motion.a
            href={CONTACT_LINKS.email}
            className={contactCardClassName}
            aria-label={copy.contact.emailLabel}
            variants={contactCardVariants}
            whileHover={{ y: -4, transition: { type: "tween", duration: 0.1, ease: "linear" } }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-6 w-6" aria-hidden="true" />
            <span className="font-body text-sm font-bold text-foreground transition-smooth group-hover:text-primary">
              Email
            </span>
          </motion.a>

          <motion.a
            href={CONTACT_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={contactCardClassName}
            aria-label={copy.contact.linkedinLabel}
            variants={contactCardVariants}
            whileHover={{ y: -4, transition: { type: "tween", duration: 0.1, ease: "linear" } }}
            whileTap={{ scale: 0.98 }}
          >
            <FaLinkedin className="h-6 w-6" aria-hidden="true" />
            <span className="font-body text-sm font-bold text-foreground transition-smooth group-hover:text-primary">
              LinkedIn
            </span>
          </motion.a>

          <motion.a
            href={CONTACT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className={contactCardClassName}
            aria-label={copy.contact.githubLabel}
            variants={contactCardVariants}
            whileHover={{ y: -4, transition: { type: "tween", duration: 0.1, ease: "linear" } }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub className="h-6 w-6" aria-hidden="true" />
            <span className="font-body text-sm font-bold text-foreground transition-smooth group-hover:text-primary">
              GitHub
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
