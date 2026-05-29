import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Activity, Boxes, Brain, Clock3, type LucideIcon } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import type { ExplorerMetricSummary } from "@/data/metrics";
import type { ContextMetric, Locale } from "@/data/types";
import { translate } from "@/i18n/translate";

type ExplorerKpiCardProps = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  title?: string;
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
const maxLabelFontSize = 12;
const minLabelFontSize = 9;

function FittedKpiLabel({ label }: { label: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(maxLabelFontSize);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;

    if (!container || !measure) {
      return;
    }

    let animationFrameId = 0;

    function updateFontSize() {
      window.cancelAnimationFrame(animationFrameId);

      animationFrameId = window.requestAnimationFrame(() => {
        const currentContainer = containerRef.current;
        const currentMeasure = measureRef.current;

        if (!currentContainer || !currentMeasure) {
          return;
        }

        const availableWidth = currentContainer.clientWidth;
        const measuredWidth = currentMeasure.scrollWidth;

        if (availableWidth <= 0 || measuredWidth <= 0) {
          return;
        }

        const fittedSize = Math.min(
          maxLabelFontSize,
          Math.max(minLabelFontSize, (availableWidth / measuredWidth) * maxLabelFontSize),
        );

        setFontSize(Number(fittedSize.toFixed(1)));
      });
    }

    updateFontSize();

    const resizeObserver = new ResizeObserver(updateFontSize);
    resizeObserver.observe(container);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [label]);

  return (
    <p
      ref={containerRef}
      className="relative mt-3 overflow-hidden font-body font-semibold leading-tight text-muted-foreground"
      title={label}
    >
      <span
        ref={measureRef}
        className="pointer-events-none absolute left-0 top-0 whitespace-nowrap font-body text-xs font-semibold opacity-0"
        aria-hidden="true"
      >
        {label}
      </span>
      <span className="block whitespace-nowrap" style={{ fontSize: `${fontSize}px` }}>
        {label}
      </span>
    </p>
  );
}

function ExplorerKpiCard({
  label,
  value,
  icon: Icon,
  title,
  accent = false,
}: ExplorerKpiCardProps) {
  return (
    <motion.div
      className={`relative h-24 rounded-lg border bg-background p-4 shadow-soft ${
        accent ? "border-accent/35" : "border-border"
      }`}
      variants={kpiCardVariants}
      title={title}
    >
      <span
        className={`absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full ${
          accent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>

      <div className="flex h-full items-center">
        <div className="min-w-0 pr-8">
          <p className="whitespace-nowrap font-heading text-2xl font-bold leading-none text-foreground">
            {value}
          </p>
          <FittedKpiLabel label={label} />
        </div>
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
      value: formatNumber(metrics.hoursInvested, locale),
      icon: Clock3,
    },
    {
      id: "systems-built",
      label: kpis.systemsBuilt,
      value: formatNumber(metrics.systemsBuilt, locale),
      icon: Boxes,
    },
    {
      id: "skills-demonstrated",
      label: kpis.skillsDemonstrated,
      value: formatNumber(metrics.skillsDemonstrated, locale),
      icon: Brain,
      title: kpis.skillsDemonstratedHelper,
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
