import type { Project } from "../types";

import { budgetConstructionExcel } from "./budgetConstructionExcel";
import { budgetConstruction } from "./budgetConstruction";

export const projects = [budgetConstruction, budgetConstructionExcel] satisfies Project[];
