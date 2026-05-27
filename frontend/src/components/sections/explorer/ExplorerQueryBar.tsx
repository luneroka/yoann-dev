import { Database } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

type ExplorerQueryBarProps = {
  query: string;
};

const ExplorerQueryBar = ({ query }: ExplorerQueryBarProps) => {
  const { copy } = useLanguage();

  return (
    <div className="border-b border-border bg-secondary/25 px-4 py-3 sm:px-6">
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Database className="h-4 w-4" aria-hidden="true" />
        </span>

        <p className="shrink-0 font-body text-xs font-bold uppercase tracking-wide text-muted-foreground">
          {copy.explorer.query.label}
        </p>

        <code className="min-w-0 overflow-x-auto rounded-md border border-border bg-background px-3 py-2 font-mono text-xs leading-5 text-foreground sm:flex-1">
          {query}
        </code>
      </div>
    </div>
  );
};

export default ExplorerQueryBar;
