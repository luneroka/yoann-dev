import type { Project } from "../types";

import { budgetConstructionExcel } from "./budgetConstruction";
import { budgetConstruction } from "./budgetConstructionExcel";

export const projects = [budgetConstruction, budgetConstructionExcel] satisfies Project[];
