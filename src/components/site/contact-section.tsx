import { SectionHeading } from "@/components/site/section-heading";
import { Icon } from "@/components/icon";
import { profile, socials } from "@/lib/data";

export function ContactSection({ id }: { id?: string }) {
  const cards = [
    { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: "mail", label: "Email", value: profile.email, href: profile.emailHref },
    { icon: "map-pin", label: "Location", value: profile.location },
    { icon: "clock", label: "Availability", value: profile.availability },
  ];

  return (
    <section id={id} className="mt-24 scroll-mt-24">
      <SectionHeading icon="phone" title="Contact" />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {cards.map((c) => {
            const body = (
              <>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <Icon name={c.icon} className="size-4 text-brand" />
                  {c.label}
                </div>
                <div className="mt-2 break-words font-medium">{c.value}</div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="rounded-2xl border border-border bg-[color:var(--surface)] p-5 transition-colors hover:border-white/20"
              >
                {body}
              </a>
            ) : (
              <div key={c.label} className="rounded-2xl border border-border bg-[color:var(--surface)] p-5">
                {body}
              </div>
            );
          })}
        </div>

        <div
          className="flex flex-col rounded-2xl border p-6"
          style={{
            borderColor: "color-mix(in oklab, var(--brand) 30%, var(--border))",
            background: "color-mix(in oklab, var(--brand) 8%, var(--surface))",
          }}
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--brand)" }} />
            Available for Projects
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Looking for opportunities to design and build meaningful digital products, collaborate
            with teams, and turn ideas into intuitive mobile experiences.
          </p>
          <a
            href={profile.whatsappHref}
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[color:var(--brand-foreground)] transition-opacity hover:opacity-90"
            style={{ background: "var(--brand)" }}
          >
            <Icon name="message-circle" className="size-4" />
            Let&apos;s Talk
          </a>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-[color:var(--surface)] px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
          >
            <Icon name={s.icon} className="size-4" />
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
