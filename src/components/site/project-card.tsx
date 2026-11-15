import Link from "next/link";
import { Icon } from "@/components/icon";
import { Tag } from "@/components/site/tag";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const isExternal = /^https?:\/\//.test(project.cta.href);
  return (
    <article
      className="group relative grid overflow-hidden rounded-2xl bg-[color:var(--surface)] card-shadow md:grid-cols-[minmax(0,0.95fr)_1fr]"
    >
        {/* Visual — real exported design image, full-bleed */}
        <div className="relative min-h-[260px] overflow-hidden md:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.name} — preview`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Text */}
        <div className="p-6 sm:p-8">
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
    </article>
  );
}
