// All nutrition data sourced from darebeets.com

export const vitamins = [
  {
    name: "B1 (Thiamine)",
    role: "Supports the nervous system and metabolism",
    men: "1.0 mg",
    women: "0.8 mg",
    sources: ["Oats", "Wheat", "Rice", "Black beans", "Navy beans", "Lentils", "Peas", "Corn", "Pine nuts", "Pistachios", "Flax seeds", "Sunflower seeds", "Sesame seeds & tahini", "Nutritional yeast"],
  },
  {
    name: "B2 (Riboflavin)",
    role: "Essential for energy production",
    men: "1.3 mg",
    women: "1.1 mg",
    sources: ["Quinoa", "Rice", "Kidney beans", "Broccoli", "Cauliflower", "Avocado", "Apples", "Mushrooms", "Almonds", "Sunflower seeds", "Nutritional yeast"],
  },
  {
    name: "B3 (Niacin)",
    role: "Aids energy production and promotes healthy skin",
    men: "17 mg",
    women: "13 mg",
    sources: ["Quinoa", "Rice", "Whole wheat pasta", "Corn", "Squash", "Avocado", "Peanuts", "Chia seeds", "Sesame seeds & tahini", "Ginger", "Nutritional yeast"],
  },
  {
    name: "B5 (Pantothenic Acid)",
    role: "Supports energy production, red blood cell formation, and hormonal balance",
    men: "5 mg",
    women: "5 mg",
    sources: ["Potatoes", "Sweet potatoes", "Oats", "Lentils", "Squash", "Corn", "Avocado", "Mushrooms", "Oranges", "Pecans", "Sunflower seeds", "Nutritional yeast"],
  },
  {
    name: "B6 (Pyridoxine)",
    role: "Important for brain health, nervous system regulation, and immune support",
    men: "1.4 mg",
    women: "1.2 mg",
    sources: ["Quinoa", "Potatoes", "Sweet potatoes", "Peas", "Chickpeas", "Kale", "Spinach", "Bananas", "Oranges", "Pistachios", "Hazelnuts", "Sesame seeds & tahini", "Nutritional yeast"],
  },
  {
    name: "B12 (Cobalamin)",
    role: "Essential for nerve function, red blood cell formation, and metabolism",
    men: "50 mcg/day or 2,000 mcg/week",
    women: "50 mcg/day or 2,000 mcg/week",
    sources: ["Fortified plant milk", "Nutritional yeast (check packaging)", "Supplements required"],
    supplement: true,
  },
  {
    name: "Folate",
    role: "Supports cell growth and nerve function",
    men: "400 mcg",
    women: "400 mcg",
    sources: ["Soy", "Beans", "Spinach", "Kale", "White cabbage", "Broccoli", "Peanuts", "Nutritional yeast"],
  },
  {
    name: "Vitamin A (Beta-Carotene)",
    role: "Maintains healthy teeth, bones, skin, and vision",
    men: "0.7 mg",
    women: "0.6 mg",
    sources: ["Carrots", "Sweet potatoes", "Squash", "Pumpkin", "Mango", "Oranges", "Peaches", "Apricots", "Broccoli", "Kale", "Spinach"],
    tip: "Look for orange-colored fruits and vegetables and dark leafy greens",
  },
  {
    name: "Vitamin C",
    role: "Aids healing, collagen production, and immune support",
    men: "40 mg",
    women: "40 mg",
    sources: ["Red bell peppers", "Kiwi", "Oranges", "Mango", "Broccoli", "Strawberries", "Blueberries", "Pineapple", "Tomatoes", "Cauliflower"],
  },
  {
    name: "Vitamin E",
    role: "Supports immune function and skin health",
    men: "13 mg",
    women: "11 mg",
    sources: ["Wheat", "Avocado", "Red bell pepper", "Squash", "Kiwi", "Mango", "Almonds", "Peanuts", "Sunflower seeds"],
  },
  {
    name: "Vitamin K",
    role: "Essential for bone strength and blood clotting",
    men: "1 mcg per 1 kg body weight/day",
    women: "1 mcg per 1 kg body weight/day",
    sources: ["Tempeh", "Green beans", "Peas", "Cabbage", "Broccoli", "Cauliflower", "Spinach", "Kale", "Blueberries", "Figs"],
  },
  {
    name: "Vitamin D",
    role: "Supports bone health, reduces inflammation, and aids immune function",
    men: "10 mcg or 10 min sun/day",
    women: "10 mcg or 10 min sun/day",
    sources: ["Mushrooms (small amounts)", "Sunlight (primary source)"],
    supplement: true,
  },
];

export const minerals = [
  {
    name: "Calcium",
    role: "Strengthens bones and teeth, supports hormone regulation, and heart health",
    men: "700 mg",
    women: "700 mg",
    sources: ["Oats", "Tofu", "Broccoli", "Kale", "Dried figs", "Almonds", "Chia seeds", "Sesame seeds & tahini"],
  },
  {
    name: "Copper",
    role: "Aids connective tissue formation, melanin production, and iron transport",
    men: "1.2 mg",
    women: "1.2 mg",
    sources: ["Whole grains", "Oats", "Lentils", "Green beans", "Kiwi", "Peanuts", "Cashews"],
  },
  {
    name: "Iron",
    role: "Essential for oxygen transport, energy production, and cognitive function",
    men: "8.7 mg",
    women: "14.8 mg*",
    sources: ["Beans", "Lentils", "Oats", "Tempeh", "Apricots", "Dried figs", "Pumpkin seeds"],
    tip: "Pair with vitamin C-rich foods for better absorption",
  },
  {
    name: "Magnesium",
    role: "Supports nerve and muscle function, immune health, and blood sugar control",
    men: "300 mg",
    women: "270 mg",
    sources: ["Whole grains", "Oats", "Quinoa", "Tofu", "Peanuts", "Pumpkin seeds", "Sunflower seeds", "Tahini"],
  },
  {
    name: "Manganese",
    role: "Supports bone health, metabolism, and brain function",
    men: "3 mg",
    women: "3 mg",
    sources: ["Tofu", "Rice", "Quinoa", "Chia seeds", "Hazelnuts", "Peanuts", "Walnuts", "Blueberries", "Raspberries", "Strawberries"],
  },
  {
    name: "Phosphorus",
    role: "Aids metabolism, bone health, and cell repair",
    men: "550 mg",
    women: "550 mg",
    sources: ["Peanuts", "Peanut butter", "Almonds", "Cashews", "Pecans", "Hazelnuts", "Quinoa", "Pumpkin seeds", "Oats", "Lentils", "Tempeh"],
  },
  {
    name: "Potassium",
    role: "Regulates nerve and muscle function, waste removal, and blood pressure",
    men: "3500 mg",
    women: "3500 mg",
    sources: ["Potatoes", "Sweet potatoes", "Apricots", "Avocado", "Dried figs", "Squash", "Tofu", "Broccoli", "Bananas"],
  },
  {
    name: "Selenium",
    role: "Supports metabolism, thyroid function, and protects against cell damage",
    men: "75 mcg",
    women: "60 mcg",
    sources: ["Brazil nuts", "Lentils", "Tofu", "Mushrooms", "Chia seeds", "Sunflower seeds"],
  },
  {
    name: "Zinc",
    role: "Essential for immune function, wound healing, and metabolism",
    men: "9.5 mg",
    women: "7.0 mg",
    sources: ["Tempeh", "Tofu", "Quinoa", "Wheat", "Lentils", "Cashews", "Tahini", "Sesame seeds"],
  },
  {
    name: "Iodine",
    role: "Crucial for thyroid function, which regulates energy production",
    men: "Eat seaweed/nori once a week",
    women: "Eat seaweed/nori once a week",
    sources: ["Seaweed (nori, wakame, kombu)"],
    tip: "Limit seaweed consumption to once a week",
  },
];

export const lipids = [
  {
    name: "Omega-3",
    men: "1.6 g",
    women: "1.1 g",
    sources: ["Flaxseeds", "Chia seeds", "Walnuts", "Hemp seeds", "Algae-based supplements"],
  },
  {
    name: "Omega-6",
    men: "17 g",
    women: "12 g",
    sources: ["Peanuts", "Cashews", "Almonds", "Sunflower seeds", "Hemp seeds"],
  },
];

export interface Supplement {
  name: string;
  category: "mandatory" | "additional";
  why: string;
  dosage: string;
  bestForm?: string;
  foodSources: string[];
  timing?: string;
}

export const supplements: Supplement[] = [
  {
    name: "Vitamin B12",
    category: "mandatory",
    why: "Supports nerve function, red blood cell production, and DNA synthesis",
    dosage: "1000 mcg twice a week or 50 mcg daily (cyanocobalamin)",
    foodSources: ["Fortified plant milk", "Nutritional yeast"],
  },
  {
    name: "Vitamin D",
    category: "mandatory",
    why: "Supports bone health, immune function, and calcium absorption",
    dosage: "2000 IU (50 mcg) daily, especially in winter",
    foodSources: ["Sunlight (10 min daily)", "Fortified foods", "Mushrooms"],
    timing: "With a fat-containing meal for better absorption",
  },
  {
    name: "Omega-3 (DHA & EPA)",
    category: "additional",
    why: "Supports brain, heart, and joint health",
    dosage: "250-500 mg DHA/EPA daily",
    bestForm: "Algae-based supplements",
    foodSources: ["Flaxseeds", "Chia seeds", "Walnuts", "Hemp seeds"],
  },
  {
    name: "Iron",
    category: "additional",
    why: "Supports energy levels and oxygen transport",
    dosage: "14-18 mg daily (higher if menstruating)",
    bestForm: "Ferrous bisglycinate",
    foodSources: ["Lentils", "Beans", "Tofu", "Quinoa", "Dark leafy greens", "Pumpkin seeds"],
  },
  {
    name: "Calcium",
    category: "additional",
    why: "Supports bone health, muscles, and nerves",
    dosage: "700-1000 mg daily",
    bestForm: "Calcium citrate or carbonate",
    foodSources: ["Fortified plant milk", "Tofu", "Almonds", "Tahini", "Leafy greens"],
  },
  {
    name: "Zinc",
    category: "additional",
    why: "Boosts immunity and skin health; balance with copper intake",
    dosage: "7-12 mg daily",
    bestForm: "Zinc picolinate or gluconate",
    foodSources: ["Pumpkin seeds", "Lentils", "Chickpeas", "Tofu", "Cashews", "Quinoa"],
    timing: "Evening, away from high-copper foods and iron supplements",
  },
  {
    name: "Iodine",
    category: "additional",
    why: "Essential for thyroid health and metabolism",
    dosage: "150 mcg daily",
    bestForm: "Kelp or iodine-fortified salt",
    foodSources: ["Seaweed (nori, wakame, kombu)"],
  },
  {
    name: "Selenium",
    category: "additional",
    why: "Antioxidant that supports thyroid health",
    dosage: "55-70 mcg daily",
    bestForm: "Brazil nuts (5g/day is enough)",
    foodSources: ["Brazil nuts", "Whole grains", "Tofu", "Sunflower seeds"],
  },
  {
    name: "Magnesium",
    category: "additional",
    why: "Supports muscles, nerves, and energy",
    dosage: "270-400 mg daily",
    bestForm: "Magnesium glycinate or citrate",
    foodSources: ["Nuts", "Seeds", "Whole grains", "Dark leafy greens", "Bananas"],
  },
];

export const proteinPowders = [
  {
    name: "Soy Protein",
    benefits: "Complete protein with all essential amino acids, high bioavailability",
    bestFor: ["Muscle building", "Recovery"],
  },
  {
    name: "Pea Protein",
    benefits: "High in BCAAs, particularly leucine; digests well",
    bestFor: ["Post-workout recovery", "Muscle growth"],
  },
  {
    name: "Hemp Protein",
    benefits: "Rich in omega-3s and fiber; lower in lysine",
    bestFor: ["Digestion", "Combined with other proteins"],
  },
  {
    name: "Rice Protein",
    benefits: "High in methionine but lower in lysine",
    bestFor: ["Combined with pea protein for complete profile"],
  },
  {
    name: "Almond Protein",
    benefits: "High in vitamin E and magnesium",
    bestFor: ["Muscle recovery", "Bone health"],
  },
  {
    name: "Pumpkin Seed Protein",
    benefits: "Rich in iron, zinc, and magnesium",
    bestFor: ["Energy production", "Immune support"],
  },
  {
    name: "Sunflower Seed Protein",
    benefits: "Contains B vitamins and antioxidants",
    bestFor: ["Overall health", "Metabolism"],
  },
  {
    name: "Blended Proteins",
    benefits: "Combines multiple sources for complete amino acid profile",
    bestFor: ["Optimal absorption", "Complete nutrition"],
  },
];

export const bloodTests = [
  "Vitamin B12 (serum B12 & methylmalonic acid)",
  "Vitamin D (25-hydroxyvitamin D)",
  "Iron & Ferritin",
  "Zinc & Copper",
  "Omega-3 Index (DHA & EPA)",
  "Iodine & Thyroid Panel",
  "Calcium & Magnesium",
];
