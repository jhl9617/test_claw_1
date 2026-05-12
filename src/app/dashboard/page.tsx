import Link from "next/link";

const overviewMetrics = [
  { label: "Launch health", value: "92%", detail: "+8% this week" },
  { label: "Open blockers", value: "7", detail: "3 due today" },
  { label: "Teams ready", value: "11/14", detail: "2 pending review" },
  { label: "Risk level", value: "Low", detail: "Stable for 5 days" },
];

const workstreams = [
  ["Platform", "Ready", "All gates cleared"],
  ["Mobile", "Watching", "Crash-free metric under review"],
  ["Support", "Ready", "Runbook signed off"],
  ["Billing", "Blocked", "Awaiting partner confirmation"],
];

const tasks = [
  "Review payment dependency owner",
  "Confirm launch notes with support",
  "Publish final readiness summary",
];

export default function DashboardPage() {
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
          <Link href="/contact" className="transition hover:text-slate-950">
            Contact
          </Link>
          <Link href="/dashboard" className="text-slate-950">
            Dashboard
          </Link>
          <Link href="/login" className="transition hover:text-slate-950">
            Sign in
          </Link>
        </nav>
      </header>

      <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-8 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Dashboard
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              May release command center
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              A shared view of launch health, blockers, readiness, and the next
              actions needed before the release window.
            </p>
          </div>
          <Link
            href="/login"
            className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            Open workspace
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-6 pb-8 lg:grid-cols-4 lg:px-8">
        {overviewMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-600">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
        <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/15">
          <div className="rounded-3xl border border-white/10 bg-[#12343b] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-teal-200">
                  Readiness trend
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Launch confidence is holding steady.
                </h2>
              </div>
              <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                On track
              </span>
            </div>

            <div className="mt-8 flex h-64 items-end gap-3">
              {[48, 55, 63, 61, 74, 82, 88, 92].map((height, index) => (
                <div
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-xl bg-teal-200"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            Next actions
          </p>
          <div className="mt-6 space-y-4">
            {tasks.map((task) => (
              <div key={task} className="flex gap-3">
                <span className="mt-2 size-2 rounded-full bg-[#0f766e]" />
                <p className="leading-7 text-slate-700">{task}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white/70 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Workstreams
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Team readiness snapshot
              </h2>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {workstreams.map(([team, status, detail]) => (
              <div
                key={team}
                className="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 sm:grid-cols-[1fr_0.7fr_1.4fr] sm:items-center"
              >
                <p className="font-semibold">{team}</p>
                <p className="text-sm font-semibold text-teal-700">{status}</p>
                <p className="text-sm text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
