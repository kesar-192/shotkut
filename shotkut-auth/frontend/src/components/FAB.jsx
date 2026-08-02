import { Plus } from "lucide-react";
import { useToast } from "../context/ToastContext.jsx";

const FAB = () => {
  const { showToast } = useToast();
  return (
    <button
      onClick={() => showToast("Post creation is coming soon")}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-14 h-14 rounded-full bg-teal shadow-glow-teal flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-30"
      aria-label="Create post"
    >
      <Plus size={26} className="text-ink" strokeWidth={2.5} />
    </button>
  );
};

export default FAB;
