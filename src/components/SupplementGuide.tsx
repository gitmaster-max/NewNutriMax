import { useState, useEffect } from "react";
import { supplements, bloodTests } from "../data/nutrition";

function loadChecklist(): Record<string, boolean> {
  try {
    const saved = localStorage.getItem("nutri-supplements");
    if (saved) return JSON.parse(saved);
  } catch {}
  return {};
}

export default function SupplementGuide() {
  const [checklist, setChecklist] = useState<Record<string, boolean>>(loadChecklist);
  const [filter, setFilter] = useState<"all" | "mandatory" | "additional">("all");

  useEffect(() => {
    localStorage.setItem("nutri-supplements", JSON.stringify(checklist));
  }, [checklist]);

  const toggle = (name: string) => {
    setChecklist((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const filtered = supplements.filter((s) => filter === "all" || s.category === filter);
  const mandatoryCount = supplements.filter((s) => s.category === "mandatory").length;
  const mandatoryChecked = supplements.filter((s) => s.category === "mandatory" && checklist[s.name]).length;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-zinc-100 mb-1">Supplement Guide</h2>
        <p className="text-sm text-zinc-400">Track which supplements you're taking. B12 is mandatory for everyone on a plant-based diet. Vitamin D if you get little sunlight.</p>
      </div>

      {/* Progress */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-zinc-300">Mandatory supplements</span>
          <span className="text-sm font-mono text-emerald-400">{mandatoryChecked}/{mandatoryCount}</span>
        </div>
        <div className="w-full bg-zinc-700 rounded-full h-2">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(mandatoryChecked / mandatoryCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-1 bg-zinc-800 rounded-lg p-1">
        {(["all", "mandatory", "additional"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              filter === f ? "bg-zinc-700 text-zinc-100" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Supplement Cards */}
      <div className="space-y-3">
        {filtered.map((supp) => {
          const checked = !!checklist[supp.name];
          return (
            <div
              key={supp.name}
              className={`bg-zinc-800/60 border rounded-lg p-4 transition-colors ${
                checked ? "border-emerald-700/50 bg-emerald-900/10" : "border-zinc-700/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggle(supp.name)}
                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    checked
                      ? "bg-emerald-600 border-emerald-600"
                      : "border-zinc-600 hover:border-zinc-400"
                  }`}
                >
                  {checked && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`text-sm font-bold ${checked ? "text-emerald-300" : "text-zinc-100"}`}>{supp.name}</h3>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      supp.category === "mandatory" ? "bg-red-900/50 text-red-300" : "bg-zinc-700 text-zinc-400"
                    }`}>
                      {supp.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">{supp.why}</p>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
                    <div>
                      <span className="text-zinc-500">Dosage: </span>
                      <span className="text-zinc-300">{supp.dosage}</span>
                    </div>
                    {supp.bestForm && (
                      <div>
                        <span className="text-zinc-500">Best form: </span>
                        <span className="text-zinc-300">{supp.bestForm}</span>
                      </div>
                    )}
                    {supp.timing && (
                      <div>
                        <span className="text-zinc-500">Timing: </span>
                        <span className="text-zinc-300">{supp.timing}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wide">Food sources:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {supp.foodSources.map((s) => (
                        <span key={s} className="bg-zinc-700/50 text-zinc-300 px-1.5 py-0.5 rounded text-[11px]">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Blood Tests */}
      <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
        <h3 className="text-sm font-bold text-zinc-200 mb-2">Recommended Blood Tests</h3>
        <p className="text-xs text-zinc-400 mb-3">Get tested every 6–12 months. Key tests to request:</p>
        <ul className="space-y-1">
          {bloodTests.map((test) => (
            <li key={test} className="text-xs text-zinc-300 flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">•</span>
              {test}
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-4 text-xs text-zinc-400 space-y-1.5">
        <p>✓ If healthy and eating a well-planned plant-based diet, you only need <strong className="text-zinc-300">B12</strong> (and <strong className="text-zinc-300">Vitamin D</strong> if you don't get enough sun).</p>
        <p>✓ If you don't feel your best, track your nutrients for a week and adjust accordingly.</p>
        <p>✓ Be careful with minerals — supplement only if bloodwork or tracking shows a need.</p>
        <p>✓ Always consult a healthcare professional before starting new supplements.</p>
      </div>
    </div>
  );
}
