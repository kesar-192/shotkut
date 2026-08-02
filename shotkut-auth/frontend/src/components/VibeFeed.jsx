import { useState } from "react";
import { Heart, MessageCircle, Repeat2, Bookmark } from "lucide-react";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [popped, setPopped] = useState(false);

  const toggleLike = () => {
    setLiked((v) => !v);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
    setPopped(true);
    setTimeout(() => setPopped(false), 350);
  };

  return (
    <article className="glass rounded-2xl overflow-hidden">
      <div className="flex items-center gap-3 px-4 pt-4">
        <div className="aura-ring">
          <div className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center m-[3px]">
            <span className="text-xs font-semibold text-paper">
              {post.handle[1]?.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-paper truncate">{post.handle}</p>
          <p className="text-xs text-fog">{post.time} ago</p>
        </div>
      </div>

      <p className="px-4 pt-3 text-sm text-paper/90">{post.caption}</p>

      <div className={`mx-4 mt-3 rounded-xl h-48 sm:h-56 bg-gradient-to-br ${post.gradient} opacity-80`} />

      <div className="flex items-center gap-5 px-4 py-3.5 text-fog">
        <button onClick={toggleLike} className="flex items-center gap-1.5 hover:text-teal transition">
          <Heart
            size={19}
            className={`${popped ? "like-pop" : ""} ${liked ? "text-teal fill-teal" : ""}`}
          />
          <span className="text-xs font-mono">{likeCount}</span>
        </button>
        <button className="flex items-center gap-1.5 hover:text-teal transition">
          <MessageCircle size={19} />
          <span className="text-xs font-mono">{post.comments}</span>
        </button>
        <button className="hover:text-teal transition">
          <Repeat2 size={19} />
        </button>
        <button className="ml-auto hover:text-paper transition">
          <Bookmark size={19} />
        </button>
      </div>
    </article>
  );
};

const VibeFeed = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default VibeFeed;
