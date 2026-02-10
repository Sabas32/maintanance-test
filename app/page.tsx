
import Countdown from "../components/Countdown";

const fallbackTargetDate = "2026-02-20T12:00:00+03:00";
const envTargetDate = process.env.NEXT_PUBLIC_LAUNCH_AT?.trim();
const targetDate =
  envTargetDate && envTargetDate.length > 0
    ? envTargetDate
    : fallbackTargetDate;
const displayTimezone = process.env.NEXT_PUBLIC_LAUNCH_TIMEZONE?.trim();

const cardClass =
  "w-full max-w-[52rem] rounded-[20px] border border-white/12 bg-white/[0.035] px-4 pb-4 pt-3 shadow-[0_22px_64px_-42px_rgba(146,77,255,0.72)] backdrop-blur-md transition-shadow duration-500 ease-out sm:px-7 sm:pb-6 sm:pt-5";

const primaryButtonClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#924DFF] px-5 text-sm font-semibold text-white shadow-[0_10px_22px_-12px_rgba(146,77,255,0.95)] transition-all duration-300 ease-out hover:bg-[#a062ff] hover:shadow-[0_14px_28px_-14px_rgba(146,77,255,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#924DFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d] active:translate-y-px sm:w-auto";

const secondaryButtonClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/20 bg-white/[0.025] px-5 text-sm font-medium text-white/90 transition-all duration-300 ease-out hover:border-[#924DFF]/55 hover:bg-[#924DFF]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#924DFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d] active:translate-y-px sm:w-auto";

function formatLaunchDate(value: string, timeZone?: string): string {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return "date to be confirmed";
  }

  const safeTimeZone = timeZone && timeZone.length > 0 ? timeZone : undefined;

  try {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      ...(safeTimeZone ? { timeZone: safeTimeZone, timeZoneName: "short" } : {}),
    }).format(parsed);
  } catch {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(parsed);
  }
}

export default function HomePage() {
  const launchLabel = formatLaunchDate(targetDate, displayTimezone);
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative h-dvh min-h-dvh w-full overflow-hidden bg-[#08090d] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-24%] h-[44vh] w-[44vh] -translate-x-[58%] rounded-full bg-[#924DFF]/32 blur-[110px]" />
        <div className="absolute bottom-[-22%] right-[-10%] h-[34vh] w-[34vh] rounded-full bg-[#924DFF]/24 blur-[100px]" />
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <section className="relative z-10 mx-auto flex h-full w-full max-w-5xl items-center justify-center px-3 py-3 sm:px-6 sm:py-5">
        <div className={cardClass}>
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2.5 text-center sm:gap-3.5">
            <div className="flex items-center gap-2.5 rounded-xl border border-white/14 bg-white/3 px-3 py-1.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="text-[#924DFF]"
              >
                <path
                  d="M8.5 7L4.5 12L8.5 17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 7L19.5 12L15.5 17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 18L13 6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-left leading-tight">
                <p className="font-display text-[11px] font-semibold tracking-[0.18em] text-white">
                  ISCC
                </p>
                <p className="text-[10px] uppercase tracking-[0.13em] text-white/62">
                  INTERSCHOOL CODING COMPETITION
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-[#924DFF]/45 bg-[#924DFF]/10 px-3 py-1 text-[11px] font-medium text-[#dec8ff] sm:text-xs">
              <span className="status-dot inline-block h-2.5 w-2.5 rounded-full bg-[#924DFF]" />
              Maintenance Mode
            </div>

            <h1 className="font-display max-w-[28ch] text-balance text-[clamp(1.28rem,4.7vw,2.15rem)] font-semibold leading-[1.12] tracking-[-0.012em] text-white">
              ISCC is temporarily offline.
            </h1>

            <p className="max-w-[52ch] text-balance text-[clamp(0.86rem,2.7vw,1rem)] leading-relaxed text-white/78">
              We are applying updates and doing final checks. We will reopen
              soon.
            </p>

            <div className="h-px w-full max-w-104 bg-linear-to-r from-transparent via-[#924DFF]/70 to-transparent" />

            <Countdown
              targetDate={targetDate}
              variant="compact"
              className="max-w-[30rem]"
            />

            <p className="text-xs text-white/72 sm:text-sm">
              Opens on{" "}
              <span className="font-medium text-white">{launchLabel}</span>
            </p>

            <p className="pt-1 text-[10px] tracking-[0.01em] text-white/45 sm:text-[11px]">
              Copyright {currentYear} ISCC. Need help?
              info@interschoolscoding.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
