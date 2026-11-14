import Link from "next/link";
import { Icon } from "@/components/icon";
import { Tag } from "@/components/site/tag";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const isExternal = /^https?:\/\//.test(project.cta.href);
  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-border bg-[color:var(--surface)] p-5 transition-colors hover:border-[color:color-mix(in_oklab,var(--brand)_40%,var(--border))] sm:p-6"
    >
      <div className="grid items-center gap-6 md:grid-cols-[minmax(0,0.95fr)_1fr]">
        {/* Visual — real exported design image */}
        <div
          className="relative overflow-hidden rounded-2xl border border-border"
          style={{
            background: `radial-gradient(90% 80% at 50% 0%, color-mix(in oklab, ${project.brand} 16%, #0c0d0f), #0a0b0d)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.name} — preview`}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="font-heading text-2xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              href={project.cta.href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-opacity hover:opacity-80"
            >
              {project.cta.label}
              <Icon
                name={project.cta.label.includes("Live") ? "external-link" : "arrow-right"}
                className={cn("size-4 transition-transform group-hover:translate-x-0.5")}
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
