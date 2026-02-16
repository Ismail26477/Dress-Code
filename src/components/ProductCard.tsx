import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard = ({ product, compact }: ProductCardProps) => {
  const { toggleWishlist, isInWishlist } = useStore();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="relative group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <span
              className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded ${
                product.badge.includes("OFF")
                  ? "bg-sale text-sale-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {!compact && (
          <div className="mt-2">
            <p className="text-xs text-muted-foreground line-clamp-1">{product.name}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-sm font-bold text-sale">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            {product.colors && product.colors.length > 0 && (
              <div className="flex gap-1 mt-1">
                {product.colors.map((c, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full border border-border"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product.id);
        }}
        className="absolute top-2 right-2 bg-background/80 rounded-full p-1.5"
      >
        <Heart
          className={`w-4 h-4 ${wishlisted ? "fill-sale text-sale" : "text-foreground"}`}
        />
      </button>

      {compact && (
        <p className="mt-1 text-sm font-bold">₹{product.price}</p>
      )}
    </div>
  );
};

export default ProductCard;
