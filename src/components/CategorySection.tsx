import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product7 from "@/assets/product-7.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";

const catImages: Record<string, string> = {
  dresses: product4,
  tops: product2,
  denim: product3,
  "co-ords": product1,
  bags: product5,
  accessories: product12,
  jackets: product11,
  knitwear: product7,
};

const CategorySection = () => {
  const displayCats = categories.filter((c) => c.id !== "sale" && c.id !== "bottoms");

  return (
    <section className="px-4 py-5">
      <h2 className="font-display text-lg font-bold text-center mb-4">HOT CATEGORIES</h2>
      <div className="grid grid-cols-4 gap-3">
        {displayCats.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent bg-secondary">
              <img
                src={catImages[cat.id] || product1}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[9px] font-semibold text-center leading-tight">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
