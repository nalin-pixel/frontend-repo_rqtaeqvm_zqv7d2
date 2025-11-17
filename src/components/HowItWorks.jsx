export default function HowItWorks() {
  const steps = [
    {
      title: 'Discovery & Goals',
      desc: 'We learn about your income, entity setup, and investment goals to map opportunities.',
    },
    {
      title: 'Tax Strategy Blueprint',
      desc: 'We design legal, compliant strategies tailored to you (deductions, credits, entities).',
    },
    {
      title: 'Investment Optimization',
      desc: 'Place assets in the right accounts, harvest losses, and plan withdrawals smartly.',
    },
    {
      title: 'Implementation & Ongoing',
      desc: 'We partner with your CPA and custodian and monitor results year-round.',
    },
  ]

  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          How we cut your taxes and maximize after-tax returns
        </h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">
          Clear, compliant, and ROI-focused. You keep more of what you earn and grow faster.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white grid place-content-center font-bold">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
