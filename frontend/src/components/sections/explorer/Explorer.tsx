import ExplorerDashboard from "./ExplorerDashboard";
import ExplorerHeader from "./ExplorerHeader";

const Explorer = () => {
  return (
    <section id="explorer" className="relative px-4 py-24 sm:py-28">
      <div className="container relative mx-auto max-w-6xl">
        <ExplorerHeader />
        <ExplorerDashboard />
      </div>
    </section>
  );
};

export default Explorer;
