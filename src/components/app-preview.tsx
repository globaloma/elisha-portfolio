import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Lightweight, brand-tinted device mockups rendered purely in CSS.   */
/*  They stand in for the app screenshots from the design file.        */
/* ------------------------------------------------------------------ */

function screenStyle(brand: string): React.CSSProperties {
  return {
    background: `radial-gradient(120% 90% at 20% 0%, color-mix(in oklab, ${brand} 42%, #0b0f0d) 0%, #0b0f0d 60%), linear-gradient(180deg, color-mix(in oklab, ${brand} 20%, #0a0c0b), #070908)`,
  };
}

export function PhoneMockup({
  brand,
  label,
  variant = "wallet",
  className,
}: {
  brand: string;
  label: string;
  variant?: "wallet" | "list" | "grid" | "detail";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-full max-w-[210px] rounded-[2rem] border border-white/10 bg-black p-2 shadow-2xl",
        className
      )}
      style={{ boxShadow: `0 30px 70px -30px color-mix(in oklab, ${brand} 45%, transparent)` }}
    >
      {/* screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]" style={screenStyle(brand)}>
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black/70" />
        <div className="flex h-full flex-col px-3 pb-3 pt-7 text-[7px] text-white/70">
          {/* brand wordmark */}
          <div className="mb-2 flex items-center gap-1.5">
            <span className="grid h-4 w-4 place-items-center rounded-md text-[8px] font-bold text-black" style={{ background: brand }}>
              {label.charAt(0)}
            </span>
            <span className="text-[9px] font-semibold tracking-wide text-white">{label}</span>
          </div>

          {variant === "wallet" && (
            <>
              <div className="rounded-xl p-2.5" style={{ background: `color-mix(in oklab, ${brand} 30%, #0d1210)` }}>
                <div className="text-[6px] uppercase tracking-wider text-white/60">Balance</div>
                <div className="mt-0.5 text-[13px] font-bold text-white">₦85,000.00</div>
                <div className="mt-2 flex gap-1">
                  {["Send", "Fund", "Pay"].map((a) => (
                    <span key={a} className="rounded-md px-1.5 py-1 text-[6px] text-black" style={{ background: brand }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-2 text-[6px] uppercase tracking-wider text-white/50">Recent</div>
              <div className="mt-1 space-y-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <Row key={i} brand={brand} />
                ))}
              </div>
            </>
          )}

          {variant === "list" && (
            <div className="mt-1 space-y-1.5">
              <div className="h-16 rounded-xl" style={{ background: `color-mix(in oklab, ${brand} 28%, #0d1210)` }} />
              {[0, 1, 2, 3, 4].map((i) => (
                <Row key={i} brand={brand} tall />
              ))}
            </div>
          )}

          {variant === "grid" && (
            <div className="mt-1 grid grid-cols-2 gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg" style={{ background: `color-mix(in oklab, ${brand} ${18 + (i % 3) * 8}%, #0d1210)` }} />
              ))}
            </div>
          )}

          {variant === "detail" && (
            <>
              <div className="h-20 rounded-xl" style={{ background: `color-mix(in oklab, ${brand} 32%, #0d1210)` }} />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-white/20" />
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10" />
              <div className="mt-1 h-1.5 w-5/6 rounded-full bg-white/10" />
              <div className="mt-auto rounded-lg py-1.5 text-center text-[7px] font-semibold text-black" style={{ background: brand }}>
                Continue
              </div>
            </>
          )}

          {/* bottom nav */}
          <div className="mt-auto flex items-center justify-around rounded-xl bg-black/40 px-2 py-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full"
                style={{ background: i === 0 ? brand : "rgba(255,255,255,0.25)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ brand, tall }: { brand: string; tall?: boolean }) {
  return (
    <div className={cn("flex items-center gap-1.5 rounded-lg bg-white/5 px-1.5", tall ? "py-2" : "py-1.5")}>
      <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: `color-mix(in oklab, ${brand} 55%, #fff)` }} />
      <span className="flex-1">
        <span className="block h-1 w-2/3 rounded-full bg-white/25" />
        <span className="mt-1 block h-1 w-1/3 rounded-full bg-white/10" />
      </span>
      <span className="h-1.5 w-5 rounded-full" style={{ background: `color-mix(in oklab, ${brand} 45%, transparent)` }} />
    </div>
  );
}

export function BrowserMockup({
  brand,
  label,
  className,
}: {
  brand: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn("w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl", className)}
      style={{ boxShadow: `0 30px 70px -30px color-mix(in oklab, ${brand} 45%, transparent)` }}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 rounded-md bg-black/40 px-2 py-0.5 text-[8px] text-white/40">{label.toLowerCase()}.com</span>
      </div>
      <div className="p-3" style={screenStyle(brand)}>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-white">{label}</span>
          <span className="rounded-md px-2 py-1 text-[8px] font-semibold text-black" style={{ background: brand }}>
            VIP
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg p-2" style={{ background: `color-mix(in oklab, ${brand} 20%, #0d1210)` }}>
              <div className="text-[13px] font-bold text-white">{["95%", "12", "08"][i]}</div>
              <div className="mt-0.5 text-[6px] uppercase tracking-wider text-white/50">
                {["Accuracy", "Wins", "Draws"][i]}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 space-y-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5">
              <span className="h-3 w-3 rounded-full" style={{ background: `color-mix(in oklab, ${brand} 55%, #fff)` }} />
              <span className="h-1 flex-1 rounded-full bg-white/20" />
              <span className="rounded px-1.5 py-0.5 text-[7px] text-black" style={{ background: brand }}>1X2</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
