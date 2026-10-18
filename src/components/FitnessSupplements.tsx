import { useState } from "react";
import { proteinPowders } from "../data/nutrition";

export default function FitnessSupplements() {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [level, setLevel] = useState<"sedentary" | "active" | "athlete">("active");
  const [creatineDose, setCreatineDose] = useState<"standard" | "high">("standard");

  const weightNum = parseFloat(weight) || 0;
  const weightKg = unit === "lb" ? weightNum * 0.4536 : weightNum;

  const proteinRanges = {
    sedentary: { min: weightKg * 1, max: weightKg * 1 },
    active: { min: weightKg * 1.2, max: weightKg * 2.0 },
    athlete: { min: weightKg * 1.6, max: weightKg * 2.2 },
  };

  const range = proteinRanges[level];
  const proteinMin = Math.round(range.min);
  const proteinMax = Math.round(range.max);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-zinc-100 mb-1">Fitness Supplements</h2>
        <p className="text-sm text-zinc-400">Two evidence-based supplements for lean muscle building and maintenance: protein powders and creatine.</p>
      </div>

      {/* Protein Calculator */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-bold text-zinc-200">Protein Requirement Calculator</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Weight</label>
            <div className="flex">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-l-md px-3 py-1.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-600"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value as "kg" | "lb")}
                className="bg-zinc-700 border border-zinc-700 border-l-0 rounded-r-md px-2 py-1.5 text-xs text-zinc-200"
              >
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Activity Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as typeof level)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-1.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-600"
            >
              <option value="sedentary">Sedentary (1g/kg)</option>
              <option value="active">Active (1.2–2.0g/kg)</option>
              <option value="athlete">Athlete (1.6–2.2g/kg)</option>
            </select>
          </div>
          {weightNum > 0 && (
            <div className="flex items-end">
              <div className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-1.5 w-full text-center">
                <div className="text-xs text-zinc-400">Daily Protein</div>
                <div className="text-lg font-bold text-blue-400 font-mono">
                  {proteinMin === proteinMax ? `${proteinMin}g` : `${proteinMin}–${proteinMax}g`}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Protein Powders */}
      <div>
        <h3 className="text-sm font-bold text-zinc-200 mb-3">Protein Powder Comparison</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {proteinPowders.map((p) => (
            <div key={p.name} className="bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-3">
              <div className="text-sm font-medium text-zinc-100">{p.name}</div>
              <p className="text-xs text-zinc-400 mt-1">{p.benefits}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {p.bestFor.map((b) => (
                  <span key={b} className="text-[10px] bg-emerald-900/30 text-emerald-300 px-1.5 py-0.5 rounded">{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Use */}
      <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-bold text-zinc-200">How to Use Protein Powder</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="bg-zinc-800 rounded p-2">
            <span className="text-zinc-500">Shakes:</span>
            <span className="text-zinc-300 ml-1">Blend with plant milk and/or water</span>
          </div>
          <div className="bg-zinc-800 rounded p-2">
            <span className="text-zinc-500">Oatmeal:</span>
            <span className="text-zinc-300 ml-1">Stir into breakfast bowls</span>
          </div>
          <div className="bg-zinc-800 rounded p-2">
            <span className="text-zinc-500">Baking:</span>
            <span className="text-zinc-300 ml-1">Add to muffins, pancakes, protein bars</span>
          </div>
          <div className="bg-zinc-800 rounded p-2">
            <span className="text-zinc-500">Yogurt:</span>
            <span className="text-zinc-300 ml-1">Mix with plant-based yogurt</span>
          </div>
        </div>
        <div className="text-xs text-zinc-400 space-y-1 pt-2 border-t border-zinc-700/50">
          <p>• Take within 30–60 min post-workout for recovery</p>
          <p>• Pair with vitamin C to enhance iron absorption</p>
          <p>• Distribute throughout the day — max 30g per meal</p>
          <p>• Stay hydrated — protein metabolism requires water</p>
        </div>
      </div>

      {/* Creatine */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-bold text-zinc-200">Creatine</h3>
        <p className="text-xs text-zinc-400">Naturally occurring compound stored in muscles. Helps with energy production during high-intensity workouts. One of the most well-researched supplements.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Dose</label>
            <select
              value={creatineDose}
              onChange={(e) => setCreatineDose(e.target.value as typeof creatineDose)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-1.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-600"
            >
              <option value="standard">Standard (3–5g/day)</option>
              <option value="high">Heavy athlete (5–10g/day)</option>
            </select>
          </div>
          <div className="bg-zinc-900 border border-zinc-700 rounded-md p-3 text-center">
            <div className="text-xs text-zinc-400">Daily Dose</div>
            <div className="text-xl font-bold text-emerald-400 font-mono">
              {creatineDose === "standard" ? "3–5g" : "5–10g"}
            </div>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="text-zinc-300 font-medium">Benefits:</div>
          <ul className="space-y-1 text-zinc-400">
            <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Improved strength and power during resistance training</li>
            <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Increased muscle mass over time</li>
            <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Boosted endurance, reduced fatigue</li>
            <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Cognitive benefits (memory, focus) — especially for vegans</li>
          </ul>
        </div>

        <div className="space-y-2 text-xs">
          <div className="text-zinc-300 font-medium">Timing:</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-zinc-900 rounded p-2">
              <span className="text-zinc-500">Post-workout</span>
              <p className="text-zinc-300 mt-0.5">Best with a meal for uptake</p>
            </div>
            <div className="bg-zinc-900 rounded p-2">
              <span className="text-zinc-500">Any time</span>
              <p className="text-zinc-300 mt-0.5">Consistency matters most</p>
            </div>
            <div className="bg-zinc-900 rounded p-2">
              <span className="text-zinc-500">With carbs</span>
              <p className="text-zinc-300 mt-0.5">Insulin increases muscle uptake</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="text-zinc-300 font-medium">What to expect:</div>
          <ul className="space-y-1 text-zinc-400">
            <li>• Initial weight gain (1–2 kg) from increased muscle water content</li>
            <li>• Improved strength & endurance within a few weeks</li>
            <li>• Better recovery, reduced muscle soreness</li>
          </ul>
        </div>
      </div>

      {/* Myths */}
      <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-4">
        <h3 className="text-sm font-bold text-zinc-200 mb-2">Common Myths vs Facts</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-2">
            <span className="text-red-400 font-bold shrink-0">MYTH:</span>
            <span className="text-zinc-400">Creatine is a steroid</span>
          </div>
          <div className="flex items-start gap-2 ml-8">
            <span className="text-emerald-400 font-bold shrink-0">FACT:</span>
            <span className="text-zinc-300">It's a naturally occurring compound found in legumes and seeds</span>
          </div>
          <div className="flex items-start gap-2 mt-2">
            <span className="text-red-400 font-bold shrink-0">MYTH:</span>
            <span className="text-zinc-400">Creatine causes kidney damage</span>
          </div>
          <div className="flex items-start gap-2 ml-8">
            <span className="text-emerald-400 font-bold shrink-0">FACT:</span>
            <span className="text-zinc-300">No evidence of kidney damage in healthy individuals</span>
          </div>
          <div className="flex items-start gap-2 mt-2">
            <span className="text-red-400 font-bold shrink-0">MYTH:</span>
            <span className="text-zinc-400">You need to cycle creatine</span>
          </div>
          <div className="flex items-start gap-2 ml-8">
            <span className="text-emerald-400 font-bold shrink-0">FACT:</span>
            <span className="text-zinc-300">Long-term use is safe and beneficial</span>
          </div>
        </div>
      </div>
    </div>
  );
}
