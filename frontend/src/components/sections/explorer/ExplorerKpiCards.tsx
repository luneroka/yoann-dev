import { motion, type Variants } from "framer-motion";
import { Boxes, Clock3, Cpu, Euro, type LucideIcon } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

type ExplorerKpiCardProps = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  accent?: boolean;
};

const kpiStackVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const kpiCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ExplorerKpiCard({ label, value, icon: Icon, accent = false }: ExplorerKpiCardProps) {
  return (
    <motion.div
      className={`rounded-lg border bg-background p-4 shadow-soft ${
        accent ? "border-accent/35" : "border-border"
      }`}
      variants={kpiCardVariants}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-heading text-3xl font-bold leading-none text-foreground">{value}</p>
          <p className="mt-3 font-body text-xs font-semibold text-muted-foreground">{label}</p>
        </div>

        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            accent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
          }`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
    </motion.div>
  );
}

const ExplorerKpiCards = () => {
  const { copy } = useLanguage();
  const kpis = copy.explorer.kpis;

  const cards: ExplorerKpiCardProps[] = [
    {
      id: "hours-invested",
      label: kpis.hoursInvested,
      value: "240h",
      icon: Clock3,
    },
    {
      id: "systems-built",
      label: kpis.systemsBuilt,
      value: "8",
      icon: Boxes,
    },
    {
      id: "technologies-used",
      label: kpis.technologiesUsed,
      value: "14",
      icon: Cpu,
    },
    {
      id: "context-metric",
      label: kpis.contextMetric,
      value: "€450K",
      icon: Euro,
      accent: true,
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={kpiStackVariants}
    >
      {cards.map((card) => (
        <ExplorerKpiCard key={card.id} {...card} />
      ))}
    </motion.div>
  );
};

export default ExplorerKpiCards;
