import Link from "next/link";

const servicePillars = [
  {
    title: "Readiness planning",
    body: "Keep launch scope, owners, gates, and due dates visible before work reaches the release window.",
  },
  {
    title: "Risk coordination",
    body: "Turn quality, schedule, dependency, and customer-impact signals into clear next actions for each team.",
  },
  {
    title: "Operating rhythm",
    body: "Replace scattered status updates with a shared cadence for reviews, decisions, and follow-through.",
  },
];

const workflowSteps = [
  "Collect service, product, and delivery signals in one workspace.",
  "Highlight blockers and ownership gaps before they slow a release.",
  "Share a concise readiness view with leaders and launch teams.",
];

export default function AboutPage() {
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
          <Link href="/contact" className="transition hover:text-slate-950">
            Contact
          </Link>
          <Link href="/dashboard" className="transition hover:text-slate-950">
            Dashboard
          </Link>
          <Link href="/login" className="transition hover:text-slate-950">
            Sign in
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-24 lg:pt-18">
        <div>
          <p className="w-fit rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700">
            Service introduction
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-slate-950 sm:text-6xl">
            Test Claw helps teams launch with cleaner coordination.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Test Claw is a sample release operations service for teams that
            need a single place to understand readiness, resolve blockers, and
            communicate launch status without extra process noise.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f766e] px-6 text-sm font-semibold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
            >
              Explore workspace
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/65 px-6 text-sm font-semibold text-slate-900 transition hover:bg-white"
            >
              Back to home
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/15">
          <div className="h-full rounded-3xl border border-white/10 bg-[#12343b] p-6 sm:p-8">
            <p className="text-sm font-semibold text-teal-200">
              What the service does
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              A shared command layer for launches, reviews, and team decisions.
            </h2>
            <div className="mt-8 space-y-4">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal-200 text-sm font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-slate-100">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/70 px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {servicePillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            Sample service
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Built to show how a focused operations product can feel direct,
            calm, and useful from the first screen.
          </h2>
        </div>
        <Link
          href="/login"
          className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Sign in
        </Link>
      </section>
    </main>
  );
}
