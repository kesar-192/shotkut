import { useAuth } from "../context/AuthContext.jsx";
import ProfileStatsWidget from "../components/ProfileStatsWidget.jsx";
import StoryBar from "../components/StoryBar.jsx";
import VibeFeed from "../components/VibeFeed.jsx";
import TrendingPanel from "../components/TrendingPanel.jsx";
import { mockStories, mockPosts, trendingTags, trendingCreators } from "../data/mockFeed.js";

const Feed = () => {
  const { user } = useAuth();

  return (
    <div className="flex-1 flex gap-6 px-4 sm:px-6 py-6 max-w-7xl mx-auto w-full">
      <main className="flex-1 min-w-0 space-y-6">
        <ProfileStatsWidget user={user} />

        <div className="glass rounded-2xl p-4 sm:p-5">
          <StoryBar stories={mockStories} />
        </div>

        <VibeFeed posts={mockPosts} />
      </main>

      <TrendingPanel tags={trendingTags} creators={trendingCreators} />
    </div>
  );
};

export default Feed;
