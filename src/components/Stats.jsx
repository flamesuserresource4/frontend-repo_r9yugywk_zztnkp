function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6 text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-emerald-200/80">{label}</div>
    </div>
  )
}

function Stats() {
  return (
    <section className="relative bg-slate-950/80 py-10 sm:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 sm:grid-cols-4 sm:gap-4">
        <Stat value="27" label="Years Enterprise Infrastructure Mastery" />
        <Stat value="100%" label="Break-In Success Rate" />
        <Stat value="100%" label="External Attack Surface Coverage" />
        <Stat value="24/7" label="Critical Escalation Response" />
      </div>
    </section>
  )
}

export default Stats
