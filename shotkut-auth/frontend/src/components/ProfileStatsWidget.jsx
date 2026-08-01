import { Share2, Sparkles, Flame, Music2 } from "lucide-react";

const getInitials = (name = "") =>
  name.trim().split(/\s+/).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");

const ProfileStatsWidget = ({ user, stats }) => {
  return (
    <div className="glass rounded-3xl overflow-hidden">
      {/* Cover banner */}
      <div className="h-28 sm:h-36 relative bg-gradient-to-br from-purple/40 via-charcoal to-cyan/30">
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="px-5 sm:px-8 pb-6">
        <div className="flex flex-wrap items-end gap-4 -mt-10">
          <div className="aura-ring">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-charcoal flex items-center justify-center m-[3px]">
              <span className="text-2xl font-bold text-paper">
                {getInitials(user?.name) || "?"}
              </span>
            </div>
          </div>

          <div className="pb-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-paper truncate">{user?.name}</h1>
            <p className="text-sm text-fog truncate">
              @{user?.name?.toLowerCase().replace(/\s+/g, "") || "user"}
            </p>
          </div>

          <button className="ml-auto mb-1 text-xs sm:text-sm rounded-full bg-white/[0.06] border border-glassBorder px-3 py-1.5 text-purple-soft hover:bg-white/[0.1] transition">
            {stats.moodTag}
          </button>
        </div>

        {/* Aura / Rizz score */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm mb-1.5">
            <span className="flex items-center gap-1.5 text-paper font-medium">
              <Sparkles size={15} className="text-cyan" />
              <span className="font-mono">{stats.auraPoints.toLocaleString()}</span> Aura Points
            </span>
            <span className="text-fog">{stats.rankTitle}</span>
          </div>
          <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple to-cyan shadow-glow-purple"
              style={{ width: `${stats.auraProgress}%` }}
            />
          </div>
        </div>

        {/* Streak + Spotify pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-glassBorder px-3 py-1.5 text-xs text-paper">
            <Flame size={14} className="text-purple-soft" />
            {stats.streakDays}-Day Rizz Streak
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-glassBorder px-3 py-1.5 text-xs text-paper">
            <Music2 size={14} className="text-cyan" />
            Listening to {stats.spotifyTrack}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap gap-2.5">
          <button className="rounded-full bg-gradient-to-r from-purple to-cyan text-ink text-sm font-semibold px-4 py-2 shadow-glow-purple hover:brightness-110 transition">
            Edit Profile
          </button>
          <button className="rounded-full bg-white/[0.06] border border-glassBorder text-sm text-paper px-4 py-2 hover:bg-white/[0.1] transition inline-flex items-center gap-1.5">
            <Share2 size={14} /> Share Profile
          </button>
          <button className="rounded-full bg-white/[0.06] border border-glassBorder text-sm text-paper px-4 py-2 hover:bg-white/[0.1] transition">
            Customize Vibe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatsWidget;
