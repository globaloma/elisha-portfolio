import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export function SectionHeading({
  icon,
  title,
  className,
  line = true,
}: {
  icon: string;
  title: string;
  className?: string;
  line?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span
        className="grid size-9 shrink-0 place-items-center rounded-[4px] border"
        style={{ background: "var(--chip-bg)", borderColor: "var(--chip-border)" }}
      >
        <Icon name={icon} className="size-[18px] text-brand" />
      </span>
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {line && <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand">
      <span className="h-px w-6" style={{ background: "var(--brand)" }} />
      {children}
    </span>
  );
}
