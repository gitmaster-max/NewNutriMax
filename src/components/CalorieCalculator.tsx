import { useState, useEffect } from "react";

interface CalcState {
  weight: string;
  unit: "kg" | "lb";
  goal: "maintain" | "lose" | "gain";
  proteinPct: number;
  fatPct: number;
}

const defaultState: CalcState = {
  weight: "",
  unit: "kg",
  goal: "maintain",
  proteinPct: 25,
  fatPct: 25,
};

function loadState(): CalcState {
  try {
    const saved = localStorage.getItem("nutri-calc");
    if (saved) return JSON.parse(saved);
  } catch {}
  return defaultState;
}

export default function CalorieCalculator() {
  const [state, setState] = useState<CalcState>(loadState);
  const { weight, unit, goal, proteinPct, fatPct } = state;

  useEffect(() => {
    localStorage.setItem("nutri-calc", JSON.stringify(state));
  }, [state]);

  const weightNum = parseFloat(weight) || 0;
  const weightKg = unit === "lb" ? weightNum * 0.4536 : weightNum;

  // Maintenance: weight(kg) × 40
  const maintenance = Math.round(weightKg * 40);
  let calories = maintenance;
  if (goal === "lose") calories = Math.round(maintenance * 0.9);
  if (goal === "gain") calories = Math.round(maintenance * 1.1);

  const proteinCal = Math.round(calories * (proteinPct / 100));
  const fatCal = Math.round(calories * (fatPct / 100));
  const carbCal = calories - proteinCal - fatCal;

  const proteinG = Math.round(proteinCal / 4);
  const fatG = Math.round(fatCal / 9);
  const carbG = Math.round(carbCal / 4);

  const carbPct = 100 - proteinPct - fatPct;

  // Protein targets by activity
  const sedentaryProtein = Math.round(weightKg * 1);
  const activeProteinMin = Math.round(weightKg * 1.2);
  const activeProteinMax = Math.round(weightKg * 2.0);
  const athleteProteinMin = Math.round(weightKg * 1.6);
  const athleteProteinMax = Math.round(weightKg * 2.2);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-zinc-100 mb-1">Calorie & Macro Calculator</h2>
        <p className="text-sm text-zinc-400">Estimate your daily calorie budget and macro split. Adjust percentages to match your goals.</p>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5">Body Weight</label>
          <div className="flex">
            <input
              type="number"
              value={weight}
              onChange={(e) => setState({ ...state, weight: e.target.value })}
              placeholder="e.g. 70"
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-l-md px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-emerald-600"
            />
            <select
              value={unit}
              onChange={(e) => setState({ ...state, unit: e.target.value as "kg" | "lb" })}
              className="bg-zinc-700 border border-zinc-700 border-l-0 rounded-r-md px-2 py-2 text-sm text-zinc-200"
            >
              <option value="kg">kg</option>
              <option value="lb">lb</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5">Goal</label>
          <select
            value={goal}
            onChange={(e) => setState({ ...state, goal: e.target.value as CalcState["goal"] })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-emerald-600"
          >
            <option value="maintain">Maintain Weight</option>
            <option value="lose">Fat Loss (−10%)</option>
            <option value="gain">Muscle Gain (+10%)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5">Activity Level</label>
          <div className="text-sm text-zinc-300 bg-zinc-800/50 border border-zinc-700/50 rounded-md px-3 py-2">
            Formula: {unit === "kg" ? `${weight || "—"} kg × 40` : `${weight || "—"} lb × 18`}
          </div>
        </div>
      </div>

      {/* Results */}
      {weightNum > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
              <div className="text-xs text-zinc-400 uppercase tracking-wide">Maintenance</div>
              <div className="text-2xl font-bold text-zinc-100 mt-1">{maintenance.toLocaleString()}</div>
              <div className="text-xs text-zinc-500">kcal/day</div>
            </div>
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
              <div className="text-xs text-zinc-400 uppercase tracking-wide">Target</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">{calories.toLocaleString()}</div>
              <div className="text-xs text-zinc-500">kcal/day</div>
            </div>
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
              <div className="text-xs text-zinc-400 uppercase tracking-wide">Protein</div>
              <div className="text-2xl font-bold text-blue-400 mt-1">{proteinG}g</div>
              <div className="text-xs text-zinc-500">{proteinPct}% · {proteinCal} kcal</div>
            </div>
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
              <div className="text-xs text-zinc-400 uppercase tracking-wide">Fat / Carbs</div>
              <div className="text-2xl font-bold text-amber-400 mt-1">{fatG}g <span className="text-zinc-500 text-lg">/</span> <span className="text-orange-400">{carbG}g</span></div>
              <div className="text-xs text-zinc-500">{fatPct}% / {carbPct}%</div>
            </div>
          </div>

          {/* Macro Split Sliders */}
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 space-y-4">
            <div className="text-sm font-medium text-zinc-300">Macro Split Adjustment</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-blue-400">Protein</span>
                  <span className="text-zinc-400">{proteinPct}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={40}
                  value={proteinPct}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    if (v + fatPct <= 90) setState({ ...state, proteinPct: v });
                  }}
                  className="w-full accent-blue-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-amber-400">Fat</span>
                  <span className="text-zinc-400">{fatPct}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={40}
                  value={fatPct}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    if (v + proteinPct <= 90) setState({ ...state, fatPct: v });
                  }}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>
            <div className="text-xs text-zinc-500">
              Carbs automatically fill remaining: <span className="text-orange-400 font-medium">{carbPct}%</span> ({carbG}g)
            </div>
          </div>

          {/* Protein Targets */}
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
            <div className="text-sm font-medium text-zinc-300 mb-3">Daily Protein Targets (for {weightNum} {unit})</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex justify-between bg-zinc-800 rounded px-3 py-2">
                <span className="text-zinc-400">Sedentary</span>
                <span className="text-zinc-200 font-mono">{sedentaryProtein}g</span>
              </div>
              <div className="flex justify-between bg-zinc-800 rounded px-3 py-2">
                <span className="text-zinc-400">Active</span>
                <span className="text-zinc-200 font-mono">{activeProteinMin}–{activeProteinMax}g</span>
              </div>
              <div className="flex justify-between bg-zinc-800 rounded px-3 py-2">
                <span className="text-zinc-400">Athlete</span>
                <span className="text-zinc-200 font-mono">{athleteProteinMin}–{athleteProteinMax}g</span>
              </div>
            </div>
          </div>
        </>
      )}

      {weightNum === 0 && (
        <div className="text-center py-12 text-zinc-500 text-sm">
          Enter your body weight to calculate your daily calorie budget.
        </div>
      )}

      {/* Formula Reference */}
      <details className="text-sm text-zinc-400">
        <summary className="cursor-pointer hover:text-zinc-300 text-xs uppercase tracking-wide font-medium">How this is calculated</summary>
        <div className="mt-3 space-y-2 text-xs leading-relaxed bg-zinc-800/30 rounded-lg p-3">
          <p><strong className="text-zinc-300">Maintenance calories:</strong> Weight (kg) × 40, or Weight (lb) × 18</p>
          <p><strong className="text-zinc-300">Fat loss:</strong> Maintenance − 10%</p>
          <p><strong className="text-zinc-300">Muscle gain:</strong> Maintenance + 10%</p>
          <p><strong className="text-zinc-300">Calories per gram:</strong> Protein = 4 kcal, Fat = 9 kcal, Carbs = 4 kcal</p>
          <p className="text-zinc-500 italic">This formula provides a general estimate. Adjustments may be needed based on individual metabolism and activity levels.</p>
        </div>
      </details>
    </div>
  );
}
