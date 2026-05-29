import type { Project } from "../types";

import { budgetConstructionExcel } from "./budgetConstructionExcel";
import { budgetConstruction } from "./budgetConstruction";
import { staffpicks } from "./staffpicks";
import { eCommerceDataAnalysis } from "./eCommerceDataAnalysis";
import { siteVitrineAguera } from "./siteVitrineAguera";
import { maBibli } from "./maBibli";
import { helpInvest } from "./helpInvest";
import { portfolioRevamp } from "./portfolioRevamp";

export const projects = [
  budgetConstruction,
  budgetConstructionExcel,
  staffpicks,
  eCommerceDataAnalysis,
  siteVitrineAguera,
  maBibli,
  helpInvest,
  portfolioRevamp,
] satisfies Project[];
