import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

const ExplorerHeader = () => {
  const { copy } = useLanguage();

  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/*       <p className="mb-5 inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-2 font-body text-sm font-semibold text-accent shadow-soft backdrop-blur">
        {copy.explorer.eyebrow}
      </p> */}

      <h2 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
        {copy.explorer.title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-8 text-muted-foreground">
        {copy.explorer.description}
      </p>
    </motion.div>
  );
};

export default ExplorerHeader;
