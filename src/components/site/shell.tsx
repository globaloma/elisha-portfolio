import { Sidebar } from "@/components/site/sidebar";
import { cn } from "@/lib/utils";

export function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className={cn("lg:pl-[288px]", className)}>
        <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-24 sm:px-8 lg:pt-16">{children}</div>
      </main>
    </div>
  );
}
