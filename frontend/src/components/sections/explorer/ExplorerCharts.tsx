import { useEffect, useMemo, useState, type ReactNode } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { skillLabels, trackLabels } from "@/data/labels";
import { skills } from "@/data/skills";
import type { SkillId, Track } from "@/data/types";
import { translate } from "@/i18n/translate";
import type { EnrichedProject } from "@/lib/queryProjects";

type ChartPanelProps = {
  title: string;
  children: ReactNode;
  compact?: boolean;
  wide?: boolean;
};

type ExplorerChartsProps = {
  projects: EnrichedProject[];
};

const impactBarColors = ["bg-primary", "bg-primary-light", "bg-primary/70", "bg-primary/50"];
const skillIconById = new Map(skills.map((skill) => [skill.id, skill.icon]));
const skillTrackRotationMs = 3500;

function getPercentage(value: number, total: number) {
  if (total === 0) {
    return 0;
  }

  return Math.round((value / total) * 100);
}

function getTrackCoverage(projects: EnrichedProject[]) {
  const totalProjects = projects.length;
  const trackCounts = projects.reduce<Record<Track, number>>(
    (counts, project) => {
      project.track.forEach((track) => {
        counts[track] += 1;
      });

      return counts;
    },
    { dev: 0, data: 0 },
  );

  return (Object.entries(trackCounts) as Array<[Track, number]>)
    .filter(([, count]) => count > 0)
    .map(([track, count]) => ({
      track,
      value: getPercentage(count, totalProjects),
    }));
}

function getSkillGroupsByTrack(projects: EnrichedProject[]) {
  const skillGroups = projects.reduce<Record<Track, Set<SkillId>>>(
    (groups, project) => {
      project.track.forEach((track) => {
        project.skills.forEach((skill) => groups[track].add(skill));
      });

      return groups;
    },
    {
      dev: new Set<SkillId>(),
      data: new Set<SkillId>(),
    },
  );

  return (Object.entries(skillGroups) as Array<[Track, Set<SkillId>]>)
    .map(([track, skillSet]) => ({
      track,
      skills: Array.from(skillSet).sort(),
    }))
    .filter((group) => group.skills.length > 0);
}

function ChartPanel({ title, children, compact = false, wide = false }: ChartPanelProps) {
  return (
    <div className={`${wide ? "lg:col-span-2" : ""}`}>
      <div className={compact ? "mb-2" : "mb-5"}>
        <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      </div>

      {children}
    </div>
  );
}

const ExplorerCharts = ({ projects }: ExplorerChartsProps) => {
  const { copy, locale } = useLanguage();
  const [skillTrackIndex, setSkillTrackIndex] = useState(0);
  const chartTitles = copy.explorer.charts;
  const maxHours = Math.max(...projects.map((project) => project.metrics.hoursInvested), 1);
  const trackCoverage = getTrackCoverage(projects);
  const skillGroups = useMemo(() => getSkillGroupsByTrack(projects), [projects]);
  const activeSkillGroup = skillGroups[skillTrackIndex] ?? skillGroups[0];
  const sortedProjectsByHours = projects.toSorted(
    (projectA, projectB) => projectB.metrics.hoursInvested - projectA.metrics.hoursInvested,
  );

  useEffect(() => {
    setSkillTrackIndex(0);
  }, [skillGroups]);

  useEffect(() => {
    if (skillGroups.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSkillTrackIndex((currentIndex) => (currentIndex + 1) % skillGroups.length);
    }, skillTrackRotationMs);

    return () => window.clearInterval(intervalId);
  }, [skillGroups.length]);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <ChartPanel title={chartTitles.impactOverview} compact>
        <div className="flex h-64 items-end gap-3 rounded-md px-3 pb-2 pt-1">
          {sortedProjectsByHours.map((project, index) => {
            const height = getPercentage(project.metrics.hoursInvested, maxHours);
            const barColor = impactBarColors[index] ?? "bg-primary/40";
            const projectTitle = translate(project.title, locale);

            return (
              <div
                key={project.id}
                className="group relative flex min-w-0 flex-1 flex-col items-center gap-3 outline-none"
                aria-label={projectTitle}
                tabIndex={0}
              >
                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-max max-w-56 -translate-x-1/2 rounded-md border border-border bg-popover px-3 py-2 text-center font-body text-xs font-semibold leading-4 text-popover-foreground opacity-0 shadow-medium transition-smooth group-hover:opacity-100 group-focus-visible:opacity-100">
                  {projectTitle}
                  <span
                    className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-border bg-popover"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex h-52 w-full items-end rounded-lg bg-primary/10 px-1.5 py-1.5">
                  <div
                    className={`w-full rounded-lg ${barColor}`}
                    style={{ height: `${height}%` }}
                  />
                </div>
                <span className="font-body text-xs font-semibold text-foreground">
                  {project.metrics.hoursInvested}h
                </span>
              </div>
            );
          })}
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
                  className={`h-full rounded-full ${
                    item.track === "data" ? "bg-accent" : "bg-primary"
                  }`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}

          {activeSkillGroup ? (
            <div className="pt-2">
              <p
                className={`mb-3 font-body text-xs font-bold ${
                  activeSkillGroup.track === "data" ? "text-accent" : "text-primary"
                }`}
              >
                {translate(trackLabels[activeSkillGroup.track], locale)}
              </p>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {activeSkillGroup.skills.map((skill) => {
                  const SkillIcon = skillIconById.get(skill);
                  const skillLabel = translate(skillLabels[skill], locale);

                  if (!SkillIcon) {
                    return null;
                  }

                  return (
                    <div
                      key={skill}
                      className="text-center"
                      aria-label={skillLabel}
                      title={skillLabel}
                    >
                      <div
                        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-md ${
                          activeSkillGroup.track === "data"
                            ? "bg-accent/10 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <SkillIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
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
