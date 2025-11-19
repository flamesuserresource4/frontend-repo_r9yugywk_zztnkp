function CTA() {
  return (
    <section className="relative bg-slate-950 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Immediate Consultation Available</h3>
              <p className="mt-2 text-emerald-100/80">Secure communications, 48-hour engagement initiation, Duration: 6-8 Weeks | Scope: Complete External Assessment</p>
              <p className="mt-2 text-emerald-200/70 text-sm">Authorization Notice: All testing conducted against publicly accessible systems only. Immediate escalation protocols for critical findings. Enterprise-grade confidentiality protection.</p>
              <p className="mt-3 text-xs text-emerald-300/60">This website uses no cookies or trackers. Privacy matters.</p>
            </div>
            <div className="space-y-3">
              <a href="mailto:adnan@adnansecurity.com" className="block w-full rounded-xl bg-emerald-500 px-4 py-3 text-center font-semibold text-slate-950 hover:bg-emerald-400 transition-colors">Email: adnan@adnansecurity.com</a>
              <a href="tel:+12896757077" className="block w-full rounded-xl bg-emerald-400/20 px-4 py-3 text-center font-semibold text-emerald-300 hover:bg-emerald-400/30 transition-colors">Phone: +1 (289) 675-7077</a>
              <div className="text-center text-sm text-emerald-300/80">Professional services delivered by Adnan Ahmad. DBA Adnan Security.</div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-emerald-300/60">© 2025 Adnan Ahmad - DBA Adnan Security. Confidential & Privileged.</p>
      </div>
    </section>
  )
}

export default CTA
