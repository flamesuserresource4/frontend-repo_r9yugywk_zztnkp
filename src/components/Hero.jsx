import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),rgba(2,6,23,0.9))]"></div>

      {/* Spline 3D Scene */}
      <div className="relative h-[48vh] sm:h-[56vh] md:h-[64vh]">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative mx-auto -mt-6 max-w-6xl px-6 pb-16 sm:-mt-10 md:-mt-14 lg:-mt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-emerald-400/90 uppercase">Adnan Security • عدنان للأمن السيبراني</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block">ELITE SECURITY ASSESSMENT</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-emerald-100/80">
            Nation-state level penetration testing for Fortune 100 organizations and critical infrastructure operators
          </p>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 text-sm text-emerald-300/90">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 ring-1 ring-emerald-400/30">🎯 100% Break-In Success Record</span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 ring-1 ring-emerald-400/30">We Always Find A Way</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
