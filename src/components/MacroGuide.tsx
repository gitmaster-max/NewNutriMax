export default function MacroGuide() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-zinc-100 mb-1">Macronutrients</h2>
        <p className="text-sm text-zinc-400">The three essential nutrients that provide energy: protein, fat, and carbohydrates. All calories come from these macros.</p>
      </div>

      {/* Quick Reference */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-blue-400">4</div>
          <div className="text-[10px] text-zinc-400 uppercase">kcal/g protein</div>
        </div>
        <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-amber-400">9</div>
          <div className="text-[10px] text-zinc-400 uppercase">kcal/g fat</div>
        </div>
        <div className="bg-orange-900/20 border border-orange-800/30 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-orange-400">4</div>
          <div className="text-[10px] text-zinc-400 uppercase">kcal/g carbs</div>
        </div>
      </div>

      {/* Protein */}
      <section className="bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-4 space-y-3">
        <h3 className="text-base font-bold text-blue-400">Protein</h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Foundation of muscle growth, repair, and body maintenance. Consists of amino acids — 9 are essential (body can't produce them). The body stores and combines amino acids as needed throughout the day, so you don't need all essential amino acids in one meal.
        </p>
        <div>
          <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Plant-based sources</div>
          <div className="flex flex-wrap gap-1">
            {["Tofu", "Tempeh", "Soy milk", "Seitan", "Beans", "Lentils", "Quinoa", "Buckwheat", "Oats", "Hemp seeds", "Nutritional yeast", "Spirulina"].map((s) => (
              <span key={s} className="bg-zinc-700/50 text-zinc-300 px-2 py-0.5 rounded text-xs">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Daily targets</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="bg-zinc-800 rounded p-2">
              <div className="text-zinc-500">Sedentary</div>
              <div className="text-zinc-200 font-mono">1g/kg (0.5g/lb)</div>
            </div>
            <div className="bg-zinc-800 rounded p-2">
              <div className="text-zinc-500">Active</div>
              <div className="text-zinc-200 font-mono">1.2–2.0g/kg</div>
            </div>
            <div className="bg-zinc-800 rounded p-2">
              <div className="text-zinc-500">Athlete</div>
              <div className="text-zinc-200 font-mono">1.6–2.2g/kg</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fat */}
      <section className="bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-4 space-y-3">
        <h3 className="text-base font-bold text-amber-400">Fat</h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Essential for hormone production, brain function, and absorption of fat-soluble vitamins (A, D, E, K). Provides slow, sustained energy release.
        </p>
        <div>
          <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Types</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span className="text-zinc-300"><strong>Unsaturated:</strong> olive oil, avocados, nuts, seeds, flax, chia</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span className="text-zinc-300"><strong>Omega-3:</strong> chia, flax, hemp, walnuts, seaweed</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span className="text-zinc-300"><strong>Omega-6:</strong> peanuts, cashews, almonds, sunflower seeds, hemp</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 shrink-0">⚠</span>
              <span className="text-zinc-300"><strong>Saturated (limit):</strong> coconut-based foods, animal products</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-zinc-400">
          <span className="text-zinc-500">Daily target:</span> <span className="text-zinc-200 font-medium">20–25% of daily calories</span>
        </div>
      </section>

      {/* Carbs */}
      <section className="bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-4 space-y-3">
        <h3 className="text-base font-bold text-orange-400">Carbohydrates</h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          The body's primary and most efficient energy source. Breaks down into glucose, fueling brain function and physical performance. The brain relies heavily on glucose for concentration, memory, and mental clarity.
        </p>
        <div>
          <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Types</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span className="text-zinc-300"><strong>Simple (quick energy):</strong> fruit, syrups, honey, refined sugars</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span className="text-zinc-300"><strong>Starches (slow energy):</strong> rice, potatoes, legumes, whole grains</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span className="text-zinc-300"><strong>Fiber (digestion):</strong> vegetables, seeds, legumes</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-zinc-400">
          <span className="text-zinc-500">Daily target:</span> <span className="text-zinc-200 font-medium">Remaining calories after protein & fat (40–55%)</span>
        </div>
      </section>

      {/* Recommended Split */}
      <section className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-bold text-zinc-200">Recommended Macro Split</h3>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-blue-900/20 border border-blue-800/30 rounded p-2">
            <div className="text-blue-400 font-bold">20–30%</div>
            <div className="text-zinc-400">Protein</div>
          </div>
          <div className="bg-amber-900/20 border border-amber-800/30 rounded p-2">
            <div className="text-amber-400 font-bold">20–25%</div>
            <div className="text-zinc-400">Fat</div>
          </div>
          <div className="bg-orange-900/20 border border-orange-800/30 rounded p-2">
            <div className="text-orange-400 font-bold">40–55%</div>
            <div className="text-zinc-400">Carbs</div>
          </div>
        </div>
        <div className="text-xs text-zinc-400 bg-zinc-800/50 rounded p-2">
          <span className="text-zinc-500">Example (2400 kcal):</span>{" "}
          <span className="text-blue-400">150g protein</span> ·{" "}
          <span className="text-amber-400">67g fat</span> ·{" "}
          <span className="text-orange-400">300g carbs</span>
        </div>
        <p className="text-xs text-zinc-500 italic">Tracking isn't required — consistency matters more than perfection. Apps like Cronometer can help if you want to track.</p>
      </section>
    </div>
  );
}
