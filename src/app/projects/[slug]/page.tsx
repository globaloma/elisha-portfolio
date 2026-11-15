import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/site/shell";
import { Footer } from "@/components/site/footer";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
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
  const url = `/projects/${slug}`;
  return {
    title: cs.name,
    description: cs.intro,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${cs.name} · Elisha Ibeabuchi`,
      description: cs.intro,
      images: [{ url: cs.heroImage, width: cs.heroW, height: cs.heroH, alt: cs.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.name} · Elisha Ibeabuchi`,
      description: cs.intro,
      images: [cs.heroImage],
    },
  };
}

/* ---------- small building blocks ---------- */

/** Muted eyebrow with a short leading rule (matches the design's "— Projects" / "— Designs"). */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-px w-6 bg-[color:var(--muted-foreground)]" />
      {children}
    </span>
  );
}

/** Plain section heading — accent on dark pages, foreground on light (no icon, no rule). */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>;
}

/** Two-column block: title/eyebrow on the left, a bordered intro paragraph on the right. */
function SplitHeader({
  eyebrow,
  title,
  titleClassName,
  intro,
}: {
  eyebrow: string;
  title: string;
  titleClassName?: string;
  intro: string;
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          className={cn(
            "mt-5 font-heading text-4xl font-bold tracking-tight sm:text-5xl",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </div>
      <p className="border-l-2 border-border pl-4 text-[15px] leading-relaxed text-muted-foreground sm:mt-2 sm:max-w-xs">
        {intro}
      </p>
    </div>
  );
}

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

/** Readable text colour for a solid swatch background. */
function swatchInk(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  return lum > 150 ? "#1b1714" : "#f6f6f7";
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
  const isDark = cs.theme === "dark";
  const title = cs.displayName ?? cs.shortName;
  const showChrome = cs.designsChrome === "full";

  return (
    <Shell dark={isDark}>
      {/* Back bar — uses the site brand (cyan on dark pages, teal on light) */}
      <Link
        href="/projects"
        className="relative flex items-center justify-center rounded-2xl border border-border px-5 py-4 text-sm font-semibold text-brand transition-[filter] hover:brightness-110"
        style={{ background: "color-mix(in oklab, var(--brand) 12%, var(--surface))" }}
      >
        <Icon name="arrow-right" className="absolute left-5 size-5 rotate-180" />
        {title} Case Study
      </Link>

      {/* case accent is scoped to the case content; the next-project CTA, sidebar and footer keep the site brand */}
      <div
        className={cn("mt-10", isDark && "case-accent-headings")}
        style={{ ["--brand" as string]: cs.brand }}
      >
        {/* title block — title left, intro right */}
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div>
            <Eyebrow>Projects</Eyebrow>
            <h1
              className={cn(
                "mt-5 font-heading text-5xl font-bold tracking-tight sm:text-6xl",
                isDark && "text-brand",
              )}
            >
              {title}
            </h1>
          </div>
          <p className="border-l-2 border-border pl-4 text-[15px] leading-relaxed text-muted-foreground sm:mt-3 sm:max-w-xs">
            {cs.intro}
          </p>
        </header>

        {/* hero render */}
        <figure className="mt-10 overflow-hidden rounded-3xl border border-border bg-[color:var(--surface-2)]">
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

        {/* overview */}
        <section className="mt-16">
          <SectionTitle>Project Overview</SectionTitle>
          <div className="mt-6 space-y-4 rounded-2xl border border-border bg-[color:var(--surface)] p-6 text-[15px] leading-relaxed text-muted-foreground sm:p-8">
            {cs.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* goal + approach — single card, stacked */}
          <div className="mt-4 rounded-2xl border border-border bg-[color:var(--surface)] p-6 sm:p-8">
            <h3 className="font-heading text-lg font-semibold">The goal</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.goal}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">The approach</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.approach}</p>
          </div>

          {/* project details */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
            <SectionTitle>Color palette</SectionTitle>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cs.palette.map((s) => (
                <div
                  key={s.hex + s.name}
                  className="rounded-2xl border border-border p-5"
                  style={{ background: s.hex }}
                >
                  <div className="font-mono text-sm font-medium" style={{ color: swatchInk(s.hex) }}>
                    {s.hex}
                  </div>
                  <div className="mt-0.5 text-xs" style={{ color: swatchInk(s.hex), opacity: 0.75 }}>
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* problem & solution — single card, stacked */}
        <section className="mt-16">
          <SectionTitle>Problem and Solution</SectionTitle>
          <div className="mt-6 rounded-2xl border border-border bg-[color:var(--surface)] p-6 sm:p-8">
            <h3 className="font-heading text-lg font-semibold">The problem</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.problem}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">The solution</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{cs.solution}</p>
          </div>
        </section>

        {/* selected designs */}
        <section className="mt-16">
          <SplitHeader eyebrow="Designs" title="Selected designs" intro={cs.designsIntro} />
          <div className="mt-10 space-y-16">
            {cs.designs.map((d) => (
              <article key={d.n}>
                {showChrome ? (
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-heading text-3xl font-bold text-brand sm:text-4xl">
                      {d.n}.
                    </span>
                    <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-3xl">
                      {d.title}
                    </h3>
                  </div>
                ) : null}
                <figure className={showChrome ? "mt-6" : ""}>
                  <Figure design={d} />
                </figure>
                {showChrome && (d.desc || d.bullets?.length || d.focus) ? (
                  <div className="mt-6 rounded-2xl border border-border bg-[color:var(--surface)] p-6 sm:p-7">
                    {d.desc ? (
                      <p className="text-[15px] leading-relaxed text-muted-foreground">{d.desc}</p>
                    ) : null}
                    {d.bullets?.length ? (
                      <>
                        <p className="mt-5 font-semibold">Brief explanation</p>
                        <div className="mt-3 space-y-2">
                          {d.bullets.map((b) => (
                            <p key={b.label} className="text-[15px] leading-relaxed">
                              <span className="font-semibold text-foreground">{b.label}:</span>{" "}
                              <span className="text-muted-foreground">{b.text}</span>
                            </p>
                          ))}
                        </div>
                      </>
                    ) : null}
                    {d.focus ? (
                      <p className="mt-4 text-[15px] leading-relaxed">
                        <span className="font-semibold">Design focus:</span>{" "}
                        <span className="text-muted-foreground">{d.focus}</span>
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* reflection */}
        <section className="mt-16">
          <SectionTitle>Project Reflection</SectionTitle>
          <div className="mt-6 rounded-2xl border border-border bg-[color:var(--surface)] p-6 text-[15px] leading-relaxed text-muted-foreground sm:p-8">
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
      </div>

      {/* next project — site brand (cyan on dark, teal on light) */}
      {nextCase ? (
        <Link
          href={`/projects/${nextCase.slug}`}
          className="group mt-14 flex items-center justify-between gap-5 rounded-2xl border border-border bg-[color:var(--surface)] px-6 py-6 text-brand transition-[filter] hover:brightness-110 sm:px-8"
        >
          <span className="text-[15px] font-medium leading-relaxed sm:text-base">
            Explore my next project to see how I approach a different design challenge
          </span>
          <Icon
            name="arrow-right"
            className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
          />
        </Link>
      ) : null}

      <Footer />
    </Shell>
  );
}
