import { motion } from 'framer-motion'

export default function Hero({ onStart }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 text-sm font-medium">
              Beat taxes. Boost returns.
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Save up to 50% in taxes and invest the smart, tax-optimized way
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              We design legal, compliant strategies that lower your tax bill and make every investment dollar work harder for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onStart}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-colors"
              >
                Get a free tax-saving plan
              </button>
              <a href="#how" className="px-6 py-3 rounded-lg bg-white border text-slate-700 font-semibold hover:bg-slate-50">
                How it works
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-slate-700">
                <p className="text-2xl font-extrabold">$50M+</p>
                <p className="text-xs uppercase tracking-wide">client taxes saved</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-slate-700">
                <p className="text-2xl font-extrabold">98%</p>
                <p className="text-xs uppercase tracking-wide">plans implemented</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-white rounded-3xl border shadow-xl p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl p-4 bg-blue-50">
                  <p className="font-semibold text-slate-800">Tax Baseline</p>
                  <p className="text-blue-700 text-2xl font-extrabold">$48,200</p>
                  <p className="text-slate-600">Projected this year</p>
                </div>
                <div className="rounded-xl p-4 bg-emerald-50">
                  <p className="font-semibold text-slate-800">After Planning</p>
                  <p className="text-emerald-700 text-2xl font-extrabold">$24,100</p>
                  <p className="text-slate-600">Potential with us</p>
                </div>
                <div className="col-span-2 rounded-xl p-4 bg-indigo-50">
                  <p className="font-semibold text-slate-800">Portfolio Optimization</p>
                  <p className="text-slate-600">Asset location • Tax-loss harvesting • Retirement buckets</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
