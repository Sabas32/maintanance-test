"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountdownProps = {
  targetDate: string;
  className?: string;
  onComplete?: () => void;
  showLabels?: boolean;
  variant?: "default" | "compact";
};

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

const ZERO_STATE: CountdownState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  totalMs: 0,
};

const tileByVariant = {
  default: {
    shell:
      "min-w-[4.8rem] rounded-xl border border-white/16 bg-white/[0.04] px-3 py-2.5 shadow-[0_12px_28px_-20px_rgba(146,77,255,0.82)] backdrop-blur-sm transition-shadow duration-300 ease-out sm:min-w-[5.5rem]",
    value: "text-[1.7rem] leading-none tracking-tight sm:text-[2rem]",
    label: "text-[0.64rem] font-medium sm:text-[0.7rem]",
  },
  compact: {
    shell:
      "min-w-[4.2rem] rounded-xl border border-white/16 bg-white/[0.04] px-2.5 py-2 shadow-[0_12px_28px_-20px_rgba(146,77,255,0.82)] backdrop-blur-sm transition-shadow duration-300 ease-out sm:min-w-[5rem] sm:px-3 sm:py-2.5",
    value: "text-[1.55rem] leading-none tracking-tight sm:text-[1.9rem]",
    label: "text-[0.6rem] font-medium sm:text-[0.67rem]",
  },
} as const;

function parseTargetDate(value: string): number | null {
  const parsed = Date.parse(value.trim());
  return Number.isNaN(parsed) ? null : parsed;
}

function getCountdownState(targetTimestamp: number, nowTimestamp: number): CountdownState {
  const difference = Math.max(targetTimestamp - nowTimestamp, 0);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, totalMs: difference };
}

function padUnit(value: number): string {
  return String(value).padStart(2, "0");
}

export default function Countdown({
  targetDate,
  className,
  onComplete,
  showLabels = true,
  variant = "default",
}: CountdownProps) {
  const [state, setState] = useState<CountdownState>(ZERO_STATE);
  const [isInvalidDate, setIsInvalidDate] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  const completeHandledRef = useRef(false);

  const targetTimestamp = useMemo(() => parseTargetDate(targetDate), [targetDate]);
  const isComplete = !isInvalidDate && state.totalMs === 0 && hasHydrated;

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    completeHandledRef.current = false;

    if (targetTimestamp === null) {
      setIsInvalidDate(true);
      setState(ZERO_STATE);
      return;
    }

    setIsInvalidDate(false);

    let intervalId: number | null = null;

    const update = () => {
      const next = getCountdownState(targetTimestamp, Date.now());
      setState(next);

      if (next.totalMs === 0 && intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    update();

    if (Date.now() >= targetTimestamp) {
      return;
    }

    intervalId = window.setInterval(update, 1000);

    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [targetTimestamp]);

  useEffect(() => {
    if (!isComplete || completeHandledRef.current) return;

    completeHandledRef.current = true;
    onComplete?.();
  }, [isComplete, onComplete]);

  if (hasHydrated && isInvalidDate) {
    return (
      <div
        aria-live="polite"
        className={[
          "w-full rounded-lg border border-red-400/35 bg-red-500/10 px-3 py-2 text-center text-xs text-red-100",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        Invalid launch date
      </div>
    );
  }

  const tileClasses = tileByVariant[variant];

  const units = [
    { key: "days", label: "Days", value: state.days },
    { key: "hours", label: "Hours", value: state.hours },
    { key: "minutes", label: "Minutes", value: state.minutes },
    { key: "seconds", label: "Seconds", value: state.seconds },
  ] as const;

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      className={["w-full", className].filter(Boolean).join(" ")}
    >
      <div className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.key}
            aria-label={`${unit.label}: ${unit.value}`}
            className={`${tileClasses.shell} flex flex-col items-center justify-center text-center`}
          >
            <span
              className={`${tileClasses.value} min-w-[2ch] font-semibold tabular-nums text-white`}
            >
              {padUnit(unit.value)}
            </span>
            {showLabels ? (
              <span
                className={`${tileClasses.label} mt-1 uppercase tracking-[0.14em] text-white/68`}
              >
                {unit.label}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-2 text-center text-xs text-white/60" role="status">
        {isComplete ? "We're live" : "Countdown in progress"}
      </p>
    </div>
  );
}
