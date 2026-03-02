export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <span className="text-xl font-bold tracking-tight">Boarding</span>
        <a
          href="#examples"
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
        >
          See Examples
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-16 text-center md:pt-32 md:pb-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
          <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
          Brand onboarding, reimagined
        </div>
        <h1 className="max-w-3xl text-5xl leading-tight font-extrabold tracking-tight md:text-7xl md:leading-[1.1]">
          Your brand.{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Instantly styled.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
          Add your brand and get a beautiful, custom-styled onboarding page in
          seconds. Colors, typography, and layout — all adapted to match your
          identity.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#examples"
            className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-xl hover:shadow-violet-500/30"
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-zinc-200 bg-white px-8 py-3.5 text-base font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            How It Works
          </a>
        </div>
      </section>

      {/* Brand Examples */}
      <section id="examples" className="bg-zinc-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold tracking-widest text-violet-600 uppercase">
            Live Examples
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Every brand gets its own look
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-500">
            When you add a brand, Boarding generates a fully styled page that
            reflects your colors, fonts, and personality. Here are some examples.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Example 1 — Minimal / Dark */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative flex h-52 items-end bg-gradient-to-br from-zinc-900 to-zinc-700 p-6">
                <div className="absolute top-4 right-4 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div>
                  <div className="mb-2 h-3 w-20 rounded bg-white/20" />
                  <div className="h-6 w-36 rounded bg-white/90 font-bold" />
                  <div className="mt-2 h-2.5 w-48 rounded bg-white/30" />
                  <div className="mt-1.5 h-2.5 w-32 rounded bg-white/20" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-zinc-900">Stealth Studio</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Dark, minimal aesthetic. Monochrome palette with crisp
                  typography for a premium developer-tool feel.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="h-5 w-5 rounded-full bg-zinc-900 ring-2 ring-zinc-200" />
                  <span className="h-5 w-5 rounded-full bg-zinc-500 ring-2 ring-zinc-200" />
                  <span className="h-5 w-5 rounded-full bg-white ring-2 ring-zinc-200" />
                </div>
              </div>
            </div>

            {/* Example 2 — Warm / Vibrant */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative flex h-52 items-end bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500 p-6">
                <div className="absolute top-4 right-4 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div>
                  <div className="mb-2 h-3 w-24 rounded bg-white/30" />
                  <div className="h-6 w-40 rounded bg-white/90 font-bold" />
                  <div className="mt-2 h-2.5 w-44 rounded bg-white/40" />
                  <div className="mt-1.5 h-2.5 w-28 rounded bg-white/25" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-zinc-900">Sunbloom</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Warm, energetic gradients. A sunset-inspired palette perfect
                  for lifestyle and wellness brands.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="h-5 w-5 rounded-full bg-orange-400 ring-2 ring-zinc-200" />
                  <span className="h-5 w-5 rounded-full bg-rose-400 ring-2 ring-zinc-200" />
                  <span className="h-5 w-5 rounded-full bg-pink-500 ring-2 ring-zinc-200" />
                </div>
              </div>
            </div>

            {/* Example 3 — Cool / Corporate */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative flex h-52 items-end bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-600 p-6">
                <div className="absolute top-4 right-4 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div>
                  <div className="mb-2 h-3 w-16 rounded bg-white/20" />
                  <div className="h-6 w-32 rounded bg-white/90 font-bold" />
                  <div className="mt-2 h-2.5 w-52 rounded bg-white/35" />
                  <div className="mt-1.5 h-2.5 w-36 rounded bg-white/20" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-zinc-900">Nexus Finance</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Cool, trustworthy blues. A professional palette for fintech,
                  SaaS, and enterprise onboarding flows.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="h-5 w-5 rounded-full bg-blue-600 ring-2 ring-zinc-200" />
                  <span className="h-5 w-5 rounded-full bg-indigo-500 ring-2 ring-zinc-200" />
                  <span className="h-5 w-5 rounded-full bg-violet-600 ring-2 ring-zinc-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold tracking-widest text-violet-600 uppercase">
            How It Works
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Three steps to a branded page
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-xl font-bold text-violet-600">
                1
              </div>
              <h3 className="mt-5 text-lg font-bold">Add Your Brand</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Enter your brand name, upload a logo, and pick your primary
                colors. That&apos;s all we need.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-100 text-xl font-bold text-fuchsia-600">
                2
              </div>
              <h3 className="mt-5 text-lg font-bold">We Style It</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Boarding instantly generates a complete onboarding page with your
                palette, typography, and layout preferences baked in.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-xl font-bold text-pink-600">
                3
              </div>
              <h3 className="mt-5 text-lg font-bold">Share & Onboard</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Get a unique link for your branded page. Share it with customers,
                partners, or team members to onboard them beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Visual */}
      <section className="bg-zinc-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold tracking-widest text-violet-600 uppercase">
            The Difference
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Generic vs. branded
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-500">
            See why a branded onboarding experience converts better than a plain
            form.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-2xl border-2 border-dashed border-zinc-300 bg-white p-8">
              <span className="mb-4 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500 uppercase">
                Without Boarding
              </span>
              <div className="mt-4 space-y-3">
                <div className="h-4 w-3/4 rounded bg-zinc-200" />
                <div className="h-10 w-full rounded border border-zinc-200 bg-zinc-50" />
                <div className="h-4 w-1/2 rounded bg-zinc-200" />
                <div className="h-10 w-full rounded border border-zinc-200 bg-zinc-50" />
                <div className="h-4 w-2/3 rounded bg-zinc-200" />
                <div className="h-10 w-full rounded border border-zinc-200 bg-zinc-50" />
                <div className="mt-4 h-10 w-full rounded bg-zinc-300" />
              </div>
              <p className="mt-6 text-center text-sm text-zinc-400">
                Plain, forgettable, zero brand presence
              </p>
            </div>

            {/* After */}
            <div className="rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-8 shadow-lg shadow-violet-500/10">
              <span className="mb-4 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 uppercase">
                With Boarding
              </span>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                  <div className="h-4 w-28 rounded bg-violet-300" />
                </div>
                <div className="h-4 w-3/4 rounded bg-violet-200" />
                <div className="h-10 w-full rounded-lg border border-violet-200 bg-white" />
                <div className="h-4 w-1/2 rounded bg-violet-200" />
                <div className="h-10 w-full rounded-lg border border-violet-200 bg-white" />
                <div className="h-4 w-2/3 rounded bg-violet-200" />
                <div className="h-10 w-full rounded-lg border border-violet-200 bg-white" />
                <div className="mt-4 h-10 w-full rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500" />
              </div>
              <p className="mt-6 text-center text-sm text-violet-500">
                On-brand, polished, builds trust instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Ready to make onboarding{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              feel like your brand?
            </span>
          </h2>
          <p className="mt-6 text-lg text-zinc-500">
            Stop sending people to generic forms. Start every relationship with a
            page that looks and feels like you.
          </p>
          <a
            href="#"
            className="mt-10 inline-block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-xl hover:shadow-violet-500/30"
          >
            Create Your First Brand
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-zinc-400">
          <span>Boarding</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
