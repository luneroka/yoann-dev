import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

const cardStackVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const { copy } = useLanguage();
  const highlightCards = copy.hero.highlightCards;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:pt-36"
    >
      <div className="container relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center sm:text-left"
          >
            <motion.p
              className="mb-5 inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-2 font-body text-sm font-semibold text-accent shadow-soft backdrop-blur"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {copy.hero.eyebrow}
            </motion.p>

            <motion.h1
              className="mb-5 max-w-4xl font-heading text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {copy.hero.name}
            </motion.h1>

            <motion.h2
              className="mb-6 max-w-3xl font-heading text-2xl font-light leading-snug text-foreground/75 sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {copy.hero.title}
            </motion.h2>

            <motion.p
              className="mx-auto mb-10 max-w-3xl font-body text-lg leading-8 text-muted-foreground sm:mx-0 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {copy.hero.subtitle}
            </motion.p>

            <motion.div
              className="mb-12 flex flex-col gap-3 sm:flex-row sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href="#explorer"
                className="group inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 font-body text-sm font-bold text-primary-foreground shadow-medium transition-smooth hover:bg-primary-dark hover:shadow-large"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {copy.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#case-studies"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-primary bg-background px-6 py-3 font-body text-sm font-bold text-primary shadow-soft transition-smooth hover:bg-primary hover:text-primary-foreground hover:shadow-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {copy.hero.ctaSecondary}
              </motion.a>
            </motion.div>

            <motion.div
              className="flex justify-center gap-5 sm:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/robertyoann/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-100 ease-linear hover:border-primary hover:text-primary"
                aria-label={copy.hero.linkedinLabel}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "tween", duration: 0.1, ease: "linear" }}
              >
                <FaLinkedin className="h-5 w-5" aria-hidden="true" />
              </motion.a>

              <motion.a
                href="https://github.com/luneroka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-100 ease-linear hover:border-primary hover:text-primary"
                aria-label={copy.hero.githubLabel}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "tween", duration: 0.1, ease: "linear" }}
              >
                <FaGithub className="h-5 w-5" aria-hidden="true" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-sm lg:grid-cols-1 lg:justify-self-end"
            initial="hidden"
            animate="visible"
            variants={cardStackVariants}
            aria-label="Technical highlights"
          >
            {highlightCards.map((card, index) => {
              const isAccentCard = index < 2;

              return (
              <motion.div
                key={card.value}
                className={`min-h-28 rounded-lg border border-border bg-card/90 p-5 shadow-soft backdrop-blur transition-colors duration-100 ease-linear hover:shadow-medium ${
                  isAccentCard ? "hover:border-accent/60" : "hover:border-primary/60"
                }`}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "tween", duration: 0.1, ease: "linear" }}
              >
                <p
                  className={`font-heading text-xl font-bold leading-tight ${
                    isAccentCard ? "text-accent" : "text-primary"
                  }`}
                >
                  {card.value}
                </p>
                <p className="mt-2 font-body text-sm font-semibold leading-5 text-muted-foreground">
                  {card.label}
                </p>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
