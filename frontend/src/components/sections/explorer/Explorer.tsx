import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { handleSectionLinkClick } from "@/lib/scrollToSection";

import ExplorerDashboard from "./ExplorerDashboard";
import ExplorerHeader from "./ExplorerHeader";

const Explorer = () => {
  const { copy } = useLanguage();

  return (
    <section
      id="explorer"
      className="relative flex min-h-screen flex-col justify-center px-4 pb-32 pt-24 sm:pt-28"
    >
      <div className="container relative mx-auto max-w-6xl">
        <ExplorerHeader />
        <ExplorerDashboard />
      </div>

      <motion.a
        href="#skills"
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
        {copy.explorer.discoverSkills}
      </motion.a>
    </section>
  );
};

export default Explorer;
