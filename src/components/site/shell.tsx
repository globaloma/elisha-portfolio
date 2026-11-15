import { Sidebar } from "@/components/site/sidebar";
import { cn } from "@/lib/utils";

export function Shell({
  children,
  className,
  dark,
}: {
  children: React.ReactNode;
  className?: string;
  /** Render the content area with the dark theme (dark case studies). */
  dark?: boolean;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[color:var(--background)]">
      <Sidebar />
      <main
        className={cn(
          "min-h-screen lg:pl-[288px]",
          dark && "theme-dark bg-[color:var(--background)] text-foreground",
          className,
        )}
      >
        <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-24 sm:px-8 lg:pt-16">{children}</div>
      </main>
    </div>
  );
}
