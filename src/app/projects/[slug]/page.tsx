import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/site/shell";
import { Footer } from "@/components/site/footer";
import { ContactSection } from "@/components/site/contact-section";
import { SectionHeading, Eyebrow } from "@/components/site/section-heading";
import { Icon } from "@/components/icon";
import { caseStudies, caseStudySlugs, type CaseStudy, type Design } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) return { title: "Case Study" };
  return { title: cs.name, description: cs.intro };
}

/* ---------- small building blocks ---------- */

function Figure({ design }: { design: Design }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={design.image}
      alt={`${design.title} — screens`}
      width={design.w}
      height={design.h}
      loading="lazy"
      decoding="async"
      className="block w-full rounded-2xl border border-border bg-[color:var(--surface-2)] shadow-lg"
    />
  );
}

function BulletList({ design }: { design: Design }) {
  if (!design.bullets?.length) return null;
  return (
    <ul className="mt-4 space-y-2.5">
      {design.bullets.map((b) => (
        <li key={b.label} className="flex gap-3 text-[15px] leading-relaxed">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
          <span>
            <span className="font-semibold text-foreground">{b.label}</span>
            {b.text ? <span className="text-muted-foreground"> — {b.text}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-5">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <Icon name={icon} className="size-4 text-brand" />
        {label}
      </div>
      <div className="mt-2 font-medium">{value}</div>
    </div>
  );
}

/* ---------- page ---------- */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs: CaseStudy | undefined = caseStudies[slug];
  if (!cs) notFound();

  const nextCase = caseStudies[cs.next];

  return (
    <div style={{ ["--brand" as string]: cs.brand }}>
      <Shell>
        {/* back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon name="arrow-right" className="size-4 rotate-180" />
          All projects
        </Link>

        {/* title block */}
        <header className="mt-6">
          <Eyebrow>{cs.category}</Eyebrow>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {cs.shortName}
          </h1>
          <p className="mt-2 text-lg font-medium text-brand">{cs.tagline}</p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {cs.intro}
          </p>
        </header>

        {/* hero render */}
        <figure className="mt-8 overflow-hidden rounded-3xl border border-border bg-[color:var(--surface-2)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cs.heroImage}
            alt={`${cs.name} — hero mockup`}
            width={cs.heroW}
            height={cs.heroH}
            decoding="async"
            className="block w-full"
          />
        </figure>

        {/* quick facts */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <InfoCard icon="user" label="Role" value={cs.info.role} />
          <InfoCard icon="smartphone" label="Platform" value={cs.info.platform} />
          <InfoCard icon="pen-tool" label="Design tool" value={cs.info.tool} />
        </div>

        {/* overview */}
        <section className="mt-16">
          <SectionHeading icon="book-open" title="Project Overview" />
          <div className="mt-6 space-y-4 rounded-2xl border border-border bg-[color:var(--surface)] p-6 text-[15px] leading-relaxed text-muted-foreground">
            {cs.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-6">
              <h3 className="font-heading text-lg font-semibold">The goal</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.goal}</p>
            </div>
            <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-6">
              <h3 className="font-heading text-lg font-semibold">The approach</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.approach}</p>
            </div>
          </div>
        </section>

        {/* project details */}
        <section className="mt-16">
          <SectionHeading icon="layers" title="Project Details" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoCard icon="user" label="My role" value={cs.info.role} />
            <InfoCard icon="pen-tool" label="Design tool" value={cs.info.tool} />
            <InfoCard icon="target" label="Target users" value={cs.info.users} />
            <InfoCard icon="smartphone" label="Platform" value={cs.info.platform} />
            {cs.info.status ? (
              <InfoCard icon="rocket" label="Status" value={cs.info.status} />
            ) : null}
          </div>
        </section>

        {/* palette */}
        {cs.palette?.length ? (
          <section className="mt-16">
            <SectionHeading icon="palette" title="Colour Palette" />
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cs.palette.map((s) => (
                <div
                  key={s.hex + s.name}
                  className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)]"
                >
                  <div className="h-16 w-full" style={{ background: s.hex }} />
                  <div className="p-3">
                    <div className="font-mono text-sm font-medium">{s.hex}</div>
                    <div className="text-xs text-muted-foreground">{s.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* problem & solution */}
        <section className="mt-16">
          <SectionHeading icon="lightbulb" title="Problem & Solution" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-6">
              <h3 className="font-heading text-lg font-semibold">The problem</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.problem}</p>
            </div>
            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: "color-mix(in oklab, var(--brand) 30%, var(--border))",
                background: "color-mix(in oklab, var(--brand) 7%, var(--surface))",
              }}
            >
              <h3 className="font-heading text-lg font-semibold">The solution</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.solution}</p>
            </div>
          </div>
        </section>

        {/* selected designs */}
        <section className="mt-16">
          <SectionHeading icon="layout-grid" title="Selected Designs" />
          <div className="mt-8 space-y-14">
            {cs.designs.map((d) => (
              <article key={d.n}>
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-3xl font-bold text-brand">{d.n}</span>
                  <h3 className="font-heading text-xl font-semibold sm:text-2xl">{d.title}</h3>
                </div>
                <figure className="mt-5">
                  <Figure design={d} />
                </figure>
                {d.desc ? (
                  <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                ) : null}
                <BulletList design={d} />
                {d.focus ? (
                  <p className="mt-4 max-w-3xl text-[15px] leading-relaxed">
                    <span className="font-semibold">Design focus:</span>{" "}
                    <span className="text-muted-foreground">{d.focus}</span>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* reflection */}
        <section className="mt-16">
          <SectionHeading icon="star" title="Project Reflection" />
          <div className="mt-6 rounded-2xl border border-border bg-[color:var(--surface)] p-6 text-[15px] leading-relaxed text-muted-foreground">
            {cs.reflection}
          </div>
          {cs.learned || cs.challenges || cs.improve ? (
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {cs.learned ? (
                <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-5">
                  <h4 className="font-heading font-semibold">What I learned</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cs.learned}</p>
                </div>
              ) : null}
              {cs.challenges ? (
                <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-5">
                  <h4 className="font-heading font-semibold">Challenges</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cs.challenges}</p>
                </div>
              ) : null}
              {cs.improve ? (
                <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-5">
                  <h4 className="font-heading font-semibold">What I&apos;d improve</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cs.improve}</p>
                </div>
              ) : null}
            </div>
          ) : null}
        </section>

        {/* next project */}
        {nextCase && (
          <section className="mt-16" style={{ ["--brand" as string]: nextCase.brand }}>
            <Link
              href={`/projects/${nextCase.slug}`}
              className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-[color:var(--surface)] p-7 transition-colors hover:border-[color:color-mix(in_oklab,var(--brand)_45%,var(--border))] sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Explore my next project
                </p>
                <h2 className="mt-1 font-heading text-2xl font-semibold">{nextCase.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  See how I approach a different design challenge.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                View case study
                <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </section>
        )}

        <ContactSection />
        <Footer />
      </Shell>
    </div>
  );
}
