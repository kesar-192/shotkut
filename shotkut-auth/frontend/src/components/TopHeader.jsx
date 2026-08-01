import { Search, Bell, LogOut } from "lucide-react";

const getInitials = (name = "") =>
  name.trim().split(/\s+/).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");

const TopHeader = ({ user, onLogout }) => {
  return (
    <header className="sticky top-0 z-20 glass border-x-0 border-t-0 px-4 sm:px-6 py-3 flex items-center gap-4">
      <span className="font-display text-lg font-extrabold text-paper lg:hidden">
        sylva
      </span>

      <div className="flex-1 max-w-md hidden sm:flex items-center gap-2 rounded-full bg-white/[0.05] border border-glassBorder px-4 py-2">
        <Search size={16} className="text-fog shrink-0" />
        <input
          type="text"
          placeholder="Search #trending, people, vibes..."
          className="bg-transparent text-sm text-paper placeholder-fog outline-none w-full"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button
          onClick={onLogout}
          className="lg:hidden text-fog hover:text-paper transition"
          aria-label="Log out"
        >
          <LogOut size={19} />
        </button>

        <button className="relative text-fog hover:text-paper transition">
          <Bell size={20} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan status-dot" />
        </button>

        <div className="aura-ring">
          <div className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center m-[3px]">
            <span className="text-xs font-semibold text-paper">
              {getInitials(user?.name) || "?"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
