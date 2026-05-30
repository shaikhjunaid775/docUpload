import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  IconApprove,
  IconBell,
  IconDashboard,
  IconMenu,
  IconSearch,
  IconUpload,
} from "../utils/Icons";
import { useAuth } from "../context/useAuth";

export default function ProtectedLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [active, setActive] = useState("dashboard");

  const { user } = useAuth();

  const allNavItems = [
    {
      id: "dashboard",
      path: "/dashboard",
      label: "Dashboard",
      icon: <IconDashboard />,
      roles: ["admin", "manager", "user"],
    },
    {
      id: "upload",
      path: "/uploadDocument",
      label: "Upload Document",
      icon: <IconUpload />,
      roles: ["user"],
    },
    {
      id: "approve",
      path: "/approveDocument",
      label: "Approve Documents",
      icon: <IconApprove />,
      roles: ["admin", "manager","user"],
    },
  ];

  const navItems = allNavItems.filter((item) =>
    item.roles.includes(user?.role),
  );

  console.log(active)

  return (
    <div className="flex h-screen bg-[#f7f8fc] font-sans overflow-hidden">
      <Sidebar active={active} setActive={setActive} navItems={navItems} sidebarOpen={sidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-6 py-3.5 flex items-center gap-4 shadow-sm z-10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0"
          >
            <IconMenu />
          </button>

          {/* Search */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 flex-1 max-w-xs">
            <IconSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-gray-600 placeholder-gray-300 outline-none w-full"
            />
          </div>

          <div className="flex-1" />

          {/* Bell */}
          <button className="relative text-gray-400 hover:text-gray-700 transition-colors">
            <IconBell />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#b5f23d] rounded-full border border-white" />
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b5f23d] to-[#6daa00] flex items-center justify-center text-xs font-bold text-white">
              J
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-gray-800 leading-none">
                Johnny Andrade
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">Store Admin</p>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
