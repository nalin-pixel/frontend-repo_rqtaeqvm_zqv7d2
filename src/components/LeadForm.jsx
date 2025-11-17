import { useState } from 'react'

export default function LeadForm() {
  const [status, setStatus] = useState({ state: 'idle' })
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    annual_income: '',
    message: '',
  })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })
    try {
      const payload = {
        ...form,
        annual_income: form.annual_income ? parseFloat(form.annual_income) : undefined,
        source: 'website',
      }
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ state: 'success' })
      setForm({ name: '', email: '', phone: '', company: '', annual_income: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="start" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">
            Get your free tax-saving plan
          </h2>
          <p className="text-slate-600 text-center mt-2">
            Share a few details. We’ll send a personalized, compliant strategy.
          </p>

          <form onSubmit={submit} className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Full name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Company (optional)</label>
              <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Approx annual income</label>
              <input type="number" min="0" step="1000" name="annual_income" value={form.annual_income} onChange={handleChange} className="mt-1 w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Anything else?</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button disabled={status.state==='loading'} className="sm:col-span-2 mt-2 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-colors">
              {status.state === 'loading' ? 'Submitting...' : 'Send my plan'}
            </button>
            {status.state === 'success' && (
              <p className="sm:col-span-2 text-emerald-700 text-center">Thanks! We’ll be in touch within 24 hours.</p>
            )}
            {status.state === 'error' && (
              <p className="sm:col-span-2 text-red-600 text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
