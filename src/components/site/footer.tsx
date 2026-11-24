import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-border shadow-[0_-8px_18px_-12px_rgba(27,23,20,0.4)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 xl:px-10 2xl:max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <Link href="/#home" className="font-heading text-lg font-semibold">
              <span className="text-brand">Ibeabuchi</span> Elisha
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">UI/UX Designer — Mobile App Developer</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Ibeabuchi Elisha — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
