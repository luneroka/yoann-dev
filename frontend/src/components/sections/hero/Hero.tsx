import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Layers3,
  Code2,
  Database,
  ChevronsDown,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { handleSectionLinkClick } from "@/lib/scrollToSection";
import TopographicBackground from "./TopographicBackground";

const highlightIcons = [BriefcaseBusiness, Building2, Database, Code2];

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
      className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-b from-background via-background to-transparent px-4 pb-32 pt-32 sm:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_42%,hsl(var(--primary)/0.08),transparent_30%),radial-gradient(circle_at_15%_78%,hsl(var(--primary)/0.08),transparent_26%)] [mask-image:linear-gradient(to_bottom,black_0%,black_76%,transparent_100%)]"
        aria-hidden="true"
      />
      <TopographicBackground />

      <div className="container relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_440px] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center sm:text-left"
          >
            <motion.p
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-card/70 px-4 py-2 font-body text-xs font-bold tracking-wide text-accent shadow-soft backdrop-blur sm:text-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center text-accent">
                <Layers3 className="h-5 w-5" aria-hidden="true" />
              </span>
              {copy.hero.eyebrow}
            </motion.p>

            <motion.h1
              className="max-w-4xl font-heading text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {copy.hero.name}
            </motion.h1>

            <motion.span
              className="mx-auto my-7 block h-1 w-16 rounded-full bg-accent sm:mx-0"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.28, duration: 0.5 }}
            />

            <motion.p
              className="mb-7 max-w-3xl font-body text-2xl leading-snug text-foreground sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {copy.hero.subtitle.intro}
              <span className="font-semibold text-accent">{copy.hero.subtitle.firstHighlight}</span>
              {copy.hero.subtitle.middle}
              <span className="font-semibold text-primary">
                {copy.hero.subtitle.secondHighlight}
              </span>
              {copy.hero.subtitle.end}
            </motion.p>

            <motion.p
              className="mx-auto mb-10 max-w-3xl font-body text-base leading-7 text-muted-foreground sm:mx-0 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {copy.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href="#explorer"
                onClick={handleSectionLinkClick}
                className="group inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 font-body text-sm font-bold text-primary-foreground shadow-medium transition-smooth hover:bg-primary-dark hover:shadow-large"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {copy.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={handleSectionLinkClick}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-primary bg-background px-6 py-3 font-body text-sm font-bold text-primary shadow-soft transition-smooth hover:bg-primary hover:text-primary-foreground hover:shadow-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {copy.hero.ctaSecondary}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-md lg:grid-cols-1 lg:justify-self-end"
            initial="hidden"
            animate="visible"
            variants={cardStackVariants}
            aria-label={copy.hero.highlightsLabel}
          >
            {highlightCards.map((card, index) => {
              const isAccentCard = index < 2;
              const Icon = highlightIcons[index];

              return (
                <motion.div
                  key={card.value}
                  className={`flex min-h-32 items-center gap-5 rounded-2xl border border-border/80 bg-card/80 p-5 shadow-soft backdrop-blur transition-colors duration-100 ease-linear hover:shadow-medium ${
                    isAccentCard ? "hover:border-accent/60" : "hover:border-primary/60"
                  }`}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  transition={{ type: "tween", duration: 0.1, ease: "linear" }}
                >
                  <span
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${
                      isAccentCard ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-10 w-10 stroke-[1.75]" aria-hidden="true" />
                  </span>
                  <div>
                    <p
                      className={`font-heading font-bold leading-tight ${
                        isAccentCard ? "text-3xl text-accent" : "text-2xl text-primary"
                      }`}
                    >
                      {card.value}
                    </p>
                    <p className="mt-2 font-body text-base font-bold leading-5 text-foreground">
                      {card.label}
                    </p>
                    <p className="mt-1 font-body text-sm leading-5 text-muted-foreground">
                      {card.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#journey"
        onClick={handleSectionLinkClick}
        className="group absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-body text-sm font-semibold text-muted-foreground transition-smooth hover:text-primary"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
        >
          <ChevronsDown
            className="h-7 w-7 transition-smooth group-hover:text-primary"
            aria-hidden="true"
          />
        </motion.span>
        {copy.hero.discoverJourney}
      </motion.a>
    </section>
  );
}
