import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/shell";
import { Footer } from "@/components/site/footer";
import { Eyebrow } from "@/components/site/section-heading";
import { ProjectCard } from "@/components/site/project-card";
import { ContactSection } from "@/components/site/contact-section";
import { Icon } from "@/components/icon";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected product design and mobile development work by Elisha Ibeabuchi — Crib, Tranx, LocalBite, VoltPass and Bookmaker.",
};

export default function ProjectsPage() {
  return (
    <Shell>
      <section>
        <Eyebrow>Projects</Eyebrow>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Discover Projects
          </h1>
          <p className="border-l-2 pl-4 text-[15px] leading-relaxed text-muted-foreground" style={{ borderColor: "var(--brand)" }}>
            Explore some of my works where strategy meets creativity. Each design has been carefully
            done, analyzed, and researched before the final output — a testament to what I am capable
            of doing.
          </p>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>

      <section className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-[color:var(--surface)] p-7 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-heading text-xl font-semibold">Have a product in mind?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Let&apos;s design and build something people love to use.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[color:var(--brand-foreground)] transition-opacity hover:opacity-90"
          style={{ background: "var(--brand)" }}
        >
          <Icon name="message-circle" className="size-4" />
          Start a project
        </Link>
      </section>

      <ContactSection />

      <Footer />
    </Shell>
  );
}
