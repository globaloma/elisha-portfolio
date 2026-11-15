"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import { navItems, profile } from "@/lib/data";

const spyIds = ["home", "about", "skills", "contact"];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const sections = spyIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(item: (typeof navItems)[number]) {
    if (item.section === "projects") return pathname.startsWith("/projects");
    if (!onHome) return false;
    return active === item.section;
  }

  const Logo = (
    <Link href="/#home" className="group flex items-center" onClick={() => setOpen(false)}>
      <span className="font-heading text-lg font-bold tracking-tight text-brand">
        Elisha Ibeabuchi
      </span>
    </Link>
  );

  const NavList = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const act = isActive(item);
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              "group flex items-center gap-3 rounded-[10px] px-3.5 py-2.5 text-sm font-medium transition-colors",
              act
                ? "border border-border bg-[color:var(--surface-2)] text-foreground"
                : "border border-transparent text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground"
            )}
            aria-current={act ? "page" : undefined}
          >
            <Icon
              name={item.icon}
              className={cn("size-[18px] transition-colors", act ? "text-brand" : "")}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  const Contact = (
    <div className="mt-6 space-y-2.5">
      <a
        href={profile.phoneHref}
        className="flex items-center gap-2.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      >
        <Icon name="phone" className="size-4 text-brand" />
        {profile.phone}
      </a>
      <a
        href={profile.emailHref}
        className="flex items-center gap-2.5 break-all text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      >
        <Icon name="mail" className="size-4 text-brand" />
        {profile.email}
      </a>
    </div>
  );

  return (
    <>
      {/* ---------- Desktop sidebar ---------- */}
      <aside className="theme-dark fixed inset-y-0 left-0 z-40 hidden w-[288px] flex-col gap-8 bg-[color:var(--background)] px-6 py-8 text-foreground lg:flex">
        {Logo}
        {NavList}
        {Contact}
      </aside>

      {/* ---------- Mobile top bar ---------- */}
      <header className="theme-dark fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-[color:var(--background)]/95 px-4 py-3 text-foreground backdrop-blur-xl lg:hidden">
        {Logo}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-foreground/[0.06] text-foreground"
        >
          <Icon name={open ? "x" : "menu"} className="size-5" />
        </button>
      </header>

      {/* ---------- Mobile drawer ---------- */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={cn(
          "theme-dark fixed inset-y-0 left-0 z-40 flex w-[82%] max-w-[320px] flex-col gap-8 border-r border-border bg-[color:var(--background)] px-6 pb-8 pt-20 text-foreground transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {NavList}
        {Contact}
      </aside>
    </>
  );
}
