import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-[#f6f3ed] text-slate-950 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="flex flex-col justify-between px-6 py-8 lg:px-12">
        <Link href="/" className="flex w-fit items-center gap-3 font-semibold">
          <span className="grid size-9 place-items-center rounded-lg bg-slate-950 text-sm text-white">
            T1
          </span>
          <span>Test Claw</span>
        </Link>

        <div className="mx-auto w-full max-w-md py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            Welcome back
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Sign in to your workspace.
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            Use your team email to access launch plans, blockers, and readiness
            reporting.
          </p>

          <form className="mt-9 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700"
              >
                Email address
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

            <div>
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-semibold text-teal-700 transition hover:text-teal-900"
                >
                  Reset
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="size-4 rounded border-slate-300 text-teal-700"
                />
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
            >
              Sign in
            </button>
          </form>

          <p className="mt-7 text-sm text-slate-600">
            New team?{" "}
            <Link
              href="/"
              className="font-semibold text-teal-700 transition hover:text-teal-900"
            >
              Request access
            </Link>
          </p>
        </div>

        <p className="text-sm text-slate-500">Protected workspace preview</p>
      </section>

      <aside className="hidden min-h-screen bg-slate-950 p-8 text-white lg:block">
        <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#12343b] p-8">
          <div>
            <p className="text-sm font-semibold text-teal-200">Today</p>
            <h2 className="mt-3 max-w-lg text-4xl font-semibold leading-tight">
              Three launch risks were resolved before standup.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              ["Quality gate", "96%", "Ready"],
              ["Dependency map", "4", "Open"],
              ["Customer impact", "Low", "Reviewed"],
            ].map(([label, value, status]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-white/10 p-5"
              >
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="mt-1 text-sm text-slate-300">{status}</p>
                </div>
                <p className="text-2xl font-semibold text-teal-100">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
