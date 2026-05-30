import { IconTrendUp } from "../../../utils/Icons";

export const StatCard = ({ label, value, change, positive, accent }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center justify-between mb-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
        {label}
      </p>
      <span
        className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${positive ? "bg-[#b5f23d]/20 text-[#5a8a00]" : "bg-red-50 text-red-500"}`}
      >
        <IconTrendUp />
        {change}
      </span>
    </div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${accent}`}
        style={{ width: "64%" }}
      />
    </div>
  </div>
);