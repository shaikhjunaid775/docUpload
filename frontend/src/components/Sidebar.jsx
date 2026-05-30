import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { IconLogout } from "../utils/Icons";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ navItems, sidebarOpen, active, setActive }) => {
  const { signout } = useAuth();
  const [activeModal, setActiveModal] = useState(null);

  const navigate = useNavigate();
  // const location = useLocation();

  const handleMenu = (item) => {
    console.log("item: ", item)
    setActive(item.id)
    navigate(item.path);
  };

  return (
    <>
      <aside
        className={`${sidebarOpen ? "w-60" : "w-[68px]"} bg-[#0f1a2e] flex flex-col transition-all duration-300 ease-in-out flex-shrink-0 z-20`}
      >
        {/* Logo */}
        <div
          className={`flex items-center gap-3 px-4 py-5 border-b border-white/5 ${!sidebarOpen && "justify-center"}`}
        >
          <div className="w-8 h-8 rounded-full bg-[#b5f23d] flex items-center justify-center flex-shrink-0">
            <div className="w-3.5 h-3.5 rounded-full bg-[#0f1a2e]" />
          </div>
          {sidebarOpen && (
            <span className="font-bold text-white text-lg tracking-tight">
              Osmo
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-5 px-2 space-y-1">
          {sidebarOpen && (
            <p className="text-[10px] font-semibold text-white/25 uppercase tracking-widest px-3 mb-3">
              Main Menu
            </p>
          )}
          {navItems.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => handleMenu(item)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group cursor-pointer
                ${
                  active === item.id
                    ? "bg-[#b5f23d] text-gray-900"
                    : "text-white/50 hover:text-white hover:bg-white/8"
                }
                ${!sidebarOpen && "justify-center"}
              `}
              >
                <span
                  className={`flex-shrink-0 ${active === item.id ? "text-gray-900" : "text-white/40 group-hover:text-white"}`}
                >
                  {item.icon}
                </span>
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom: user + logout */}
        <div className="px-2 pb-5 space-y-1">
          <button
            onClick={() => setActiveModal("logout")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all duration-150 ${!sidebarOpen && "justify-center"}`}
          >
            <IconLogout />
            {sidebarOpen && <span>Logout</span>}
          </button>

          {sidebarOpen && (
            <div className="flex items-center gap-3 mt-3 px-3 py-2.5 rounded-xl bg-white/5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b5f23d] to-[#6daa00] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                J
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">
                  Johnny Andrade
                </p>
                <p className="text-[10px] text-white/35 truncate">
                  Rindu Store
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>

      <Modal
        isOpen={activeModal === "logout"}
        onClose={() => setActiveModal(null)}
        title="Log out?"
        footer={
          <>
            <button
              onClick={() => setActiveModal(null)}
              className="flex-1 border rounded-lg py-2"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                signout();
              }}
              className="flex-1 bg-red-500 text-white rounded-lg py-2"
            >
              Logout
            </button>
          </>
        }
      >
        Are you sure you want to log out?
      </Modal>
    </>
  );
};

export default Sidebar;
