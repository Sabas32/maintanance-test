import DomeGallery from "../components/DomeGallery";
import Countdown from "../components/Countdown";

const fallbackTargetDate = "2026-02-25T12:00:00+03:00";
const schoolRegistrationPath = "https://subscribepage.io/iscc";

const domeImages = [
  {
    src: "/images/2025/iscc_im1.webp",
    alt: "ISCC 2025 image 1",
  },
  {
    src: "/images/2025/iscc_im2.jpg",
    alt: "ISCC 2025 image 2",
  },
  {
    src: "/images/2025/iscc_im3.webp",
    alt: "ISCC 2025 image 3",
  },
  {
    src: "/images/2025/iscc_im4.jpg",
    alt: "ISCC 2025 image 4",
  },
  {
    src: "/images/2025/iscc_im5.webp",
    alt: "ISCC 2025 image 5",
  },
  {
    src: "/images/2025/iscc_im6.jpg",
    alt: "ISCC 2025 image 6",
  },
  {
    src: "/images/2025/iscc_im7.webp",
    alt: "ISCC 2025 image 7",
  },
];

const panelClass =
  "rounded-[24px] border border-[#2d1f4a]/10 bg-white/88 shadow-[0_32px_70px_-48px_rgba(67,48,122,0.45)] backdrop-blur-xl";

const primaryButtonClass =
  "inline-flex min-h-12 items-center justify-center rounded-2xl bg-linear-to-r from-[#8c4cf3] to-[#7638de] px-8 text-[0.99rem] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(121,70,221,0.95)] transition-all duration-300 ease-out hover:from-[#7f3ee9] hover:to-[#6d30d5] hover:shadow-[0_18px_30px_-14px_rgba(121,70,221,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8745ef] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f8fd] active:translate-y-px";


export default function HomePage() {
  // const launchLabel = formatLaunchDate(targetDate);
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative min-h-dvh w-full overflow-x-hidden bg-[#f7f8fd] text-[#111322] lg:h-dvh lg:overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-26%] h-[46vh] w-[46vh] rounded-full bg-[#8c63f2]/22 blur-[120px]" />
        <div className="absolute right-[-8%] top-[8%] h-[36vh] w-[36vh] rounded-full bg-[#67c6ef]/18 blur-[110px]" />
        <div className="absolute bottom-[-28%] left-[36%] h-[46vh] w-[46vh] rounded-full bg-[#8960f0]/20 blur-[130px]" />
        <div className="bg-grid absolute inset-0 opacity-35" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-dvh w-full max-w-368 items-center px-2 py-3 sm:px-6 lg:h-dvh lg:items-stretch lg:py-2">
        <div className="grid w-full items-stretch gap-3 sm:gap-4 lg:h-full lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-4">
          <article
            className={[
              panelClass,
              "relative w-full overflow-hidden p-4 sm:p-6 md:p-7 lg:h-full lg:p-5 xl:p-6",
            ].join(" ")}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#a98cff]/10 to-transparent" />
            <div className="relative mx-auto flex h-full w-full max-w-182 flex-col items-center text-center">
              <div className="w-full max-w-164 rounded-2xl border border-[#2d1f4a]/10 bg-white/76 p-2 sm:p-2.5">
                <div className="flex w-full flex-col items-center gap-2.5 md:flex-row md:justify-between md:gap-3">
                  <div className="flex w-full items-center gap-2.5 rounded-xl border border-[#2d1f4a]/12 bg-white/80 px-3 py-1.5 sm:w-auto">
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
                      <p className="font-display text-[11px] font-semibold tracking-[0.18em] text-[#16182a]">
                        ISCC
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.13em] text-[#313657]/72">
                        INTERSCHOOL CODING COMPETITION
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-[#924DFF]/32 bg-[#924DFF]/10 px-3 py-1 text-[11px] font-medium text-[#6130ad]">
                    <span className="status-dot inline-block h-2.5 w-2.5 rounded-full bg-[#924DFF]" />
                    Maintenance Mode
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#575f8a] lg:mt-3">
                Platform Update
              </p>

              <h1 className="font-display mt-2 max-w-[13ch] text-balance text-[clamp(1.72rem,5.2vw,3rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-[#12152a] sm:mt-2.5">
                ISCC platform is under maintenance
              </h1>

              <p className="mt-3 max-w-[40ch] text-balance text-[clamp(0.95rem,2.8vw,1.22rem)] leading-relaxed text-[#2a3154]/82 lg:mt-2">
              We are currently updating the platform for ISCC 2026.  This year the competition is bigger with more categories and prizes to be won.
              </p>

              <div className="mt-6 w-full max-w-164 rounded-[22px] border border-[#2d1f4a]/10 bg-linear-to-b from-white/94 to-[#f5f2ff]/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_18px_36px_-30px_rgba(109,78,193,0.52)] sm:p-5 lg:mt-4 lg:p-4">
                <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5a6391]">
                  Reopening Countdown
                </p>
                <Countdown
                  targetDate={fallbackTargetDate}
                  variant="compact"
                  theme="light"
                  className="mx-auto max-w-120"
                />
                <p className="mt-2 text-center text-[13px] text-[#2d3254]/84 sm:text-[1rem]">
                  Opens on{" "}
                  <span className="font-semibold text-[#12152a]">{fallbackTargetDate}</span>
                </p>
              </div>

              <div className="mt-5 flex w-full flex-col items-center gap-3 md:flex-row md:justify-center lg:mt-4">
                <a
                  href={schoolRegistrationPath}
                  target="_blank"
                  rel="noreferrer"
                  className={[primaryButtonClass, "w-full md:min-w-68 md:w-auto"].join(" ")}
                >
                  Register Your School
                </a>
              </div>

              <p className="mt-6 w-full border-t border-[#2d1f4a]/8 px-1 pb-[max(env(safe-area-inset-bottom),0px)] pt-4 text-center text-[11px] tracking-[0.01em] text-[#40466a]/74 sm:text-[12px] lg:mt-4 lg:pt-3">
                Copyright {currentYear} ISCC. Need help? info@interschoolscoding.com
              </p>
            </div>
          </article>

          <aside
            className={[
              panelClass,
              "hidden md:flex md:min-h-0 md:p-2 lg:h-full lg:min-h-0 lg:p-2.5",
            ].join(" ")}
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[18px] border border-[#2d1f4a]/12 bg-linear-to-br from-[#f4f0ff] via-[#eef1ff] to-[#e8f4ff]">
              <div className="flex items-center justify-between border-b border-[#2d1f4a]/10 px-4 py-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#4f5780]">
                    Live Preview
                  </p>
                  <p className="font-display text-sm font-semibold text-[#1f2745]">
                    ISCC 2025 Gallery
                  </p>
                </div>
                <span className="rounded-full border border-[#8745ef]/28 bg-[#8745ef]/12 px-2.5 py-1 text-[10px] font-medium text-[#5e34b0]">
                  Drag to rotate
                </span>
              </div>

              <div className="relative min-h-0 flex-1">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_70%_at_50%_48%,rgba(142,101,247,0.26),rgba(216,225,248,0)_72%)]" />
                <div className="absolute inset-0 p-1.5">
                  <DomeGallery
                    images={domeImages}
                    autoSpinSpeedDeg={1}
                    fit={1.5}
                    minRadius={240}
                    maxVerticalRotationDeg={5}
                    segments={26}
                    dragDampening={2}
                    grayscale={false}
                    imageBorderRadius="18px"
                    openedImageBorderRadius="18px"
                    overlayBlurColor="rgba(118,86,193,0)"
                    openedImageWidth="min(300px,72vw)"
                    openedImageHeight="min(300px,72vw)"
                  />
                </div>
              </div>

              <div className="border-t border-[#2d1f4a]/10 px-4 py-2 text-xs text-[#3f4872]/80">
                Click any image to enlarge.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
