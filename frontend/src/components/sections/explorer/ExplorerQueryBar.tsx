import { Database } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

type ExplorerQueryBarProps = {
  query: string;
};

const ExplorerQueryBar = ({ query }: ExplorerQueryBarProps) => {
  const { copy } = useLanguage();

  return (
    <div className="rounded-lg border border-border bg-background p-4 shadow-soft">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Database className="h-4 w-4" aria-hidden="true" />
        </span>
        <p className="font-body text-sm font-bold text-foreground">{copy.explorer.query.label}</p>
      </div>

      <div className="overflow-x-auto rounded-md border border-border bg-secondary/35 px-4 py-3">
        <code className="block min-w-max font-mono text-sm leading-6 text-foreground">
          {query}
        </code>
      </div>
    </div>
  );
};

export default ExplorerQueryBar;
