import { Sidebar } from "@/components/site/sidebar";
import { cn } from "@/lib/utils";

export function Shell({
  children,
  className,
  dark,
  hero,
  footer,
}: {
  children: React.ReactNode;
  className?: string;
  /** Render the content area with the dark theme (dark case studies). */
  dark?: boolean;
  /** Full-bleed band rendered flush across the whole content area (e.g. the home hero). */
  hero?: React.ReactNode;
  /** Full-bleed footer rendered flush to the left, right and bottom edges of the content area. */
  footer?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[color:var(--background)]">
      <Sidebar />
      <main
        className={cn(
          "flex min-h-screen flex-col lg:pl-[288px]",
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
        {footer && <div className="mt-auto">{footer}</div>}
      </main>
    </div>
  );
}
