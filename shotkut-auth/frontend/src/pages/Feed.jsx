import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import ProfileStatsWidget from "../components/ProfileStatsWidget.jsx";
import StoryBar from "../components/StoryBar.jsx";
import VibeFeed from "../components/VibeFeed.jsx";
import TrendingPanel from "../components/TrendingPanel.jsx";
import { FeedSkeleton } from "../components/Skeleton.jsx";
import { mockStories, mockPosts, trendingTags, trendingCreators } from "../data/mockFeed.js";

const Feed = () => {
  const { user } = useAuth();
  const { density } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Feed content (stories/posts) is still mock data with no real
    // endpoint yet, but we simulate the fetch latency so the skeleton
    // state is honestly demonstrating what a real load will feel like.
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex-1 flex gap-6 px-4 sm:px-6 py-6 max-w-7xl mx-auto w-full">
      <main className={`flex-1 min-w-0 ${density === "compact" ? "space-y-4" : "space-y-6"}`}>
        {loading ? (
          <FeedSkeleton />
        ) : (
          <>
            <ProfileStatsWidget user={user} />
            <div className="glass rounded-2xl p-4 sm:p-5">
              <StoryBar stories={mockStories} />
            </div>
            <VibeFeed posts={mockPosts} density={density} />
          </>
        )}
      </main>

      <TrendingPanel tags={trendingTags} creators={trendingCreators} />
    </div>
  );
};

export default Feed;
