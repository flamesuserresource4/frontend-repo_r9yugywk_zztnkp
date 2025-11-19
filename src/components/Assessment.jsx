function Assessment() {
  const phases = [
    {
      emoji: '🔍',
      title: 'Deep Reconnaissance',
      desc: 'Complete external asset discovery, OSINT, code repository analysis, cloud enumeration',
    },
    {
      emoji: '🛡️',
      title: 'Vulnerability Assessment',
      desc: 'Infrastructure testing, database security, web applications, API endpoints, manual validation',
    },
    {
      emoji: '⚔️',
      title: 'Threat Simulation',
      desc: 'Custom exploit development, APT simulation, attack chain validation, zero-day research',
    },
  ]

  const coverage = [
    'All publicly exposed infrastructure',
    'Web applications & API endpoints',
    'Code repositories (GitHub, GitLab, Bitbucket)',
    'Cloud services (AWS, Azure, GCP)',
    'Database services & exposed instances',
    'Email infrastructure & webmail',
    'File transfer services & repositories',
    'VPN endpoints & remote access',
    'IoT devices & building management',
    'Third-party integrations & partner portals',
  ]

  return (
    <section className="relative bg-slate-950 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Comprehensive Assessment</h2>
        <p className="mt-2 text-center text-emerald-200/80">6-Week Remote External Security Assessment</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {phases.map((p) => (
            <div key={p.title} className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 text-center">
              <div className="text-3xl">{p.emoji}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-emerald-100/80">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold">Complete Coverage Guarantee</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-emerald-100/80 list-disc pl-5">
            {coverage.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Assessment
