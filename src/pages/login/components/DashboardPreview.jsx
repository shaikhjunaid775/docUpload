import React from "react";
import { FloatingCard } from "../../../utils/Icons";

function DashboardPreview() {
  return (
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
            <p className="text-white/50 text-[7px] mb-1">
              Hi, Johnny Andrade 👋
            </p>
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
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#b5f23d"
                strokeWidth="4"
                strokeDasharray="56 88"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-gray-700">
              64%
            </span>
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
            <svg
              className="w-2.5 h-2.5 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-900 text-base font-bold">$12,924.00</p>
        <p className="text-[7px] text-gray-400 mt-0.5">+8.2% from last month</p>
      </FloatingCard>

      {/* Floating icon bubbles */}
      <div className="absolute top-[10px] right-[30px] w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </div>

      <div className="absolute top-[80px] left-[10px] w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>

      <div className="absolute bottom-[80px] left-[20px] w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </div>
    </div>
  );
}

export default DashboardPreview;
