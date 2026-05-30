
import { StatCard } from "./component/StatCard";


 const DashboardPage = () => (
  <div>
    <div className="flex items-center justify-between mb-7">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Good morning, Johnny 👋
        </h2>
        <p className="text-sm text-gray-400 mt-0.5">
          Here's what's happening with your store today.
        </p>
      </div>
      <div className="text-xs text-gray-400 bg-white border border-gray-100 px-3 py-1.5 rounded-lg shadow-sm">
        April 2026
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      <StatCard
        label="Total Sales"
        value="$35,647"
        change="+12.5%"
        positive
        accent="bg-[#b5f23d]"
      />
      <StatCard
        label="Total Income"
        value="$12,924"
        change="+8.2%"
        positive
        accent="bg-blue-400"
      />
      <StatCard
        label="Visitors"
        value="120,435"
        change="+5.1%"
        positive
        accent="bg-violet-400"
      />
      <StatCard
        label="Orders"
        value="16,036"
        change="-2.3%"
        positive={false}
        accent="bg-red-400"
      />
    </div>

    {/* Recent activity */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      {/* Table */}
      <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <p className="text-sm font-semibold text-gray-800">Recent Orders</p>
          <button className="text-xs text-[#5a8a00] font-medium hover:underline">
            View all
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-gray-400 uppercase tracking-widest">
              <th className="text-left px-6 py-3">Customer</th>
              <th className="text-left px-6 py-3">Product</th>
              <th className="text-left px-6 py-3">Amount</th>
              <th className="text-left px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              {
                name: "Anya Patel",
                product: "Store Pro Plan",
                amount: "$299",
                status: "Paid",
                color: "bg-[#b5f23d]/20 text-[#5a8a00]",
              },
              {
                name: "Marcus Liu",
                product: "Analytics Add-on",
                amount: "$49",
                status: "Pending",
                color: "bg-yellow-50 text-yellow-600",
              },
              {
                name: "Sara Holt",
                product: "Store Basic",
                amount: "$99",
                status: "Paid",
                color: "bg-[#b5f23d]/20 text-[#5a8a00]",
              },
              {
                name: "Deven Roy",
                product: "Store Pro Plan",
                amount: "$299",
                status: "Failed",
                color: "bg-red-50 text-red-500",
              },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#b5f23d] to-[#6daa00] flex items-center justify-center text-xs font-bold text-white">
                      {row.name[0]}
                    </div>
                    <span className="font-medium text-gray-800">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-gray-500">{row.product}</td>
                <td className="px-6 py-3.5 font-semibold text-gray-800">
                  {row.amount}
                </td>
                <td className="px-6 py-3.5">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${row.color}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick stats */}
      <div className="bg-[#0f1a2e] rounded-2xl p-6 flex flex-col gap-5">
        <p className="text-sm font-semibold text-white">Monthly Target</p>
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 120 120" className="w-32 h-32">
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="12"
            />
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#b5f23d"
              strokeWidth="12"
              strokeDasharray="192 302"
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
            <text
              x="60"
              y="55"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontWeight="bold"
            >
              64%
            </text>
            <text
              x="60"
              y="72"
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="9"
            >
              of target
            </text>
          </svg>
        </div>
        <div className="space-y-3">
          {[
            { label: "Sales", val: "$35,647", pct: 64 },
            { label: "Revenue", val: "$62,746", pct: 78 },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/50">{item.label}</span>
                <span className="text-white font-semibold">{item.val}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#b5f23d] rounded-full"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


export default DashboardPage;