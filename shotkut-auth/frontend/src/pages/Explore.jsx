import { Compass } from "lucide-react";
import EmptyState from "../components/EmptyState.jsx";

const Explore = () => (
  <EmptyState
    icon={Compass}
    title="Explore is warming up"
    description="Discovery and search will surface real creators and posts here once the content API is built. For now, check Trending Vibes on your Feed."
  />
);

export default Explore;
