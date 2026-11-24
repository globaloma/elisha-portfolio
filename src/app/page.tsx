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
      footer={<Footer />}
      hero={
        /* ===================== HERO (dark, full-bleed band) ===================== */
        <section
          id="home"
          className="theme-dark relative overflow-hidden bg-[color:var(--background)] text-foreground scroll-mt-24"
        >
          <div className="mx-0 w-full max-w-5xl px-6 py-24 sm:px-10 sm:py-28 lg:py-52 lg:pl-16 lg:pr-10">
            <div className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-[0.02em] top-[54%] z-0 select-none whitespace-nowrap font-sans text-[20vw] font-semibold leading-none tracking-[0.32em] text-foreground/[0.03] lg:text-[11rem]"
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

            <h1 className="mt-6 font-heading text-6xl font-bold leading-[1.0] tracking-tight sm:text-7xl lg:text-8xl">
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
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[color:var(--brand-foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-2px_rgba(0,229,255,0.5)]"
                style={{ background: "var(--brand)" }}
              >
                <Icon name="message-circle" className="size-4" />
                Hire Me
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/[0.03] px-5 py-3 text-sm font-semibold transition-colors hover:border-[color:var(--brand)]  hover:text-[color:var(--brand)]"
              >
                <Icon name="layout-grid" className="size-4" />
                Projects
              </Link>
              <a
                href={profile.resumeHref}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/[0.03] px-5 py-3 text-sm font-semibold transition-colors hover:border-[color:var(--brand)]  hover:text-[color:var(--brand)]"
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
                className="flex-1 cursor-default rounded-lg bg-[#17191a] px-4 py-3.5 text-center shadow-sm ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:ring-[#00e5ff]/60 hover:shadow-[0_0_24px_-4px_rgba(0,229,255,0.5)] lg:w-32 lg:text-left"
              >
                <div className="font-heading text-2xl font-bold text-[color:var(--brand-bright)]">{s.value}</div>
                <div className="mt-1 text-xs text-white/55">{s.label}</div>
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
        <SectionHeading icon="user-solid" title="About Me" />
        <div className="card-shadow mt-8 rounded-2xl bg-[color:var(--surface)] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{highlight(p)}</p>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              {about.facts.map((f) => {
                const inner = (
                  <>
                    <Icon name={f.icon} className="size-5 shrink-0 text-brand" />
                    <span className="text-sm font-medium">{f.label}</span>
                  </>
                );
                const cardClass =
                  "flex items-center gap-3 rounded-[10px] border border-transparent bg-[#e3ded7] px-4 py-3.5 transition-colors hover:border-[#006680]";
                return "href" in f && f.href ? (
                  <a key={f.label} href={f.href} className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <div key={f.label} className={cardClass}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== SERVICES ============================== */}
      <section className="mt-24">
        <SectionHeading icon="chevrons-left-solid" title="Services" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group card-shadow rounded-2xl border border-transparent bg-[color:var(--surface)] p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(27,23,20,0.14)] hover:shadow-[0_2px_4px_rgba(27,23,20,0.05),0_18px_40px_-18px_rgba(27,23,20,0.24)]"
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
        <SectionHeading icon="grid-solid" title="Projects" />
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
        <SectionHeading icon="folder-solid" title="Experience" />
        <div className="relative mt-8 space-y-5 pl-9">
          {/* timeline rail */}
          <span
            aria-hidden
            className="absolute left-[9px] top-6 bottom-6 w-px bg-[color:var(--border)]"
          />
          {experience.map((job, i) => (
            <div key={job.role} className="relative">
              {/* timeline dot — first (current) role highlighted */}
              <span
                aria-hidden
                className="absolute -left-[33px] top-[26px] size-3.5 rounded-full ring-4 ring-[color:var(--background)]"
                style={{
                  background: i === 0 ? "var(--brand)" : "color-mix(in oklab, var(--foreground) 28%, transparent)",
                }}
              />
              <div className="card-shadow rounded-2xl border border-transparent bg-[color:var(--surface)] p-6 transition-[box-shadow,border-color] duration-300 ease-out hover:border-[rgba(27,23,20,0.14)] hover:shadow-[0_2px_4px_rgba(27,23,20,0.05),0_18px_40px_-18px_rgba(27,23,20,0.24)] sm:p-7">
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
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--brand)" }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== CAPABILITIES (SKILLS) ============================== */}
      <section id="skills" className="mt-24 scroll-mt-24">
        <SectionHeading icon="orbit" title="My Capabilities" />
        <div className="card-shadow mt-8 rounded-2xl bg-[color:var(--surface)] p-6 sm:p-10">
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
          <SectionHeading icon="toolbox-solid" title="Tools & Technology" />
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t}
                className="rounded-[10px] border border-[#006680] bg-[#e9e5dd] px-4 py-3.5 text-sm font-semibold transition-shadow duration-300 hover:shadow-[inset_3px_0_0_0_#006680,inset_0_-3px_0_0_#006680]"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-10">
          <SectionHeading icon="graduation-cap-solid" title="Education & Certs" />
          <div className="mt-6 grid gap-3">
            {education.map((e) => (
              <div
                key={e.title}
                className="flex items-start gap-4 rounded-2xl bg-[#e9e5dd] p-5 transition-shadow duration-300 hover:shadow-[inset_4px_0_0_0_#006680,inset_0_-4px_0_0_#006680]"
              >
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#74a5ae] bg-[#c6d2cf]"
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
        <SectionHeading icon="bar-chart-solid" title="Currently Building" />
        <div className="card-shadow mt-8 grid overflow-hidden rounded-2xl bg-[color:var(--surface)] md:grid-cols-[minmax(0,340px)_1fr]">
            <div className="relative min-h-[260px] overflow-hidden md:min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentlyBuilding.image}
                alt={`${currentlyBuilding.name} — preview`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
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
      </section>

      {/* ============================== CONTACT ============================== */}
      <ContactSection id="contact" />
    </Shell>
  );
}
