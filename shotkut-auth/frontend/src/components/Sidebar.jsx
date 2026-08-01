import { Home, Compass, MessageCircle, Bell, Zap, Settings, LogOut } from "lucide-react";

const navItems = [
  { icon: Home, label: "Feed", active: true },
  { icon: Compass, label: "Explore" },
  { icon: MessageCircle, label: "Messages" },
  { icon: Bell, label: "Notifications" },
  { icon: Zap, label: "Aura / Stats" },
  { icon: Settings, label: "Profile Settings" },
];

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="hidden lg:flex flex-col w-20 xl:w-56 shrink-0 border-r border-glassBorder px-3 py-6 gap-1">
      <div className="px-2 mb-8">
        <span className="font-display text-xl font-extrabold text-paper hidden xl:inline">
          sylva
        </span>
        <span className="font-display text-xl font-extrabold text-paper xl:hidden block text-center">
          s
        </span>
      </div>

      {navItems.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
            active
              ? "bg-white/[0.06] text-paper"
              : "text-fog hover:bg-white/[0.04] hover:text-paper"
          }`}
        >
          <Icon
            size={20}
            strokeWidth={2}
            className={active ? "text-cyan" : "group-hover:text-purple-soft transition-colors"}
          />
          <span className="hidden xl:inline font-medium">{label}</span>
        </button>
      ))}

      <button
        onClick={onLogout}
        className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-fog hover:bg-white/[0.04] hover:text-paper transition-colors"
      >
        <LogOut size={20} strokeWidth={2} />
        <span className="hidden xl:inline font-medium">Log out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
