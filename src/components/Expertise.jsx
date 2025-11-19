function Expertise() {
  const items = [
    {
      title: 'Unmatched Expertise',
      points: [
        'The only security architect combining government network experience, mainframe operations, and international banking infrastructure security',
      ],
    },
    {
      title: 'Critical Infrastructure Protection',
      points: [
        'Government networks, core banking systems, telecommunications infrastructure',
      ],
    },
    {
      title: 'Advanced Threat Simulation',
      points: [
        'Nation-state level attack methodologies and financial crime prevention',
      ],
    },
    {
      title: 'Legacy System Mastery',
      points: [
        'IBM mainframes, UNIX systems, enterprise database security (Oracle, MySQL)',
      ],
    },
    {
      title: 'Modern Infrastructure',
      points: [
        'Kubernetes, Docker, cloud security (AWS/Azure/GCP), Infrastructure-as-Code',
      ],
    },
  ]

  return (
    <section className="relative bg-slate-950 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white">Unmatched Expertise</h2>
        <p className="mt-2 text-center text-emerald-200/80">Principal Consultant: Adnan Ahmad • 27 Years Hands-On • 100% Break-In Record • Critical Infrastructure</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-emerald-100/80">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
