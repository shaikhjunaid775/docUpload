import { useState } from "react";
import { Link } from "react-router-dom";

const FloatingCard = ({ className, children }) => (
  <div className={`absolute bg-white rounded-2xl shadow-2xl p-3 ${className}`}>
    {children}
  </div>
);

const DashboardPreview = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Main tablet mockup */}
    <div className="relative w-[340px] h-[240px] bg-[#0f1a2e] rounded-2xl shadow-2xl overflow-hidden border border-white/10 rotate-[-4deg] translate-x-4">
      {/* Dashboard header */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <div className="ml-2 flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#b5f23d]" />
          <span className="text-white text-[9px] font-semibold">Osmo</span>
        </div>
      </div>

      {/* Sidebar + content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-16 bg-[#0a1220] flex flex-col items-center py-2 gap-3">
          <div className="w-6 h-1.5 bg-white/20 rounded" />
          <div className="w-6 h-1.5 bg-white/20 rounded" />
          <div className="w-6 h-1.5 bg-[#b5f23d] rounded" />
          <div className="w-6 h-1.5 bg-white/20 rounded" />
          <div className="w-6 h-1.5 bg-white/20 rounded" />
          <div className="w-6 h-1.5 bg-white/20 rounded" />
        </div>

        {/* Main content */}
        <div className="flex-1 p-2 overflow-hidden">
          <p className="text-white/50 text-[7px] mb-1">Hi, Johnny Andrade 👋</p>
          <div className="grid grid-cols-2 gap-2">
            {/* Big number card */}
            <div className="col-span-2 bg-[#1a2a45] rounded-lg p-2">
              <p className="text-white/40 text-[6px]">Total Visitors</p>
              <p className="text-white text-base font-bold">120,435</p>
              <div className="flex gap-1 mt-1">
                <span className="text-[6px] text-[#b5f23d]">+12.5%</span>
              </div>
            </div>

            <div className="bg-[#1a2a45] rounded-lg p-2 flex items-center justify-between">
              <div>
                <p className="text-white/40 text-[6px]">Revenue</p>
                <p className="text-white text-[9px] font-bold">62,746</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#b5f23d]/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border-2 border-[#b5f23d]" />
              </div>
            </div>

            <div className="bg-[#1a2a45] rounded-lg p-2">
              <p className="text-white/40 text-[6px]">Orders</p>
              <p className="text-white text-[9px] font-bold">16,036</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Floating Sales card */}
    <FloatingCard className="left-[-10px] top-[20px] w-[130px] shadow-xl z-10">
      <p className="text-gray-400 text-[8px] font-medium mb-0.5">Sales</p>
      <p className="text-gray-900 text-sm font-bold">$35,647.00</p>
      <div className="flex items-center gap-2 mt-1">
        <div className="relative w-8 h-8">
          <svg viewBox="0 0 36 36" className="w-8 h-8 -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4" />
            <circle
              cx="18" cy="18" r="14" fill="none"
              stroke="#b5f23d" strokeWidth="4"
              strokeDasharray="56 88"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-gray-700">64%</span>
        </div>
        <div>
          <p className="text-[6px] text-gray-400">Monthly Target</p>
          <p className="text-[7px] text-green-500 font-semibold">On track</p>
        </div>
      </div>
    </FloatingCard>

    {/* Floating Total Income card */}
    <FloatingCard className="right-[-20px] bottom-[30px] w-[150px] z-10">
      <div className="flex items-center justify-between mb-1">
        <p className="text-gray-400 text-[8px] font-medium">Total Income</p>
        <div className="w-4 h-4 rounded bg-[#b5f23d] flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
      <p className="text-gray-900 text-base font-bold">$12,924.00</p>
      <p className="text-[7px] text-gray-400 mt-0.5">+8.2% from last month</p>
    </FloatingCard>

    {/* Floating icon bubbles */}
    <div className="absolute top-[10px] right-[30px] w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
      <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </div>

    <div className="absolute top-[80px] left-[10px] w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
      <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>

    <div className="absolute bottom-[80px] left-[20px] w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
      <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </div>
  </div>
);

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ store: "Rindu Store", email: "rindustore@gmail.com", password: "123456" });

  return (
    <div className="min-h-screen flex font-sans bg-white">
      {/* Left panel */}
      <div className="w-full lg:w-1/2 flex flex-col px-10 py-10 justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-7 h-7 rounded-full bg-[#b5f23d] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#0f1a2e]" />
          </div>
          <span className="font-bold text-lg text-gray-900 tracking-tight">Osmo</span>
        </div>

        {/* Form section */}
        <div className="max-w-sm w-full mx-auto flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Create your account</h1>
          <p className="text-gray-400 text-sm mb-7">Register your store with Osmo</p>

          {/* Google button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition mb-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">or Sign up with Email</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Name Store */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Name Store</label>
            <input
              type="text"
              value={form.store}
              onChange={e => setForm({ ...form, store: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#b5f23d] focus:ring-1 focus:ring-[#b5f23d] transition placeholder-gray-300"
              placeholder="Your store name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#b5f23d] focus:ring-1 focus:ring-[#b5f23d] transition placeholder-gray-300"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-7">
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#b5f23d] focus:ring-1 focus:ring-[#b5f23d] transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button className="w-full bg-[#b5f23d] hover:bg-[#a3e030] text-gray-900 font-semibold rounded-lg py-2.5 text-sm transition-colors duration-200 shadow-sm">
            Register Now
          </button>

          <p className="text-center text-xs text-gray-400 mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-700 font-medium hover:text-[#8bc820] transition-colors">Sign in</Link>
          </p>
        </div>

        <div />
      </div>

      {/* Right panel */}
      <div
        className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0f1a2e 0%, #1a2f50 40%, #0d2240 70%, #0a1628 100%)",
        }}
      >
        {/* Decorative swirl lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b5f23d" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4fc3f7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={i}
              cx="300" cy="300"
              rx={120 + i * 40} ry={80 + i * 30}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.8"
              transform={`rotate(${i * 22} 300 300)`}
            />
          ))}
          <path d="M 50 500 Q 200 100 550 200" stroke="url(#lineGrad)" strokeWidth="0.8" fill="none" />
          <path d="M 0 300 Q 300 50 600 400" stroke="url(#lineGrad)" strokeWidth="0.8" fill="none" />
          <path d="M 100 600 Q 400 200 600 100" stroke="url(#lineGrad)" strokeWidth="0.8" fill="none" />
        </svg>

        {/* Dashboard preview */}
        <div className="relative w-[400px] h-[320px]">
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
}