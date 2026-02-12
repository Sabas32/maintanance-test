const inputClassName =
  "w-full rounded-lg border border-white/18 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition-colors duration-200 placeholder:text-white/45 focus:border-[#924DFF] focus:ring-2 focus:ring-[#924DFF]/35";

const fieldLabelClassName = "mb-1.5 block text-xs font-medium tracking-[0.03em] text-white/82";

export default function SchoolRegistrationPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative h-dvh min-h-dvh w-full overflow-hidden bg-[#08090d] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-22%] h-[42vh] w-[42vh] -translate-x-[40%] rounded-full bg-[#924DFF]/30 blur-[110px]" />
        <div className="absolute bottom-[-20%] right-[-8%] h-[32vh] w-[32vh] rounded-full bg-[#924DFF]/22 blur-[100px]" />
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <section className="relative z-10 mx-auto h-full w-full max-w-4xl overflow-y-auto px-3 py-5 sm:px-6 sm:py-8">
        <div className="mx-auto w-full max-w-2xl rounded-[20px] border border-white/12 bg-white/[0.035] px-4 pb-5 pt-4 shadow-[0_22px_64px_-42px_rgba(146,77,255,0.72)] backdrop-blur-md sm:px-7 sm:pb-7 sm:pt-6">
          <div className="mb-4 text-center sm:mb-6">
            <h1 className="font-display text-[clamp(1.4rem,4vw,2rem)] font-semibold tracking-[-0.012em] text-white">
              School Registration Form
            </h1>
            <p className="mt-1 text-sm leading-relaxed text-white/74">
              Submit your school details and our team will confirm your registration.
            </p>
          </div>

          <form className="space-y-3.5 sm:space-y-4">
            <div>
              <label htmlFor="schoolName" className={fieldLabelClassName}>
                School Name
              </label>
              <input
                id="schoolName"
                name="schoolName"
                type="text"
                required
                placeholder="Enter school name"
                className={inputClassName}
              />
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
              <div>
                <label htmlFor="contactName" className={fieldLabelClassName}>
                  Contact Person
                </label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  required
                  placeholder="Coordinator name"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className={fieldLabelClassName}>
                  Contact Number
                </label>
                <input
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  required
                  placeholder="+1 555 000 0000"
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
              <div>
                <label htmlFor="email" className={fieldLabelClassName}>
                  Official Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@school.edu"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="students" className={fieldLabelClassName}>
                  Number of Participants
                </label>
                <input
                  id="students"
                  name="students"
                  type="number"
                  min={1}
                  required
                  placeholder="e.g. 12"
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className={fieldLabelClassName}>
                Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Any additional information"
                className={inputClassName}
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#924DFF] px-5 text-sm font-semibold text-white shadow-[0_10px_22px_-12px_rgba(146,77,255,0.95)] transition-all duration-300 ease-out hover:bg-[#a062ff] hover:shadow-[0_14px_28px_-14px_rgba(146,77,255,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#924DFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d] active:translate-y-px sm:w-auto"
            >
              Submit Registration
            </button>
          </form>

          <p className="mt-4 text-xs text-white/55 sm:mt-5">
            Copyright {currentYear} ISCC. If you need support, email
            {" "}
            info@interschoolscoding.com.
          </p>
        </div>
      </section>
    </main>
  );
}
