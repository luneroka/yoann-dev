import ExplorerCharts from "./ExplorerCharts";
import ExplorerFilters from "./ExplorerFilters";
import ExplorerKpiCards from "./ExplorerKpiCards";
import ExplorerQueryBar from "./ExplorerQueryBar";

const ExplorerDashboard = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <ExplorerFilters />

      <div className="space-y-6">
        <ExplorerQueryBar />
        <ExplorerKpiCards />
        <ExplorerCharts />
      </div>
    </div>
  );
};

export default ExplorerDashboard;
