import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import axiosClient from "../api/axiosClient.js";
import Card from "../components/Card.jsx";

const getInitials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const formatDate = (dateStr) => {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [dashboardMsg, setDashboardMsg] = useState("");
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashRes, profileRes] = await Promise.all([
          axiosClient.get("/dashboard"),
          axiosClient.get("/auth/profile"),
        ]);
        setDashboardMsg(dashRes.data.message);
        setProfile(profileRes.data.user);
      } catch (err) {
        setDashboardMsg("Could not load dashboard data");
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-ink font-body">
      <nav className="border-b border-border px-6 py-4 flex justify-between items-center">
        <div>
          <span className="text-lg font-semibold text-paper">shot</span>
          <span className="text-lg font-semibold text-teal">kut</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-fog hover:text-paper transition"
        >
          Log out
        </button>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-10 space-y-5">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-mint flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-semibold text-ink">
                {getInitials(user?.name) || "?"}
              </span>
            </div>
            <div className="min-w-0">
              <h1 className="text-lg font-semibold text-paper truncate">
                {user?.name}
              </h1>
              <p className="text-sm text-fog truncate">{user?.email}</p>
            </div>
            <span className="ml-auto flex-shrink-0 hidden sm:inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3 py-1 text-xs text-teal">
              <span className="w-1.5 h-1.5 rounded-full bg-teal status-dot" />
              Active
            </span>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="px-4 py-3.5">
            <p className="text-xs text-fog mb-1">Member since</p>
            <p className="text-sm font-medium text-paper">{formatDate(profile?.createdAt)}</p>
          </Card>
          <Card className="px-4 py-3.5">
            <p className="text-xs text-fog mb-1">Account ID</p>
            <p className="text-sm font-mono text-teal truncate">
              {profile?.id ? `#${profile.id.slice(-8)}` : "—"}
            </p>
          </Card>
          <Card className="px-4 py-3.5">
            <p className="text-xs text-fog mb-1">Access token</p>
            <p className="text-sm font-medium text-paper">15 min</p>
          </Card>
        </div>

        <Card className="px-5 py-4">
          <p className="text-xs text-fog mb-1.5">System status</p>
          <p className="text-sm text-paper">
            {dashboardMsg || "Loading protected data..."}
          </p>
          <p className="mt-2.5 text-xs text-fog">
            This confirms the access token was validated by a protected API call.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
