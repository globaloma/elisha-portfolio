import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border pt-8">
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
    </footer>
  );
}
