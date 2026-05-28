import { useEffect, useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Activity, Boxes, Clock3, Cpu, type LucideIcon } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import type { ExplorerMetricSummary } from "@/data/metrics";
import type { ContextMetric, Locale } from "@/data/types";
import { translate } from "@/i18n/translate";

type ExplorerKpiCardProps = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  accent?: boolean;
};

type ExplorerKpiCardsProps = {
  metrics: ExplorerMetricSummary;
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

const contextMetricRotationMs = 3500;

function ExplorerKpiCard({ label, value, icon: Icon, accent = false }: ExplorerKpiCardProps) {
  return (
    <motion.div
      className={`rounded-lg border bg-background p-4 shadow-soft ${
        accent ? "border-accent/35" : "border-border"
      }`}
      variants={kpiCardVariants}
    >
      <div className="flex items-center justify-between gap-3">
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

function formatNumber(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale).format(value);
}

function formatContextMetricValue(metric: ContextMetric | undefined, locale: Locale) {
  if (!metric) {
    return "0";
  }

  const unit = metric.unit ? translate(metric.unit, locale) : "";

  return `${formatNumber(metric.value, locale)}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;
}

const ExplorerKpiCards = ({ metrics }: ExplorerKpiCardsProps) => {
  const { copy, locale } = useLanguage();
  const kpis = copy.explorer.kpis;
  const [contextMetricIndex, setContextMetricIndex] = useState(0);
  const contextMetrics = useMemo(
    () => metrics.contextMetrics.filter((metric) => metric.value > 0),
    [metrics.contextMetrics],
  );
  const selectedContextMetric = contextMetrics[contextMetricIndex] ?? contextMetrics[0];

  useEffect(() => {
    if (contextMetrics.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setContextMetricIndex((currentIndex) => (currentIndex + 1) % contextMetrics.length);
    }, contextMetricRotationMs);

    return () => window.clearInterval(intervalId);
  }, [contextMetrics.length]);

  const cards: ExplorerKpiCardProps[] = [
    {
      id: "hours-invested",
      label: kpis.hoursInvested,
      value: `${formatNumber(metrics.hoursInvested, locale)}h`,
      icon: Clock3,
    },
    {
      id: "systems-built",
      label: kpis.systemsBuilt,
      value: formatNumber(metrics.systemsBuilt, locale),
      icon: Boxes,
    },
    {
      id: "technologies-used",
      label: kpis.technologiesUsed,
      value: formatNumber(metrics.technologiesUsed, locale),
      icon: Cpu,
    },
    {
      id: "context-metric",
      label: selectedContextMetric
        ? translate(selectedContextMetric.label, locale)
        : kpis.contextMetric,
      value: formatContextMetricValue(selectedContextMetric, locale),
      icon: Activity,
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
