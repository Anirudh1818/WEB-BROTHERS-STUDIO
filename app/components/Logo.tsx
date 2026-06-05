import { site } from "@/app/lib/site";

export default function Logo({
  variant = "light",
  showText = true,
}: {
  variant?: "light" | "dark";
  showText?: boolean;
}) {
  const dark = variant === "dark";
  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
          dark
            ? "border-white/15 bg-white/5"
            : "border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
        }`}
      >
        <span
          className={`font-serif text-xl font-black tracking-[-0.14em] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          WB
        </span>
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
      </div>

      {showText && (
        <div className="leading-tight">
          <p
            className={`text-base font-extrabold tracking-tight sm:text-lg ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {site.name}
          </p>
          <p
            className={`hidden text-[11px] font-medium tracking-wide sm:block ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Founded by {site.founders.map((f) => f.name).join(" & ")}
          </p>
        </div>
      )}
    </div>
  );
}
