import Link from "next/link";

const metrics = [
  { label: "Activation", value: "84%", accent: "bg-emerald-400" },
  { label: "Risk alerts", value: "12", accent: "bg-amber-400" },
  { label: "Cycle time", value: "2.4d", accent: "bg-sky-400" },
];

const activities = [
  "Revenue workspace synced",
  "Three blockers assigned",
  "Launch review approved",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f3ed] text-slate-950">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid size-9 place-items-center rounded-lg bg-slate-950 text-sm text-white">
            T1
          </span>
          <span>Test Claw</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/about" className="transition hover:text-slate-950">
            About
          </Link>
          <a href="#platform" className="transition hover:text-slate-950">
            Platform
          </a>
          <a href="#signals" className="transition hover:text-slate-950">
            Signals
          </a>
          <a href="#workflow" className="transition hover:text-slate-950">
            Workflow
          </a>
        </nav>
        <Link
          href="/login"
          className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Sign in
        </Link>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700">
            Launch operations, focused
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            Run cleaner releases with one shared command center.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Test Claw keeps teams aligned around launch readiness, ownership,
            and risk before the next customer-facing push.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f766e] px-6 text-sm font-semibold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
            >
              Open workspace
            </Link>
            <a
              href="#platform"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/65 px-6 text-sm font-semibold text-slate-900 transition hover:bg-white"
            >
              View dashboard
            </a>
          </div>
        </div>

        <div id="platform" className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-3xl bg-[#12343b]" />
          <div className="absolute right-8 top-8 h-28 w-40 rounded-2xl border border-white/10 bg-amber-300/20" />
          <div className="absolute bottom-8 left-8 h-28 w-48 rounded-2xl border border-white/10 bg-teal-300/20" />
          <div className="relative h-full rounded-3xl border border-white/15 bg-slate-950/70 p-5 shadow-2xl shadow-slate-900/20 backdrop-blur">
            <div className="rounded-3xl bg-white p-5 text-slate-950 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Launch health
                  </p>
                  <h2 className="text-2xl font-semibold">May release</h2>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  On track
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className={`mb-4 block h-1.5 w-10 rounded-full ${metric.accent}`} />
                    <p className="text-sm text-slate-500">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Readiness trend</p>
                    <p className="text-sm text-slate-300">7 days</p>
                  </div>
                  <div className="mt-8 flex h-36 items-end gap-3">
                    {[42, 58, 52, 76, 69, 88, 94].map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className="flex-1 rounded-t-xl bg-teal-300"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="font-semibold">Live activity</p>
                  <div className="mt-5 space-y-4">
                    {activities.map((activity) => (
                      <div key={activity} className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-[#0f766e]" />
                        <p className="text-sm text-slate-600">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="signals"
        className="border-y border-slate-200 bg-white/70 px-6 py-14 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["Shared context", "Every launch note, owner, and gate in one place."],
            ["Risk visibility", "Spot schedule, quality, and dependency signals early."],
            ["Decision rhythm", "Turn status noise into crisp daily movement."],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Built for teams
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              A calm operating layer for work that cannot drift.
            </h2>
          </div>
          <Link
            href="/login"
            className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Continue
          </Link>
        </div>
      </section>
    </main>
  );
}
