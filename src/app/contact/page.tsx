import Link from "next/link";

const contactReasons = [
  "Workspace setup and team onboarding",
  "Release readiness reviews",
  "Risk, dependency, and launch reporting",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ed] text-slate-950">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid size-9 place-items-center rounded-lg bg-slate-950 text-sm text-white">
            T1
          </span>
          <span>Test Claw</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className="transition hover:text-slate-950">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-slate-950">
            About
          </Link>
          <Link href="/login" className="transition hover:text-slate-950">
            Sign in
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-28 lg:pt-18">
        <div className="flex flex-col justify-center">
          <p className="w-fit rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700">
            Contact the team
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-slate-950 sm:text-6xl">
            Talk with Test Claw about your next release.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Share what your team is preparing, where coordination is getting
            noisy, and what kind of launch support would help.
          </p>

          <div className="mt-9 space-y-4">
            {contactReasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-[#0f766e]" />
                <p className="text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950 p-5 shadow-2xl shadow-slate-900/15">
          <form className="rounded-3xl bg-white p-6 text-slate-950 sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Start a conversation
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Send a contact request.
              </h2>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="company"
                className="text-sm font-medium text-slate-700"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company or team"
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us what you are planning and what support you need."
                className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
              />
            </div>

            <button
              type="submit"
              className="mt-7 h-12 w-full rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
            >
              Send request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
