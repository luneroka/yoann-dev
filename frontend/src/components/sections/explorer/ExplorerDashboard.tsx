import { motion, type Variants } from "framer-motion";

import ExplorerCharts from "./ExplorerCharts";
import ExplorerFilters from "./ExplorerFilters";
import ExplorerKpiCards from "./ExplorerKpiCards";
import ExplorerQueryBar from "./ExplorerQueryBar";

const dashboardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ExplorerMain() {
  return (
    <div className="min-w-0 space-y-6 p-4 sm:p-6">
      <ExplorerQueryBar />
      <ExplorerKpiCards />
      <ExplorerCharts />
    </div>
  );
}

const ExplorerDashboard = () => {
  return (
    <motion.div
      className="mt-12 grid overflow-hidden rounded-lg border border-border bg-card/90 shadow-soft backdrop-blur lg:grid-cols-[220px_minmax(0,1fr)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={dashboardVariants}
    >
      <ExplorerFilters />
      <ExplorerMain />
    </motion.div>
  );
};

export default ExplorerDashboard;
