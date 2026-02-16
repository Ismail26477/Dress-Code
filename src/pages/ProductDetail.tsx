import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingBag, Star, Minus, Plus, Share2, Bell, BellOff, ZoomIn } from "lucide-react";
import { getProductById, products } from "@/data/products";
import { useStore } from "@/store/useStore";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";
import PinchZoomImage from "@/components/PinchZoomImage";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  const { addToCart, toggleWishlist, isInWishlist, addToRecentlyViewed, recentlyViewed, toggleProductAlert, notificationPrefs } = useStore();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [showZoom, setShowZoom] = useState(false);

  const productId = Number(id);
  const hasAlert = notificationPrefs.productIds.includes(productId);

  useEffect(() => {
    if (product) addToRecentlyViewed(product.id);
  }, [product?.id]);

  useEffect(() => {
    setSelectedSize("");
    setSelectedColor(0);
    setQty(1);
  }, [id]);

  if (!product) {
    return (
      <div className="app-shell flex items-center justify-center min-h-screen">
        <p>Product not found</p>
      </div>
    );
  }

  const wishlisted = isInWishlist(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes && product.sizes[0] !== "ONE SIZE") {
      toast({ title: "Please select a size" });
      return;
    }
    addToCart(product, qty, selectedSize || product.sizes?.[0] || "M", product.colors?.[selectedColor] || "#000");
    toast({ title: "Added to cart!" });
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const recommended = recentlyViewed
    .filter((rid) => rid !== product.id)
    .map((rid) => products.find((p) => p.id === rid))
    .filter(Boolean)
    .slice(0, 4)
    .flatMap((p) => {
      const similar = products.filter(
        (sp) => sp.category === p!.category && sp.id !== product.id && !recentlyViewed.includes(sp.id)
      );
      return similar;
    })
    .filter((p, i, arr) => arr.findIndex((a) => a.id === p.id) === i)
    .slice(0, 4);

  const recsToShow = recommended.length > 0 ? recommended : related;

  return (
    <div className="app-shell">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm flex items-center justify-between px-4 h-12 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5" /></button>
        <div className="flex items-center gap-3">
          <button onClick={() => { toggleProductAlert(product.id); toast({ title: hasAlert ? "Alert removed" : "You'll be notified on restock & price drops!" }); }}>
            {hasAlert ? <Bell className="w-5 h-5 fill-gold text-gold" /> : <BellOff className="w-5 h-5" />}
          </button>
          <button onClick={() => toggleWishlist(product.id)}>
            <Heart className={`w-5 h-5 ${wishlisted ? "fill-sale text-sale" : ""}`} />
          </button>
          <Share2 className="w-5 h-5" />
          <button onClick={() => navigate("/cart")} className="relative">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      <main className="pb-32">
        {/* Image with pinch-to-zoom */}
        <div className="relative aspect-[3/4] bg-muted">
          <PinchZoomImage src={product.image} alt={product.name} className="w-full h-full" />
          <button
            onClick={() => setShowZoom(true)}
            className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2"
          >
            <ZoomIn className="w-4 h-4 text-foreground" />
          </button>
          <p className="absolute bottom-3 left-3 text-[10px] text-muted-foreground bg-background/70 px-2 py-0.5 rounded-full">
            Pinch to zoom
          </p>
        </div>

        {/* Color Swatches Gallery */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 px-4 py-3 border-b border-border">
            {product.colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`w-10 h-10 rounded-lg border-2 transition-all ${
                  selectedColor === i
                    ? "border-foreground ring-2 ring-foreground/20 scale-110"
                    : "border-border"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
            <span className="flex items-center text-xs text-muted-foreground ml-2">
              {product.colors.length} color{product.colors.length > 1 ? "s" : ""} available
            </span>
          </div>
        )}

        {/* Info */}
        <div className="px-4 py-4">
          <h1 className="font-display text-xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl font-bold text-sale">₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                <span className="text-xs font-bold text-sale bg-secondary px-1.5 py-0.5 rounded">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>

          {product.rating && (
            <div className="flex items-center gap-1 mt-2">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-sm font-semibold">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-3">{product.description}</p>

          {/* Sizes */}
          {product.sizes && (
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">Size</p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs rounded border ${
                      selectedSize === size
                        ? "border-foreground bg-primary text-primary-foreground"
                        : "border-border"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mt-4 flex items-center gap-3">
            <p className="text-sm font-semibold">Qty</p>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-8 h-8 border border-border rounded flex items-center justify-center">
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-bold w-6 text-center">{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} className="w-8 h-8 border border-border rounded flex items-center justify-center">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Recommendations */}
        {recsToShow.length > 0 && (
          <section className="px-4 py-5 border-t border-border">
            <h3 className="font-display text-base font-bold mb-1">
              {recommended.length > 0 ? "Based on your browsing" : "You might also like"}
            </h3>
            {recommended.length > 0 && (
              <p className="text-xs text-muted-foreground mb-3">Picks inspired by what you've viewed</p>
            )}
            <div className="grid grid-cols-2 gap-3">
              {recsToShow.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {recommended.length > 0 && related.length > 0 && (
          <section className="px-4 py-5 border-t border-border">
            <h3 className="font-display text-base font-bold mb-3">You might also like</h3>
            <div className="grid grid-cols-2 gap-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Fullscreen Zoom Modal */}
      {showZoom && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          <button
            onClick={() => setShowZoom(false)}
            className="absolute top-4 right-4 z-50 bg-muted rounded-full p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <PinchZoomImage src={product.image} alt={product.name} className="w-full h-full" />
        </div>
      )}

      {/* Sticky add to cart */}
      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-background border-t border-border p-3 z-30 flex gap-3">
        <button
          onClick={() => toggleWishlist(product.id)}
          className="w-12 h-12 border border-border rounded-lg flex items-center justify-center shrink-0"
        >
          <Heart className={`w-5 h-5 ${wishlisted ? "fill-sale text-sale" : ""}`} />
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-primary text-primary-foreground rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          ADD TO CART
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProductDetail;
