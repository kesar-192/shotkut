import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import axiosClient from "../api/axiosClient.js";
import Sidebar from "../components/Sidebar.jsx";
import TopHeader from "../components/TopHeader.jsx";
import ProfileStatsWidget from "../components/ProfileStatsWidget.jsx";
import StoryBar from "../components/StoryBar.jsx";
import VibeFeed from "../components/VibeFeed.jsx";
import FAB from "../components/FAB.jsx";
import TrendingPanel from "../components/TrendingPanel.jsx";
import { mockStories, mockPosts, trendingTags, trendingCreators, userStats } from "../data/mockFeed.js";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosClient.get("/auth/profile");
        setProfile(data.user);
      } catch (err) {
        // Session likely expired - ProtectedRoute will redirect on next check.
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-ink font-body flex">
      <Sidebar onLogout={handleLogout} />

      <div className="flex-1 min-w-0 flex flex-col">
        <TopHeader user={user} onLogout={handleLogout} />

        <div className="flex-1 flex gap-6 px-4 sm:px-6 py-6 max-w-7xl mx-auto w-full">
          <main className="flex-1 min-w-0 space-y-6">
            <ProfileStatsWidget user={user} stats={userStats} />

            <div className="glass rounded-2xl p-4 sm:p-5">
              <StoryBar stories={mockStories} />
            </div>

            <VibeFeed posts={mockPosts} />
          </main>

          <TrendingPanel tags={trendingTags} creators={trendingCreators} />
        </div>
      </div>

      <FAB />
    </div>
  );
};

export default Dashboard;
