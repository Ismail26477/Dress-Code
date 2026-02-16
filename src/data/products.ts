import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";
import product13 from "@/assets/product-13.jpg";
import product14 from "@/assets/product-14.jpg";
import product15 from "@/assets/product-15.jpg";
import product16 from "@/assets/product-16.jpg";
import product17 from "@/assets/product-17.jpg";
import product18 from "@/assets/product-18.jpg";
import product19 from "@/assets/product-19.jpg";
import product20 from "@/assets/product-20.jpg";
import product21 from "@/assets/product-21.jpg";
import product22 from "@/assets/product-22.jpg";
import product23 from "@/assets/product-23.jpg";
import product24 from "@/assets/product-24.jpg";
import product25 from "@/assets/product-25.jpg";
import product26 from "@/assets/product-26.jpg";
import product27 from "@/assets/product-27.jpg";
import product28 from "@/assets/product-28.jpg";
import product29 from "@/assets/product-29.jpg";
import product30 from "@/assets/product-30.jpg";
import product31 from "@/assets/product-31.jpg";
import product32 from "@/assets/product-32.jpg";
import product33 from "@/assets/product-33.jpg";
import product34 from "@/assets/product-34.jpg";
import product35 from "@/assets/product-35.jpg";
import product36 from "@/assets/product-36.jpg";
import product37 from "@/assets/product-37.jpg";
import product38 from "@/assets/product-38.jpg";
import product39 from "@/assets/product-39.jpg";
import product40 from "@/assets/product-40.jpg";
import product41 from "@/assets/product-41.jpg";
import product42 from "@/assets/product-42.jpg";
import product43 from "@/assets/product-43.jpg";
import product44 from "@/assets/product-44.jpg";
import product45 from "@/assets/product-45.jpg";
import product46 from "@/assets/product-46.jpg";
import product47 from "@/assets/product-47.jpg";
import product48 from "@/assets/product-48.jpg";
import product49 from "@/assets/product-49.jpg";
import product50 from "@/assets/product-50.jpg";
import product51 from "@/assets/product-51.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  colors?: string[];
  sizes?: string[];
  rating?: number;
  reviews?: number;
  description?: string;
}

export const categories = [
  { id: "sale", name: "SALE", color: "text-sale" },
  { id: "dresses", name: "DRESSES" },
  { id: "tops", name: "TOPS & BLOUSES" },
  { id: "bottoms", name: "BOTTOMS" },
  { id: "co-ords", name: "CO-ORDS" },
  { id: "denim", name: "DENIM" },
  { id: "bags", name: "BAGS" },
  { id: "accessories", name: "ACCESSORIES" },
  { id: "jackets", name: "JACKETS & COATS" },
  { id: "knitwear", name: "KNITWEAR" },
];

export const products: Product[] = [
  // ── DRESSES (10) ──
  { id: 1, name: "Red Kurta Tunic", price: 790, originalPrice: 1490, image: product1, category: "dresses", badge: "50% OFF", colors: ["#c0392b", "#2c3e50"], sizes: ["S", "M", "L", "XL"], rating: 4.5, reviews: 128, description: "Beautiful red kurta tunic with elegant brown trim detailing. Perfect for casual and semi-formal occasions." },
  { id: 4, name: "Pink Floral Midi Dress", price: 990, originalPrice: 1490, image: product4, category: "dresses", badge: "30% OFF", colors: ["#e91e63", "#9c27b0"], sizes: ["S", "M", "L"], rating: 4.8, reviews: 167, description: "Gorgeous pink floral midi dress with a cinched waist. Perfect for spring outings and garden parties." },
  { id: 6, name: "Navy Satin Slip Dress", price: 1190, originalPrice: 1890, image: product6, category: "dresses", colors: ["#1a237e", "#000"], sizes: ["XS", "S", "M", "L"], rating: 4.4, reviews: 73, description: "Luxurious navy satin slip dress with delicate spaghetti straps. Perfect for evening occasions." },
  { id: 13, name: "Maroon Sequin Mermaid Gown", price: 2490, originalPrice: 3990, image: product13, category: "dresses", badge: "40% OFF", colors: ["#800020", "#4a0010"], sizes: ["S", "M", "L"], rating: 4.9, reviews: 89, description: "Stunning maroon sequin mermaid gown with a dramatic train. Perfect for red carpet events and galas." },
  { id: 14, name: "Green Tiered Mini Dress", price: 890, originalPrice: 1290, image: product14, category: "dresses", badge: "30% OFF", colors: ["#2e7d32", "#1b5e20"], sizes: ["XS", "S", "M", "L"], rating: 4.3, reviews: 145, description: "Fresh green cold-shoulder tiered mini dress with ruffle detailing. Ideal for summer outings." },
  { id: 15, name: "Dusty Rose Pleated Dress", price: 1090, originalPrice: 1590, image: product15, category: "dresses", colors: ["#d4a0a0", "#c48484"], sizes: ["S", "M", "L"], rating: 4.6, reviews: 112, description: "Romantic dusty rose pleated dress with tie waist and tiered skirt. Feminine and elegant." },
  { id: 16, name: "B&W Floral Maxi Dress", price: 1390, originalPrice: 1990, image: product16, category: "dresses", badge: "30% OFF", colors: ["#000", "#fff"], sizes: ["S", "M", "L", "XL"], rating: 4.7, reviews: 198, description: "Elegant black and white floral print maxi dress. A timeless piece for any special occasion." },
  { id: 17, name: "Blue Floral Puff Sleeve Midi", price: 1190, originalPrice: 1690, image: product17, category: "dresses", colors: ["#1565c0", "#fff"], sizes: ["XS", "S", "M", "L"], rating: 4.5, reviews: 156, description: "Vintage-inspired blue floral midi dress with adorable puff sleeves. A romantic wardrobe staple." },
  { id: 19, name: "Teal Belted Shirt Dress", price: 1290, originalPrice: 1890, image: product19, category: "dresses", colors: ["#00897b", "#00695c"], sizes: ["S", "M", "L"], rating: 4.4, reviews: 87, description: "Sophisticated teal belted shirt dress with puff sleeves. Perfect for office-to-dinner transitions." },
  { id: 20, name: "Champagne Lace Midi Dress", price: 1690, originalPrice: 2490, image: product20, category: "dresses", badge: "30% OFF", colors: ["#d4c5a9", "#c9b896"], sizes: ["S", "M", "L"], rating: 4.8, reviews: 134, description: "Elegant champagne lace overlay midi dress with flutter sleeves. Perfect for weddings and formal events." },

  // ── TOPS & BLOUSES (10) ──
  { id: 2, name: "White Crop Top", price: 390, originalPrice: 690, image: product2, category: "tops", badge: "40% OFF", colors: ["#fff", "#000"], sizes: ["XS", "S", "M", "L"], rating: 4.2, reviews: 95, description: "Classic white crop top with comfortable scoop neckline. A wardrobe essential for every season." },
  { id: 8, name: "Leopard Print Blouse", price: 690, originalPrice: 990, image: product8, category: "tops", badge: "Trendy", colors: ["#d2691e"], sizes: ["S", "M", "L"], rating: 4.3, reviews: 56, description: "Bold leopard print blouse with relaxed fit. Make a statement with this animal print essential." },
  { id: 10, name: "Plaid Check Shirt", price: 790, originalPrice: 1190, image: product10, category: "tops", colors: ["#c62828", "#1565c0"], sizes: ["S", "M", "L", "XL"], rating: 4.1, reviews: 88, description: "Classic plaid check shirt in red and navy. Versatile layering piece for any casual look." },
  { id: 22, name: "Boho Embroidered Kaftan", price: 1490, originalPrice: 2190, image: product22, category: "tops", badge: "30% OFF", colors: ["#fff", "#e91e63", "#4caf50"], sizes: ["S", "M", "L", "XL"], rating: 4.7, reviews: 176, description: "White bohemian kaftan with vibrant floral embroidery and bell sleeves. A free-spirited essential." },
  { id: 23, name: "Olive Satin Wrap Blouse", price: 890, originalPrice: 1290, image: product23, category: "tops", colors: ["#6b8e23", "#556b2f"], sizes: ["XS", "S", "M", "L"], rating: 4.4, reviews: 92, description: "Luxurious olive satin wrap blouse with tie detail. Effortlessly chic for day or night." },
  { id: 24, name: "White Lace Peplum Top", price: 690, originalPrice: 990, image: product24, category: "tops", badge: "30% OFF", colors: ["#fff", "#f5f5f5"], sizes: ["XS", "S", "M", "L"], rating: 4.5, reviews: 134, description: "Feminine white lace peplum top with ruffle detailing. Romantic and elegant for any occasion." },
  { id: 25, name: "Black Ruched Bodycon Top", price: 590, originalPrice: 890, image: product25, category: "tops", badge: "Trendy", colors: ["#000"], sizes: ["XS", "S", "M", "L"], rating: 4.3, reviews: 108, description: "Sleek black ruched bodycon top with square neckline. A versatile wardrobe essential." },
  { id: 26, name: "Mustard Kaftan Tunic", price: 990, originalPrice: 1490, image: product26, category: "tops", badge: "30% OFF", colors: ["#f9a825", "#e65100"], sizes: ["S", "M", "L", "XL"], rating: 4.6, reviews: 145, description: "Vibrant mustard yellow printed kaftan tunic with ethnic motifs. Perfect for festive occasions." },
  { id: 27, name: "Coral Puff Sleeve Crop Top", price: 490, originalPrice: 790, image: product27, category: "tops", badge: "40% OFF", colors: ["#ff6f61", "#e8554e"], sizes: ["XS", "S", "M", "L"], rating: 4.2, reviews: 87, description: "Fresh coral pink crop top with dramatic puff sleeves. A statement piece for summer styling." },
  { id: 18, name: "Cream Embroidered Jumpsuit", price: 1890, originalPrice: 2790, image: product18, category: "tops", badge: "30% OFF", colors: ["#f5f5dc", "#1a237e"], sizes: ["S", "M", "L"], rating: 4.8, reviews: 201, description: "Stunning cream V-neck jumpsuit with navy embroidered border. Boho-chic meets sophistication." },

  // ── BOTTOMS (6) ──
  { id: 28, name: "Beige Wide Leg Trousers", price: 990, originalPrice: 1490, image: product28, category: "bottoms", colors: ["#d2b48c", "#c8ad7f"], sizes: ["26", "28", "30", "32", "34"], rating: 4.5, reviews: 134, description: "Elegant beige high-waisted wide leg trousers. Effortlessly polished for work or weekend." },
  { id: 29, name: "Black Leather Pleated Skirt", price: 1290, originalPrice: 1890, image: product29, category: "bottoms", badge: "30% OFF", colors: ["#000"], sizes: ["XS", "S", "M", "L"], rating: 4.6, reviews: 98, description: "Luxurious black faux leather pleated midi skirt. Edgy elegance for any occasion." },
  { id: 30, name: "Olive Cargo Pants", price: 890, originalPrice: 1290, image: product30, category: "bottoms", badge: "Trendy", colors: ["#6b8e23", "#556b2f"], sizes: ["26", "28", "30", "32"], rating: 4.3, reviews: 112, description: "Trendy olive cargo pants with utility pockets and belt. Street style meets comfort." },
  { id: 31, name: "Floral Palazzo Pants", price: 790, originalPrice: 1190, image: product31, category: "bottoms", badge: "30% OFF", colors: ["#fff", "#e91e63"], sizes: ["S", "M", "L", "XL"], rating: 4.4, reviews: 156, description: "Breezy floral print palazzo pants with wide legs. Perfect for summer days and resort wear." },
  { id: 32, name: "White Linen Shorts", price: 590, originalPrice: 890, image: product32, category: "bottoms", badge: "30% OFF", colors: ["#fff", "#f5f5f5"], sizes: ["XS", "S", "M", "L"], rating: 4.2, reviews: 89, description: "Fresh white linen shorts with elastic waist. A summer essential for beach and brunch." },
  { id: 51, name: "Navy Striped Knit Vest", price: 690, originalPrice: 990, image: product51, category: "bottoms", colors: ["#1a237e", "#fff"], sizes: ["S", "M", "L"], rating: 4.1, reviews: 67, description: "Classic navy and white striped knit vest. Layer it for preppy style." },

  // ── CO-ORDS (5) ──
  { id: 9, name: "Lavender Co-Ord Set", price: 1190, originalPrice: 1790, image: product9, category: "co-ords", badge: "30% OFF", colors: ["#b39ddb", "#e1bee7"], sizes: ["S", "M", "L"], rating: 4.6, reviews: 134, description: "Chic lavender co-ord set with button-front top and matching shorts. Effortless summer style." },
  { id: 21, name: "Ethnic Patchwork Co-Ord", price: 1690, originalPrice: 2490, image: product21, category: "co-ords", badge: "30% OFF", colors: ["#9c27b0", "#e65100", "#f9a825"], sizes: ["S", "M", "L"], rating: 4.7, reviews: 189, description: "Vibrant ethnic patchwork co-ord set with embroidered crop top and palazzo pants. Festive and bold." },
  { id: 47, name: "Pink Striped Co-Ord Set", price: 890, originalPrice: 1290, image: product47, category: "co-ords", badge: "30% OFF", colors: ["#e91e63", "#fff"], sizes: ["XS", "S", "M", "L"], rating: 4.3, reviews: 98, description: "Playful pink and white striped co-ord with crop tee and matching shorts. Cute summer vibes." },
  { id: 48, name: "Sage Linen Blazer Set", price: 2190, originalPrice: 2990, image: product48, category: "co-ords", colors: ["#8bc34a", "#689f38"], sizes: ["S", "M", "L"], rating: 4.5, reviews: 76, description: "Sophisticated sage green linen blazer and trouser co-ord set. Power dressing meets relaxed elegance." },
  { id: 50, name: "Pink Pearl Cardigan Set", price: 1090, originalPrice: 1590, image: product50, category: "co-ords", colors: ["#e91e63", "#f8bbd0"], sizes: ["S", "M", "L", "XL"], rating: 4.4, reviews: 112, description: "Soft pink cardigan with pearl buttons, pairs beautifully with matching knit skirt." },

  // ── DENIM (5) ──
  
  { id: 33, name: "Classic Skinny Jeans", price: 990, originalPrice: 1490, image: product33, category: "denim", badge: "30% OFF", colors: ["#1e88e5", "#1565c0"], sizes: ["26", "28", "30", "32", "34"], rating: 4.5, reviews: 234, description: "Essential light blue skinny jeans with stretch comfort. A denim wardrobe must-have." },
  { id: 34, name: "Dark Indigo Straight Leg", price: 1190, originalPrice: 1690, image: product34, category: "denim", colors: ["#1a237e", "#0d1b5e"], sizes: ["28", "30", "32", "34", "36"], rating: 4.6, reviews: 178, description: "Premium dark indigo straight leg jeans. Timeless style with perfect wash." },
  { id: 35, name: "Distressed Boyfriend Jeans", price: 1090, originalPrice: 1590, image: product35, category: "denim", badge: "Trendy", colors: ["#90caf9", "#64b5f6"], sizes: ["26", "28", "30", "32"], rating: 4.4, reviews: 156, description: "Relaxed distressed boyfriend jeans with rolled cuffs. Effortlessly cool streetwear vibes." },
  { id: 36, name: "Black Cropped Denim Jacket", price: 1490, originalPrice: 1990, image: product36, category: "denim", colors: ["#000", "#212121"], sizes: ["S", "M", "L"], rating: 4.7, reviews: 145, description: "Sleek black cropped denim jacket with silver buttons. Essential layering piece." },

  // ── BAGS (5) ──
  { id: 5, name: "Leather Tote Bag", price: 1490, originalPrice: 2490, image: product5, category: "bags", badge: "40% OFF", colors: ["#b7410e", "#000"], sizes: ["ONE SIZE"], rating: 4.6, reviews: 89, description: "Premium leather tote bag with spacious interior. Elegant design for work and weekend outings." },
  { id: 37, name: "Brown Crossbody Sling Bag", price: 890, originalPrice: 1290, image: product37, category: "bags", badge: "30% OFF", colors: ["#8d6e63", "#6d4c41"], sizes: ["ONE SIZE"], rating: 4.4, reviews: 123, description: "Classic brown leather crossbody bag with gold hardware. Compact yet spacious for daily essentials." },
  { id: 38, name: "Black Chain Shoulder Bag", price: 1890, originalPrice: 2790, image: product38, category: "bags", badge: "30% OFF", colors: ["#000", "#ffd700"], sizes: ["ONE SIZE"], rating: 4.8, reviews: 198, description: "Luxurious black quilted shoulder bag with gold chain strap. Statement piece for evening events." },
  { id: 39, name: "Straw Beach Tote", price: 690, originalPrice: 990, image: product39, category: "bags", colors: ["#d2b48c", "#8d6e63"], sizes: ["ONE SIZE"], rating: 4.3, reviews: 87, description: "Natural woven straw tote with leather handles. Perfect for beach days and summer outings." },
  { id: 40, name: "Pink Quilted Mini Bag", price: 590, originalPrice: 890, image: product40, category: "bags", badge: "30% OFF", colors: ["#e91e63", "#ffd700"], sizes: ["ONE SIZE"], rating: 4.5, reviews: 167, description: "Adorable pink quilted mini bag with rose gold chain. A playful accessory for any outfit." },

  // ── ACCESSORIES (5) ──
  { id: 12, name: "Cat Eye Sunglasses Set", price: 490, originalPrice: 790, image: product12, category: "accessories", badge: "Trendy", colors: ["#000", "#795548"], sizes: ["ONE SIZE"], rating: 4.5, reviews: 203, description: "Retro cat eye sunglasses set with UV protection. Includes two stylish frames." },
  { id: 41, name: "Gold Layered Necklace Set", price: 690, originalPrice: 990, image: product41, category: "accessories", badge: "30% OFF", colors: ["#ffd700"], sizes: ["ONE SIZE"], rating: 4.6, reviews: 178, description: "Stunning gold layered statement necklace set with pendant charms. Elevate any outfit instantly." },
  { id: 42, name: "Pearl Drop Earrings", price: 390, originalPrice: 590, image: product42, category: "accessories", colors: ["#fff", "#ffd700"], sizes: ["ONE SIZE"], rating: 4.7, reviews: 234, description: "Elegant pearl drop earrings with gold crystal accents. Timeless sophistication for every occasion." },
  { id: 43, name: "Floral Silk Scarf", price: 490, originalPrice: 790, image: product43, category: "accessories", badge: "40% OFF", colors: ["#e91e63", "#2e7d32", "#000"], sizes: ["ONE SIZE"], rating: 4.4, reviews: 112, description: "Luxurious floral silk scarf with vibrant print. Versatile styling — wear as headband, necktie, or bag accent." },
  { id: 44, name: "Wide Brim Straw Hat", price: 590, originalPrice: 890, image: product44, category: "accessories", colors: ["#d2b48c", "#c8ad7f"], sizes: ["ONE SIZE"], rating: 4.3, reviews: 98, description: "Elegant wide brim straw hat with satin ribbon. Sun protection meets high fashion." },

  // ── JACKETS & COATS (4) ──
  { id: 11, name: "Velvet Blazer Jacket", price: 1690, originalPrice: 2490, image: product11, category: "jackets", badge: "30% OFF", colors: ["#4a148c", "#1b5e20"], sizes: ["S", "M", "L"], rating: 4.8, reviews: 112, description: "Luxurious maroon velvet cropped blazer. Elevate any outfit with this statement piece." },
  { id: 45, name: "Camel Wool Trench Coat", price: 2490, originalPrice: 3490, image: product45, category: "jackets", badge: "30% OFF", colors: ["#d4a76a", "#c49456"], sizes: ["S", "M", "L", "XL"], rating: 4.9, reviews: 167, description: "Classic camel wool trench coat with belt. Timeless elegance for cooler seasons." },
  { id: 46, name: "Olive Bomber Jacket", price: 1290, originalPrice: 1890, image: product46, category: "jackets", colors: ["#6b8e23", "#556b2f"], sizes: ["S", "M", "L", "XL"], rating: 4.5, reviews: 134, description: "Cool olive green bomber jacket with zip front. Casual and versatile for everyday wear." },

  // ── KNITWEAR (3) ──
  { id: 7, name: "Beige Cable Knit Sweater", price: 890, originalPrice: 1290, image: product7, category: "knitwear", badge: "30% OFF", colors: ["#d2b48c", "#fff"], sizes: ["S", "M", "L", "XL"], rating: 4.9, reviews: 245, description: "Cozy cable knit sweater in warm beige. Soft, comfortable and stylish for cooler days." },
  { id: 49, name: "Cream Turtleneck Sweater", price: 1090, originalPrice: 1590, image: product49, category: "knitwear", colors: ["#f5f5dc", "#e8e0c8"], sizes: ["S", "M", "L", "XL"], rating: 4.7, reviews: 189, description: "Luxurious cream chunky turtleneck sweater. Ultimate comfort meets refined style." },
];

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "sale") return products.filter((p) => p.badge?.includes("OFF"));
  return products.filter((p) => p.category === categoryId);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
