import type { Project } from "../types";

import { budgetConstructionExcel } from "./budgetConstructionExcel";
import { budgetConstruction } from "./budgetConstruction";
import { staffpicks } from "./staffpicks";
import { eCommerceDataAnalysis } from "./eCommerceDataAnalysis";

export const projects = [
  budgetConstruction,
  budgetConstructionExcel,
  staffpicks,
  eCommerceDataAnalysis,
] satisfies Project[];
