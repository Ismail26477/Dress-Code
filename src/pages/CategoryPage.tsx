import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = categories.find((c) => c.id === id);
  const prods = getProductsByCategory(id || "");

  return (
    <div className="app-shell">
      <div className="sticky top-0 z-40 bg-background flex items-center gap-3 px-4 h-12 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5" /></button>
        <h1 className="font-display text-lg font-bold">{category?.name || "Category"}</h1>
      </div>

      <main className="pb-20 px-4 py-4">
        {prods.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No products in this category yet</p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {prods.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default CategoryPage;
