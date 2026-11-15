import { Sidebar } from "@/components/site/sidebar";
import { cn } from "@/lib/utils";

export function Shell({
  children,
  className,
  dark,
  hero,
}: {
  children: React.ReactNode;
  className?: string;
  /** Render the content area with the dark theme (dark case studies). */
  dark?: boolean;
  /** Full-bleed band rendered flush across the whole content area (e.g. the home hero). */
  hero?: React.ReactNode;
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
        {hero}
        <div
          className={cn(
            "w-full max-w-5xl px-5 pb-24 sm:px-8",
            hero ? "pt-16 lg:pt-20" : "pt-24 lg:pt-16",
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
