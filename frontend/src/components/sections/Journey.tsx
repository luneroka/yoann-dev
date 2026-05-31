import { motion, type Variants } from "framer-motion";
import { ChevronsDown, CircleCheck, Code2 } from "lucide-react";
import { FaAmazon, FaApple } from "react-icons/fa6";
import { SiLidl } from "react-icons/si";

import { useLanguage } from "@/context/LanguageContext";
import { handleSectionLinkClick } from "@/lib/scrollToSection";

const journeyIcons = [FaApple, FaAmazon, SiLidl, Code2];

const timelineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Journey() {
  const { copy } = useLanguage();

  return (
    <section
      id="journey"
      className="relative flex min-h-screen flex-col justify-center px-4 pb-32 pt-20 sm:pt-24"
    >
      <div className="container relative mx-auto max-w-6xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {copy.journey.title}
          </h2>
          <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-accent" />
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-7 text-muted-foreground sm:text-lg">
            {copy.journey.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="relative grid gap-7 md:grid-cols-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={timelineVariants}
          aria-label={copy.journey.timelineLabel}
        >
          <div
            className="absolute bottom-0 left-6 top-0 w-0.5 bg-linear-to-b from-accent via-accent to-primary md:bottom-auto md:left-0 md:right-0 md:top-7 md:h-0.5 md:w-auto md:bg-linear-to-r"
            aria-hidden="true"
          />

          {copy.journey.steps.map((step, index) => {
            const Icon = journeyIcons[index];
            const isCurrent = index === copy.journey.steps.length - 1;

            return (
              <motion.article
                key={`journey-step-${index}`}
                className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 md:block"
                variants={itemVariants}
              >
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-background shadow-soft ${
                    isCurrent ? "border-primary text-primary" : "border-accent text-accent"
                  }`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <div
                  className={`rounded-xl border bg-card/85 p-5 shadow-soft backdrop-blur transition-smooth md:mt-5 ${
                    isCurrent ? "border-primary/25 hover:border-primary/50" : "border-accent/20 hover:border-accent/40"
                  }`}
                >
                  <p
                    className={`font-body text-xs font-bold ${
                      isCurrent ? "text-primary" : "text-accent"
                    }`}
                  >
                    {step.period}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{step.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {step.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 font-body text-sm leading-5 text-muted-foreground"
                      >
                        <CircleCheck
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isCurrent ? "text-primary" : "text-accent"
                          }`}
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <motion.a
        href="#explorer"
        onClick={handleSectionLinkClick}
        className="group absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 whitespace-nowrap font-body text-sm font-semibold text-muted-foreground transition-smooth hover:text-primary"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
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
        {copy.journey.discoverExplorer}
      </motion.a>
    </section>
  );
}
