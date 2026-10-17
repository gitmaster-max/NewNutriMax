import { useState } from "react";
import { vitamins, minerals, lipids } from "../data/nutrition";

type Tab = "vitamins" | "minerals" | "lipids";

export default function MicroGuide() {
  const [tab, setTab] = useState<Tab>("vitamins");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const allItems = tab === "vitamins" ? vitamins : tab === "minerals" ? minerals : lipids;

  const filtered = allItems.filter((item) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.sources.some((s) => s.toLowerCase().includes(q)) ||
      ("role" in item && (item as any).role?.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-zinc-100 mb-1">Micronutrients Reference</h2>
        <p className="text-sm text-zinc-400">Daily requirements and plant-based food sources. Search by nutrient name or food.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-zinc-800 rounded-lg p-1">
        {(["vitamins", "minerals", "lipids"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setSearch(""); }}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              tab === t ? "bg-zinc-700 text-zinc-100" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`Search ${tab} by name or food source...`}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-600"
      />

      {/* Items */}
      <div className="space-y-2">
        {filtered.map((item) => {
          const isExpanded = expanded === item.name;
          const hasSupplement = "supplement" in item && (item as any).supplement;
          return (
            <div
              key={item.name}
              className="bg-zinc-800/60 border border-zinc-700/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpanded(isExpanded ? null : item.name)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-100">{item.name}</span>
                  {hasSupplement && (
                    <span className="text-[10px] bg-red-900/50 text-red-300 px-1.5 py-0.5 rounded font-medium">SUPPLEMENT</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-400 font-mono">
                    M: {item.men} {item.women !== item.men && <span className="text-zinc-500">| F: {item.women}</span>}
                  </span>
                  <svg className={`w-4 h-4 text-zinc-500 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-3 border-t border-zinc-700/50 pt-3 space-y-2">
                  {"role" in item && (
                    <p className="text-xs text-zinc-400">{(item as any).role}</p>
                  )}
                  {"tip" in item && (item as any).tip && (
                    <p className="text-xs text-emerald-400/80">💡 {(item as any).tip}</p>
                  )}
                  <div className="text-xs text-zinc-400">
                    <span className="text-zinc-500 uppercase tracking-wide">Sources:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.sources.map((s) => (
                        <span key={s} className="bg-zinc-700/50 text-zinc-300 px-2 py-0.5 rounded text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-zinc-500 text-sm">
          No results for "{search}"
        </div>
      )}

      {/* Full Table */}
      <details className="text-sm">
        <summary className="cursor-pointer hover:text-zinc-300 text-xs uppercase tracking-wide font-medium text-zinc-400">View complete requirements table</summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-2 px-2 text-zinc-400 font-medium">Nutrient</th>
                <th className="text-left py-2 px-2 text-zinc-400 font-medium">Men</th>
                <th className="text-left py-2 px-2 text-zinc-400 font-medium">Women</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item) => (
                <tr key={item.name} className="border-b border-zinc-800">
                  <td className="py-1.5 px-2 text-zinc-300">{item.name}</td>
                  <td className="py-1.5 px-2 text-zinc-400 font-mono">{item.men}</td>
                  <td className="py-1.5 px-2 text-zinc-400 font-mono">{item.women}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {tab === "minerals" && (
            <p className="text-[10px] text-zinc-500 mt-2">* Women's iron requirement is same as men's after menopause</p>
          )}
        </div>
      </details>
    </div>
  );
}
