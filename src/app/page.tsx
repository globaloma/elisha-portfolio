import Link from "next/link";
import { Shell } from "@/components/site/shell";
import { Footer } from "@/components/site/footer";
import { SectionHeading } from "@/components/site/section-heading";
import { ProjectCard } from "@/components/site/project-card";
import { ContactSection } from "@/components/site/contact-section";
import { Tag } from "@/components/site/tag";
import { Icon } from "@/components/icon";
import {
  profile,
  stats,
  about,
  services,
  projects,
  experience,
  capabilities,
  tools,
  education,
  currentlyBuilding,
} from "@/lib/data";

// Phrases the design highlights in teal within the About paragraphs.
const ABOUT_HIGHLIGHTS = [
  "Elisha Ibeabuchi",
  "UI/UX design, frontend development and mobile app experiences",
  "Tranx",
];

function highlight(text: string) {
  const pattern = new RegExp(
    `(${ABOUT_HIGHLIGHTS.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  return text.split(pattern).map((part, i) =>
    ABOUT_HIGHLIGHTS.includes(part) ? (
      <span key={i} className="font-medium text-brand">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Shell
      hero={
        /* ===================== HERO (dark, full-bleed band) ===================== */
        <section
          id="home"
          className="theme-dark relative overflow-hidden bg-[color:var(--background)] text-foreground scroll-mt-24"
        >
          <div className="mx-0 w-full max-w-5xl px-6 pb-60 pt-28 sm:px-10 lg:pb-[21rem] lg:pl-16 lg:pr-10 lg:pt-24">
            <div className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-1/2 z-0 -translate-y-1/2 select-none whitespace-nowrap font-sans text-[26vw] font-black leading-none tracking-[-0.02em] text-foreground/[0.06] lg:text-[15.5rem]"
              >
                ELISHA
              </span>

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-brand"
              style={{ background: "color-mix(in oklab, var(--brand) 14%, transparent)" }}
            >
              <span className="h-1.5 w-1.5 rounded-sm" style={{ background: "var(--brand)" }} />
              {profile.tagline}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.firstName}
              <br />
              <span className="brand-grad-text">{profile.lastName}.</span>
            </h1>

            <div className="mt-5 space-y-1 text-[15px] text-muted-foreground sm:text-base">
              <p className="font-medium text-foreground/90">{profile.headlineRoleLine1}</p>
              <p>{profile.headlineRoleLine2}</p>
            </div>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[color:var(--brand-foreground)] transition-opacity hover:opacity-90"
                style={{ background: "var(--brand)" }}
              >
                <Icon name="message-circle" className="size-4" />
                Hire Me
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/[0.03] px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground/20 hover:bg-foreground/[0.06]"
              >
                <Icon name="layout-grid" className="size-4" />
                Projects
              </Link>
              <a
                href={profile.resumeHref}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/[0.03] px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground/20 hover:bg-foreground/[0.06]"
              >
                <Icon name="download" className="size-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* stat cards */}
          <div className="flex gap-3 lg:flex-col">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 rounded-lg bg-[#17191a] px-3.5 py-2.5 text-center shadow-sm lg:w-28 lg:text-left"
              >
                <div className="font-heading text-xl font-bold text-[color:var(--brand-bright)]">{s.value}</div>
                <div className="mt-0.5 text-[11px] text-white/55">{s.label}</div>
              </div>
            ))}
          </div>
            </div>
            </div>
          </div>
        </section>
      }
    >
      {/* ============================== ABOUT ============================== */}
      <section id="about" className="scroll-mt-24">
        <SectionHeading icon="user" title="About Me" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-[color:var(--surface)] p-6 sm:p-8">
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{highlight(p)}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            {about.facts.map((f) => {
              const inner = (
                <>
                  <Icon name={f.icon} className="size-5 shrink-0 text-brand" />
                  <span className="text-sm font-medium">{f.label}</span>
                </>
              );
              return "href" in f && f.href ? (
                <a
                  key={f.label}
                  href={f.href}
                  className="flex items-center gap-3 rounded-xl bg-[color:var(--surface-2)] px-4 py-3.5 transition-colors hover:brightness-95"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-xl bg-[color:var(--surface-2)] px-4 py-3.5"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================== SERVICES ============================== */}
      <section className="mt-24">
        <SectionHeading icon="sparkles" title="Services" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border bg-[color:var(--surface)] p-6 transition-colors hover:border-[color:color-mix(in_oklab,var(--brand)_35%,var(--border))]"
            >
              <span
                className="grid size-12 place-items-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--brand) 16%, var(--surface-2))" }}
              >
                <Icon name={s.icon} className="size-5 text-brand" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== PROJECTS ============================== */}
      <section className="mt-24">
        <SectionHeading icon="layout-grid" title="Projects" />
        <div className="mt-8 space-y-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-[color:var(--surface)] px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            Also designed{" "}
            <span className="font-medium text-foreground">Bookmaker</span>,{" "}
            <span className="font-medium text-foreground">Tesmeg</span>,{" "}
            <span className="font-medium text-foreground">LocalBite</span>,{" "}
            <span className="font-medium text-foreground">VoltPass</span>
            <span className="text-muted-foreground"> + more</span>
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-foreground)] transition-opacity hover:opacity-90"
            style={{ background: "var(--brand)" }}
          >
            View all
            <Icon name="arrow-right" className="size-4" />
          </Link>
        </div>
      </section>

      {/* ============================== EXPERIENCE ============================== */}
      <section className="mt-24">
        <SectionHeading icon="briefcase" title="Experience" />
        <div className="mt-8 space-y-5">
          {experience.map((job) => (
            <div
              key={job.role}
              className="relative rounded-3xl border border-border bg-[color:var(--surface)] p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
                </div>
                <span
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: "color-mix(in oklab, var(--brand) 30%, var(--border))",
                    color: "var(--brand)",
                    background: "color-mix(in oklab, var(--brand) 10%, transparent)",
                  }}
                >
                  {job.period}
                </span>
              </div>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {job.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--brand)" }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== CAPABILITIES (SKILLS) ============================== */}
      <section id="skills" className="mt-24 scroll-mt-24">
        <SectionHeading icon="layers" title="My Capabilities" />
        <div className="mt-8 rounded-3xl border border-border bg-[color:var(--surface)] p-6 sm:p-10">
          <div className="divide-y divide-border">
            {capabilities.map((c) => (
              <div key={c.title} className="py-8 first:pt-0 last:pb-0">
                <div className="relative mb-5 flex items-center justify-center">
                  <span className="absolute left-0 font-heading text-sm text-muted-foreground">
                    ({c.index})
                  </span>
                  <h3 className="font-heading text-xl font-semibold">{c.title}</h3>
                </div>
                <ul className="space-y-2 text-right text-sm text-muted-foreground">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-10">
          <SectionHeading icon="wrench" title="Tools & Technology" />
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-xl border border-border bg-[color:var(--surface)] px-4 py-3.5 text-sm font-medium transition-colors hover:border-foreground/20"
              >
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand)" }} />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-10">
          <SectionHeading icon="graduation-cap" title="Education & Certs" />
          <div className="mt-6 grid gap-3">
            {education.map((e) => (
              <div
                key={e.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-[color:var(--surface)] p-5"
              >
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-lg"
                  style={{ background: "color-mix(in oklab, var(--brand) 14%, var(--surface-2))" }}
                >
                  <Icon name={e.icon} className="size-5 text-brand" />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug">{e.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{e.org}</p>
                  <p className="mt-2 text-xs font-medium text-brand">{e.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CURRENTLY BUILDING ============================== */}
      <section className="mt-24">
        <SectionHeading icon="hammer" title="Currently Building" />
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-[color:var(--surface)] p-6 sm:p-8">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <div
              className="flex items-center justify-center overflow-hidden rounded-2xl border border-border md:w-[320px]"
              style={{ background: `radial-gradient(80% 80% at 50% 0%, color-mix(in oklab, ${currentlyBuilding.brand} 18%, #0b0d0c), #090b0a)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentlyBuilding.image}
                alt={`${currentlyBuilding.name} — preview`}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-contain"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-2xl font-semibold">{currentlyBuilding.name}</h3>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: "color-mix(in oklab, var(--brand) 16%, var(--surface-2))", color: "var(--brand)" }}
                >
                  {currentlyBuilding.status}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-foreground/80">{currentlyBuilding.subtitle}</p>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                {currentlyBuilding.description}
              </p>

              <p className="mt-5 font-heading text-[15px] font-semibold text-foreground">
                Currently working on:
              </p>
              <ul className="mt-2 space-y-2">
                {currentlyBuilding.workingOn.map((w) => (
                  <li key={w} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand)" }} />
                    {w}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {currentlyBuilding.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <Link
                  href={currentlyBuilding.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-opacity hover:opacity-80"
                >
                  View Project
                  <Icon name="arrow-right" className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CONTACT ============================== */}
      <ContactSection id="contact" />

      <Footer />
    </Shell>
  );
}
