import { useState } from "react";
import CalorieCalculator from "./components/CalorieCalculator";
import MacroGuide from "./components/MacroGuide";
import MicroGuide from "./components/MicroGuide";
import SupplementGuide from "./components/SupplementGuide";
import FitnessSupplements from "./components/FitnessSupplements";

type Page = "calculator" | "macros" | "micros" | "supplements" | "fitness";

const nav: { id: Page; label: string; icon: string }[] = [
  { id: "calculator", label: "Calculator", icon: "⚡" },
  { id: "macros", label: "Macros", icon: "📊" },
  { id: "micros", label: "Micros", icon: "🧬" },
  { id: "supplements", label: "Supplements", icon: "💊" },
  { id: "fitness", label: "Fitness", icon: "🏋️" },
];

export default function App() {
  const [page, setPage] = useState<Page>("calculator");

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌱</span>
            <h1 className="text-base font-bold tracking-tight">NutriBase</h1>
          </div>
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Plant-Based Nutrition</span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-[57px] z-40 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-2">
          <div className="flex overflow-x-auto scrollbar-hide">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  page === item.id
                    ? "border-emerald-500 text-emerald-400"
                    : "border-transparent text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {page === "calculator" && <CalorieCalculator />}
        {page === "macros" && <MacroGuide />}
        {page === "micros" && <MicroGuide />}
        {page === "supplements" && <SupplementGuide />}
        {page === "fitness" && <FitnessSupplements />}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-12">
        <div className="max-w-3xl mx-auto px-4 py-6 text-xs text-zinc-500 space-y-1">
          <p>Content sourced from <a href="https://darebeets.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-300 underline">darebeets.com</a> — a plant-based nutrition resource.</p>
          <p>This tool provides general estimates. Consult a healthcare professional for personalized advice.</p>
        </div>
      </footer>
    </div>
  );
}
