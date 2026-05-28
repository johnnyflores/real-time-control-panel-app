import type { Theme } from "@/constants/theme";
import { Moon, Sun } from "lucide-react";
type Props = {
  theme: Theme;
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="px-3 py-1 cursor-pointer rounded bg-gray-700 text-white hover:bg-gray-600 transition"
    >
      {theme === "dark" ? (
        <Moon size={18} className="text-amber-50" />
      ) : (
        <Sun size={18} className="text-yellow-400" />
      )}
    </button>
  );
}
