import type { ReactNode } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { skillLabels, trackLabels } from "@/data/labels";
import { projects } from "@/data/projects";
import type { SkillId, Track } from "@/data/types";
import { translate } from "@/i18n/translate";

type ChartPanelProps = {
  title: string;
  children: ReactNode;
  wide?: boolean;
};

const impactBars = [72, 88, 64, 80];
const trackCoverage: Array<{ track: Track; value: number }> = [
  { track: "dev", value: 74 },
  { track: "data", value: 68 },
];
const skillCoverage: Array<{ skill: SkillId; value: number }> = [
  { skill: "typescript", value: 76 },
  { skill: "python", value: 70 },
  { skill: "sql", value: 82 },
  { skill: "power-query", value: 58 },
];

function ChartPanel({ title, children, wide = false }: ChartPanelProps) {
  return (
    <div className={`${wide ? "lg:col-span-2" : ""}`}>
      <div className="mb-5">
        <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      </div>

      {children}
    </div>
  );
}

const ExplorerCharts = () => {
  const { copy, locale } = useLanguage();
  const chartTitles = copy.explorer.charts;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <ChartPanel title={chartTitles.impactOverview}>
        <div className="flex h-56 items-end gap-3 rounded-md p-4">
          {impactBars.map((height, index) => (
            <div key={height} className="flex min-w-0 flex-1 flex-col items-center gap-3">
              <div className="flex h-40 w-full items-end rounded-full bg-primary/10 px-1.5 py-1.5">
                <div
                  className={`w-full rounded-full ${index === 1 ? "bg-accent" : "bg-primary"}`}
                  style={{ height: `${height}%` }}
                />
              </div>
              <span className="font-body text-xs font-semibold text-muted-foreground">
                {height}%
              </span>
            </div>
          ))}
        </div>
      </ChartPanel>

      <ChartPanel title={chartTitles.skillCoverage}>
        <div className="space-y-5 rounded-md p-4">
          {trackCoverage.map((item) => (
            <div key={item.track}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="font-body text-sm font-semibold text-foreground">
                  {translate(trackLabels[item.track], locale)}
                </span>
                <span className="font-body text-xs font-bold text-primary">{item.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-primary/10">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {skillCoverage.map((item, index) => (
              <div
                key={item.skill}
                className="rounded-md border border-border bg-card px-3 py-3 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-end justify-center gap-1 rounded-full bg-primary/10 p-2">
                  <span
                    className={`w-2 rounded-full ${index === 2 ? "bg-accent" : "bg-primary"}`}
                    style={{ height: `${item.value}%` }}
                    aria-hidden="true"
                  />
                  <span className="h-5 w-2 rounded-full bg-primary/30" aria-hidden="true" />
                </div>
                <p className="mt-2 truncate font-body text-xs font-bold text-foreground">
                  {translate(skillLabels[item.skill], locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ChartPanel>

      <ChartPanel title={chartTitles.timeline} wide>
        <div className="relative">
          <div
            className="absolute inset-x-4 top-1/2 hidden h-px bg-border sm:block"
            aria-hidden="true"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative rounded-lg border border-border bg-card p-4"
              >
                <span
                  className={`absolute -top-1 left-4 h-2 w-12 rounded-full ${
                    index === 0 ? "bg-primary" : "bg-accent"
                  }`}
                  aria-hidden="true"
                />
                <p className="font-body text-sm font-bold text-foreground">
                  {translate(project.title, locale)}
                </p>
                <p className="mt-2 font-body text-xs font-semibold text-muted-foreground">
                  {translate(project.period, locale)}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {project.track.map((track) => (
                    <span
                      key={track}
                      className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-body text-xs font-bold text-primary"
                    >
                      {translate(trackLabels[track], locale)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ChartPanel>
    </div>
  );
};

export default ExplorerCharts;
