import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/useStore";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";
import { products } from "@/data/products";

const WishlistPage = () => {
  const { wishlist } = useStore();
  const navigate = useNavigate();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="app-shell">
      <div className="sticky top-0 z-40 bg-background flex items-center gap-3 px-4 h-12 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5" /></button>
        <h1 className="font-display text-lg font-bold">Wishlist ({items.length})</h1>
      </div>

      <main className="pb-20 px-4 py-4">
        {items.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">Your wishlist is empty</p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default WishlistPage;
