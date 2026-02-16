import { useState, useMemo } from "react";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("sale");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory === "sale") {
      list = products.filter((p) => p.badge?.includes("OFF"));
    } else {
      list = products.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      list = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
    }
    return list;
  }, [query, activeCategory]);

  return (
    <div className="app-shell">
      {/* Search header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border px-3 py-2 flex items-center gap-2">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-muted rounded-lg pl-3 pr-10 py-2 text-sm outline-none"
            autoFocus
          />
          <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Savana-style: category sidebar + products grid */}
      <div className="flex min-h-[calc(100dvh-120px)]">
        {/* Sidebar */}
        <div className="w-24 shrink-0 border-r border-border overflow-y-auto bg-muted/50">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setQuery(""); }}
              className={`block w-full text-left px-3 py-3 text-[11px] font-medium border-l-2 transition-colors ${
                activeCategory === cat.id
                  ? "border-accent bg-background text-accent font-bold"
                  : "border-transparent text-foreground hover:bg-background"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="flex-1 p-3 pb-20 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-base font-bold">
              {categories.find((c) => c.id === activeCategory)?.name || "Results"}
            </h2>
            <span className="text-xs text-muted-foreground">View all →</span>
          </div>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-sm mt-10">No products found</p>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SearchPage;
