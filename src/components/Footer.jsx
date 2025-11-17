export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Apex Tax & Wealth Advisors. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#start" className="hover:text-slate-900">Get started</a>
          <a href="#" className="hover:text-slate-900">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}
