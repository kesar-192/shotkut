import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useToast } from "../context/ToastContext.jsx";
import Card from "../components/Card.jsx";

const Settings = () => {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    avatarUrl: user?.avatarUrl || "",
    statusTag: user?.statusTag || "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const { showToast } = useToast();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await updateProfile(form);
      showToast("Settings saved");
    } catch (err) {
      setError(err.response?.data?.message || "Could not save settings");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex-1 px-4 sm:px-6 py-6 max-w-2xl mx-auto w-full space-y-6">
      <div>
        <h1 className="text-xl font-bold text-paper">Profile Settings</h1>
        <p className="text-sm text-fog mt-1">Update how you appear across Sylva.</p>
      </div>

      <Card className="p-6">
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs text-fog mb-1.5">Display name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-ink border border-glassBorder px-3.5 py-2.5 text-sm text-paper outline-none focus:border-teal transition"
            />
          </div>
          <div>
            <label className="block text-xs text-fog mb-1.5">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              maxLength={160}
              rows={3}
              placeholder="Tell people what your vibe is..."
              className="w-full rounded-lg bg-ink border border-glassBorder px-3.5 py-2.5 text-sm text-paper placeholder-fog outline-none focus:border-teal transition resize-none"
            />
            <p className="text-[11px] text-fog mt-1 text-right">{form.bio.length}/160</p>
          </div>
          <div>
            <label className="block text-xs text-fog mb-1.5">Status / vibe tag</label>
            <input
              name="statusTag"
              value={form.statusTag}
              onChange={handleChange}
              maxLength={40}
              className="w-full rounded-lg bg-ink border border-glassBorder px-3.5 py-2.5 text-sm text-paper outline-none focus:border-teal transition"
            />
          </div>
          <div>
            <label className="block text-xs text-fog mb-1.5">Avatar image URL</label>
            <input
              name="avatarUrl"
              value={form.avatarUrl}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full rounded-lg bg-ink border border-glassBorder px-3.5 py-2.5 text-sm text-paper placeholder-fog outline-none focus:border-teal transition"
            />
            <p className="text-[11px] text-fog mt-1">Leave blank to keep your initials avatar.</p>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-teal text-ink text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      </Card>

      <Card className="p-6">
        <h2 className="text-sm font-semibold text-paper mb-1">Account</h2>
        <p className="text-sm text-fog mb-4">{user?.email}</p>
        <button
          onClick={async () => {
            await logout();
            navigate("/login");
          }}
          className="rounded-lg border border-glassBorder text-sm text-paper px-4 py-2 hover:bg-white/[0.05] transition"
        >
          Log out
        </button>
      </Card>
    </div>
  );
};

export default Settings;
