/**
 * Product Data for Functional Medicine E-commerce Store
 * This file contains the data for all products in the store.
 */

// Initialize product data array
const products = [
    {
        id: 1,
        name: "Vitamin D3 + K2 Complex",
        category: "vitamins",
        price: 29.99,
        regularPrice: 34.99,
        rating: 4.8,
        reviewCount: 156,
        image: "https://via.placeholder.com/300?text=Vitamin+D3+K2",
        description: "High-potency Vitamin D3 (5000 IU) with K2 (MK-7) for optimal calcium absorption and bone health. Supports immune function and cardiovascular health.",
        features: [
            "Supports bone health and calcium absorption",
            "Enhances immune system function",
            "Promotes heart health and proper blood clotting",
            "60 easy-to-swallow softgels",
            "Non-GMO, gluten-free formula"
        ],
        dosage: "Take 1 softgel daily with food or as directed by your healthcare professional.",
        ingredients: "Vitamin D3 (as Cholecalciferol) 5000 IU, Vitamin K2 (as MK-7) 100mcg, Organic Olive Oil, Softgel (Gelatin, Glycerin, Purified Water), MCT Oil.",
        stock: 45,
        isNew: false,
        isBestseller: true,
        isFeatured: true,
        discount: 14
    },
    {
        id: 2,
        name: "Advanced Probiotic 50 Billion CFU",
        category: "probiotics",
        price: 39.99,
        regularPrice: 45.99,
        rating: 4.9,
        reviewCount: 203,
        image: "https://via.placeholder.com/300?text=Probiotic+50B",
        description: "High-potency probiotic with 50 billion CFU and 15 diverse strains to support gut health, immune function, and nutrient absorption. Delayed-release capsules for optimal delivery.",
        features: [
            "50 billion CFU per capsule",
            "15 clinically studied probiotic strains",
            "Supports digestive and immune health",
            "Delayed-release technology",
            "30 vegetarian capsules"
        ],
        dosage: "Take 1 capsule daily, preferably on an empty stomach or as directed by your healthcare professional.",
        ingredients: "Proprietary Probiotic Blend (50 Billion CFU): Lactobacillus acidophilus, Bifidobacterium lactis, Lactobacillus plantarum, Lactobacillus paracasei, Lactobacillus casei, Lactobacillus rhamnosus, Bifidobacterium breve, Bifidobacterium longum, Lactobacillus bulgaricus, Streptococcus thermophilus, and 5 other beneficial strains. Vegetable capsule, Microcrystalline cellulose, Inulin (FOS).",
        stock: 32,
        isNew: false,
        isBestseller: true,
        isFeatured: true,
        discount: 13
    },
    {
        id: 3,
        name: "Turmeric Curcumin with BioPerine",
        category: "herbs",
        price: 24.99,
        regularPrice: 29.99,
        rating: 4.7,
        reviewCount: 189,
        image: "https://via.placeholder.com/300?text=Turmeric+Curcumin",
        description: "High-potency turmeric extract with 95% curcuminoids and BioPerine (black pepper extract) for enhanced absorption. Supports joint health, inflammation response, and antioxidant protection.",
        features: [
            "1500mg of Turmeric Curcumin with 95% Curcuminoids",
            "Enhanced with BioPerine for better absorption",
            "Supports healthy inflammation response",
            "Promotes joint health and mobility",
            "90 vegetarian capsules"
        ],
        dosage: "Take 2 capsules daily with food and water or as directed by your healthcare professional.",
        ingredients: "Turmeric Root Extract (Curcuma longa) (standardized to 95% Curcuminoids), BioPerine® Black Pepper Extract (Piper nigrum) (standardized to 95% Piperine), Vegetable Cellulose (capsule), Rice Flour, Vegetable Magnesium Stearate.",
        stock: 60,
        isNew: false,
        isBestseller: true,
        isFeatured: false,
        discount: 17
    },
    {
        id: 4,
        name: "Omega-3 Fish Oil Triple Strength",
        category: "oils",
        price: 32.99,
        regularPrice: 39.99,
        rating: 4.8,
        reviewCount: 167,
        image: "https://via.placeholder.com/300?text=Omega+3+Fish+Oil",
        description: "Triple-strength fish oil providing 2400mg of EPA and DHA omega-3 fatty acids per serving. Molecularly distilled for purity and freshness. Supports heart, brain, and joint health.",
        features: [
            "2400mg of EPA and DHA Omega-3s per serving",
            "Molecularly distilled for maximum purity",
            "Enteric-coated to prevent fishy aftertaste",
            "Supports cardiovascular and cognitive health",
            "120 lemon-flavored softgels"
        ],
        dosage: "Take 2 softgels daily with food or as directed by your healthcare professional.",
        ingredients: "Fish Oil Concentrate (from anchovy, sardine, mackerel), Gelatin, Glycerin, Purified Water, Natural Lemon Flavor, Mixed Tocopherols (as preservative), Enteric Coating.",
        stock: 40,
        isNew: false,
        isBestseller: false,
        isFeatured: true,
        discount: 18
    },
    {
        id: 5,
        name: "Organic MCT Oil",
        category: "oils",
        price: 27.99,
        regularPrice: 32.99,
        rating: 4.6,
        reviewCount: 124,
        image: "https://via.placeholder.com/300?text=MCT+Oil",
        description: "100% pure organic MCT oil derived from coconuts. Contains C8 and C10 MCTs for quick energy, mental clarity, and metabolism support. Perfect for keto and paleo diets.",
        features: [
            "100% pure C8 and C10 MCTs",
            "USDA Certified Organic",
            "Supports ketone production and energy",
            "Non-GMO and hexane-free extraction",
            "16 oz BPA-free bottle"
        ],
        dosage: "Start with 1 teaspoon (5ml) daily and gradually increase to 1-3 tablespoons per day as tolerated. Can be added to coffee, smoothies, or salad dressings.",
        ingredients: "100% Organic Medium Chain Triglycerides Oil derived from Coconut Oil.",
        stock: 25,
        isNew: false,
        isBestseller: false,
        isFeatured: true,
        discount: 15
    },
    {
        id: 6,
        name: "Magnesium Glycinate Complex",
        category: "vitamins",
        price: 19.99,
        regularPrice: 24.99,
        rating: 4.7,
        reviewCount: 145,
        image: "https://via.placeholder.com/300?text=Magnesium+Glycinate",
        description: "Highly absorbable magnesium glycinate chelate with added magnesium malate for enhanced bioavailability. Supports muscle function, sleep quality, and stress management.",
        features: [
            "400mg of elemental magnesium per serving",
            "Enhanced bioavailability with glycinate form",
            "Gentle on the digestive system",
            "Supports muscle relaxation and sleep",
            "120 vegetarian capsules"
        ],
        dosage: "Take 2 capsules twice daily with food or as directed by your healthcare professional.",
        ingredients: "Magnesium (as Dimagnesium Malate and TRAACS® Magnesium Bisglycinate Chelate), Vegetable Cellulose (capsule), Microcrystalline Cellulose, Vegetable Stearate.",
        stock: 55,
        isNew: false,
        isBestseller: false,
        isFeatured: true,
        discount: 20
    },
    {
        id: 7,
        name: "Plant-Based Protein Complex",
        category: "proteins",
        price: 39.99,
        regularPrice: 49.99,
        rating: 4.5,
        reviewCount: 178,
        image: "https://via.placeholder.com/300?text=Plant+Protein",
        description: "Complete plant-based protein powder with all essential amino acids from organic pea, brown rice, and hemp proteins. Enriched with digestive enzymes for optimal absorption. Chocolate flavor.",
        features: [
            "25g of complete protein per serving",
            "Blend of pea, brown rice, and hemp proteins",
            "Added digestive enzymes for easy digestion",
            "No artificial sweeteners or flavors",
            "30 servings per container"
        ],
        dosage: "Mix 1 scoop (32g) with 8-10 oz of water, almond milk, or your favorite beverage. Shake well and enjoy.",
        ingredients: "Organic Protein Blend (Pea Protein, Brown Rice Protein, Hemp Protein), Organic Cocoa Powder, Organic Coconut Sugar, Natural Flavors, Xanthan Gum, Stevia Leaf Extract, Sea Salt, Digestive Enzyme Blend (Protease, Amylase, Lipase, Lactase, Cellulase).",
        stock: 20,
        isNew: true,
        isBestseller: false,
        isFeatured: false,
        discount: 20
    },
    {
        id: 8,
        name: "Ashwagandha KSM-66 Extract",
        category: "herbs",
        price: 21.99,
        regularPrice: 26.99,
        rating: 4.8,
        reviewCount: 212,
        image: "https://via.placeholder.com/300?text=Ashwagandha",
        description: "High-potency KSM-66 Ashwagandha root extract standardized to 5% withanolides. Clinically studied adaptogen that helps reduce stress, supports adrenal function, and promotes mental clarity.",
        features: [
            "600mg of KSM-66 Ashwagandha per serving",
            "Clinically studied for stress reduction",
            "Supports adrenal health and hormonal balance",
            "Promotes mental clarity and cognitive function",
            "90 vegetarian capsules"
        ],
        dosage: "Take 1 capsule twice daily with food or as directed by your healthcare professional.",
        ingredients: "KSM-66® Ashwagandha Extract (root) (Withania somnifera) (standardized to 5% withanolides), Organic Rice Flour, Vegetable Capsule (Hydroxypropyl Methylcellulose), Organic Rice Hull Concentrate.",
        stock: 38,
        isNew: false,
        isBestseller: true,
        isFeatured: false,
        discount: 19
    },
    {
        id: 9,
        name: "Liposomal Vitamin C",
        category: "vitamins",
        price: 29.99,
        regularPrice: 36.99,
        rating: 4.9,
        reviewCount: 147,
        image: "https://via.placeholder.com/300?text=Liposomal+Vitamin+C",
        description: "Advanced liposomal delivery system for maximum vitamin C absorption and bioavailability. Supports immune function, collagen production, and antioxidant protection.",
        features: [
            "1200mg of vitamin C per serving",
            "Liposomal technology for enhanced absorption",
            "Non-GMO sunflower lecithin liposomes",
            "Pleasant citrus flavor",
            "30 servings per bottle"
        ],
        dosage: "Take 1 tablespoon (15ml) daily, directly or mixed with water or juice.",
        ingredients: "Vitamin C (as Sodium Ascorbate), Phospholipid Complex (from Non-GMO Sunflower Lecithin), Purified Water, Natural Flavors, Potassium Sorbate (as preservative).",
        stock: 15,
        isNew: true,
        isBestseller: false,
        isFeatured: true,
        discount: 19
    },
    {
        id: 10,
        name: "Berberine HCl",
        category: "herbs",
        price: 34.99,
        regularPrice: 39.99,
        rating: 4.7,
        reviewCount: 132,
        image: "https://via.placeholder.com/300?text=Berberine",
        description: "Potent berberine HCl extract to support healthy glucose metabolism, cardiovascular health, and digestive function. Standardized for maximum effectiveness.",
        features: [
            "500mg of berberine HCl per capsule",
            "Supports glucose metabolism",
            "Promotes cardiovascular health",
            "Assists with digestive function",
            "60 vegetarian capsules"
        ],
        dosage: "Take 1 capsule three times daily with meals or as directed by your healthcare professional.",
        ingredients: "Berberine HCl (from Berberis aristata root extract), Vegetable Cellulose (capsule), Rice Flour, Vegetable Magnesium Stearate.",
        stock: 22,
        isNew: false,
        isBestseller: false,
        isFeatured: true,
        discount: 13
    },
    {
        id: 11,
        name: "Methylated B Complex",
        category: "vitamins",
        price: 25.99,
        regularPrice: 29.99,
        rating: 4.8,
        reviewCount: 178,
        image: "https://via.placeholder.com/300?text=B+Complex",
        description: "Complete B vitamin complex with active, methylated forms for optimal absorption and utilization. Includes methylfolate (5-MTHF) and methylcobalamin (B12) for those with MTHFR gene variations.",
        features: [
            "Contains all 8 B vitamins in their active forms",
            "Includes L-5-MTHF (folate) and methylcobalamin (B12)",
            "Supports energy production and brain function",
            "Ideal for those with MTHFR variations",
            "60 vegetarian capsules"
        ],
        dosage: "Take 1 capsule daily with food or as directed by your healthcare professional.",
        ingredients: "Vitamin B1 (as Thiamine HCl), Vitamin B2 (as Riboflavin-5-Phosphate), Vitamin B3 (as Niacinamide), Vitamin B5 (as d-Calcium Pantothenate), Vitamin B6 (as Pyridoxal-5-Phosphate), Folate (as L-5-Methyltetrahydrofolate Calcium), Vitamin B12 (as Methylcobalamin), Biotin, Vegetable Cellulose (capsule), Microcrystalline Cellulose, Vegetable Stearate.",
        stock: 42,
        isNew: false,
        isBestseller: true,
        isFeatured: false,
        discount: 13
    },
    {
        id: 12,
        name: "Organic Mushroom Complex",
        category: "herbs",
        price: 37.99,
        regularPrice: 44.99,
        rating: 4.6,
        reviewCount: 96,
        image: "https://via.placeholder.com/300?text=Mushroom+Complex",
        description: "Powerful blend of 7 organic medicinal mushrooms including Reishi, Lion's Mane, Cordyceps, and Chaga. Supports immune function, cognitive health, and athletic performance.",
        features: [
            "7 powerful medicinal mushrooms in one formula",
            "USDA Certified Organic",
            "Full-spectrum extract for maximum benefits",
            "Supports immune and cognitive health",
            "90 vegetarian capsules"
        ],
        dosage: "Take 3 capsules daily with or without food, or as directed by your healthcare professional.",
        ingredients: "Organic Mushroom Blend: Reishi (Ganoderma lucidum), Lion's Mane (Hericium erinaceus), Cordyceps (Cordyceps militaris), Chaga (Inonotus obliquus), Shiitake (Lentinula edodes), Maitake (Grifola frondosa), Turkey Tail (Trametes versicolor). Other ingredients: Vegetable Capsule (Hydroxypropyl Methylcellulose), Organic Brown Rice.",
        stock: 18,
        isNew: true,
        isBestseller: false,
        isFeatured: false,
        discount: 16
    },
    {
        id: 13,
        name: "Liquid Zinc Complex",
        category: "vitamins",
        price: 17.99,
        regularPrice: 21.99,
        rating: 4.5,
        reviewCount: 85,
        image: "https://via.placeholder.com/300?text=Liquid+Zinc",
        description: "Highly absorbable liquid zinc complex with zinc glycinate, citrate, and acetate. Supports immune function, skin health, and testosterone production in men.",
        features: [
            "15mg of ionic zinc per serving",
            "Great-tasting natural orange flavor",
            "Multiple forms of zinc for optimal absorption",
            "Convenient liquid form",
            "48 servings per bottle"
        ],
        dosage: "Take 1 teaspoon (5ml) daily with a meal or as directed by your healthcare professional.",
        ingredients: "Purified Water, Zinc (as Zinc Glycinate, Zinc Citrate, and Zinc Acetate), Natural Orange Flavor, Stevia Leaf Extract, Potassium Sorbate (as preservative), Citric Acid.",
        stock: 30,
        isNew: false,
        isBestseller: false,
        isFeatured: false,
        discount: 18
    },
    {
        id: 14,
        name: "NAC (N-Acetyl Cysteine)",
        category: "vitamins",
        price: 22.99,
        regularPrice: 27.99,
        rating: 4.7,
        reviewCount: 114,
        image: "https://via.placeholder.com/300?text=NAC",
        description: "Powerful antioxidant precursor to glutathione, the body's master antioxidant. Supports respiratory health, detoxification, and immune function.",
        features: [
            "600mg of NAC per capsule",
            "Promotes glutathione production",
            "Supports respiratory and liver health",
            "Assists with natural detoxification",
            "120 vegetarian capsules"
        ],
        dosage: "Take 1 capsule twice daily with food or as directed by your healthcare professional.",
        ingredients: "N-Acetyl-L-Cysteine (NAC), Vegetable Cellulose (capsule), Rice Flour, Vegetable Magnesium Stearate.",
        stock: 25,
        isNew: false,
        isBestseller: false,
        isFeatured: false,
        discount: 18
    },
    {
        id: 15,
        name: "Peppermint Essential Oil",
        category: "oils",
        price: 14.99,
        regularPrice: 17.99,
        rating: 4.9,
        reviewCount: 167,
        image: "https://via.placeholder.com/300?text=Peppermint+Oil",
        description: "100% pure, therapeutic-grade peppermint essential oil. Known for its cooling and invigorating properties. Supports healthy digestion, mental clarity, and respiratory function.",
        features: [
            "100% pure, steam-distilled peppermint oil",
            "No fillers, additives, or synthetic ingredients",
            "Therapeutic grade for aromatherapy use",
            "Promotes digestive comfort and mental alertness",
            "15ml amber glass bottle with dropper"
        ],
        dosage: "For aromatherapy, add 3-5 drops to a diffuser. For topical use, dilute with carrier oil. For dietary use, add 1-2 drops to water or tea.",
        ingredients: "100% Pure Mentha piperita (Peppermint) Essential Oil.",
        stock: 60,
        isNew: false,
        isBestseller: true,
        isFeatured: false,
        discount: 17
    },
    {
        id: 16,
        name: "Collagen Peptides Powder",
        category: "proteins",
        price: 34.99,
        regularPrice: 39.99,
        rating: 4.8,
        reviewCount: 203,
        image: "https://via.placeholder.com/300?text=Collagen+Peptides",
        description: "Hydrolyzed type I and III collagen peptides from grass-fed, pasture-raised sources. Supports skin elasticity, joint health, and gut function. Unflavored and dissolves easily.",
        features: [
            "10g of collagen per serving",
            "Types I & III collagen from grass-fed sources",
            "Unflavored and dissolves easily in beverages",
            "Supports skin, hair, nails, joints, and gut",
            "30 servings per container"
        ],
        dosage: "Mix 1 scoop (11g) with 8 oz of water, coffee, smoothie, or other beverage once daily.",
        ingredients: "Hydrolyzed Bovine Collagen Peptides (from grass-fed, pasture-raised sources).",
        stock: 32,
        isNew: false,
        isBestseller: true,
        isFeatured: false,
        discount: 13
    },
    {
        id: 17,
        name: "Quercetin with Bromelain",
        category: "vitamins",
        price: 24.99,
        regularPrice: 29.99,
        rating: 4.7,
        reviewCount: 92,
        image: "https://via.placeholder.com/300?text=Quercetin",
        description: "Synergistic combination of quercetin flavonoid and bromelain enzyme to support respiratory health, seasonal immune function, and natural histamine response.",
        features: [
            "500mg quercetin and 100mg bromelain per serving",
            "Supports healthy histamine response",
            "Promotes respiratory and cardiovascular health",
            "Enhanced absorption formula",
            "60 vegetarian capsules"
        ],
        dosage: "Take 1 capsule twice daily between meals or as directed by your healthcare professional.",
        ingredients: "Quercetin Dihydrate, Bromelain (from pineapple stem), Vegetable Cellulose (capsule), Rice Flour, Vegetable Magnesium Stearate.",
        stock: 23,
        isNew: true,
        isBestseller: false,
        isFeatured: false,
        discount: 17
    },
    {
        id: 18,
        name: "Activated Charcoal",
        category: "herbs",
        price: 16.99,
        regularPrice: 19.99,
        rating: 4.5,
        reviewCount: 76,
        image: "https://via.placeholder.com/300?text=Activated+Charcoal",
        description: "Ultra-fine activated coconut charcoal powder with maximum surface area for optimal binding capacity. Supports detoxification, digestive health, and natural cleansing.",
        features: [
            "600mg of activated charcoal per capsule",
            "Derived from sustainable coconut sources",
            "Supports natural detoxification",
            "Promotes digestive comfort",
            "90 vegetarian capsules"
        ],
        dosage: "Take 2 capsules with a full glass of water, 2-3 hours away from food, medications, or supplements.",
        ingredients: "Activated Coconut Charcoal, Vegetable Cellulose (capsule).",
        stock: 48,
        isNew: false,
        isBestseller: false,
        isFeatured: false,
        discount: 15
    },
    {
        id: 19,
        name: "CoQ10 with BioPerine",
        category: "vitamins",
        price: 29.99,
        regularPrice: 34.99,
        rating: 4.8,
        reviewCount: 118,
        image: "https://via.placeholder.com/300?text=CoQ10",
        description: "Highly bioavailable Coenzyme Q10 (ubiquinol) with BioPerine for enhanced absorption. Supports cellular energy production, cardiovascular health, and antioxidant protection.",
        features: [
            "200mg of CoQ10 (ubiquinol) per softgel",
            "Enhanced with BioPerine black pepper extract",
            "Supports heart health and energy production",
            "Superior absorption and bioavailability",
            "60 softgels"
        ],
        dosage: "Take 1 softgel daily with food or as directed by your healthcare professional.",
        ingredients: "Coenzyme Q10 (as Ubiquinol), BioPerine® (Black Pepper Extract), Extra Virgin Olive Oil, Softgel (Gelatin, Glycerin, Purified Water), Beeswax, Sunflower Lecithin.",
        stock: 20,
        isNew: false,
        isBestseller: false,
        isFeatured: true,
        discount: 14
    },
    {
        id: 20,
        name: "Immune Defense Complex",
        category: "vitamins",
        price: 38.99,
        regularPrice: 45.99,
        rating: 4.9,
        reviewCount: 187,
        image: "https://via.placeholder.com/300?text=Immune+Defense",
        description: "Comprehensive immune support formula with vitamin C, D3, zinc, elderberry, and medicinal mushrooms. Supports year-round immune function and respiratory health.",
        features: [
            "Complete immune support formula",
            "Contains vitamins, minerals, herbs, and mushrooms",
            "Supports natural immune response",
            "Year-round immune maintenance",
            "60 vegetarian capsules"
        ],
        dosage: "Take 2 capsules daily with food or as directed by your healthcare professional.",
        ingredients: "Vitamin C (as Ascorbic Acid), Vitamin D3 (as Cholecalciferol), Zinc (as Zinc Glycinate Chelate), Elderberry Extract, Organic Mushroom Blend (Reishi, Turkey Tail, Maitake), Garlic Extract, Quercetin, N-Acetyl-L-Cysteine, Vegetable Cellulose (capsule), Rice Flour, Vegetable Magnesium Stearate.",
        stock: 35,
        isNew: true,
        isBestseller: true,
        isFeatured: true,
        discount: 15
    }
];

/**
 * Saves product data to localStorage
 */
function saveProductsToLocalStorage() {
    localStorage.setItem('funcMedProducts', JSON.stringify(products));
}

/**
 * Gets product data from localStorage or initializes it if not present
 */
function getProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem('funcMedProducts');
    if (!storedProducts) {
        saveProductsToLocalStorage();
        return products;
    }
    return JSON.parse(storedProducts);
}

/**
 * Initialize products when the page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if products aren't already in localStorage
    if (!localStorage.getItem('funcMedProducts')) {
        saveProductsToLocalStorage();
    }
});
