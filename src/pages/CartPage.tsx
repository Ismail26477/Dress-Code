import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useStore } from "@/store/useStore";
import BottomNav from "@/components/BottomNav";

const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useStore();
  const navigate = useNavigate();
  const total = cartTotal();

  return (
    <div className="app-shell">
      <div className="sticky top-0 z-40 bg-background flex items-center gap-3 px-4 h-12 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5" /></button>
        <h1 className="font-display text-lg font-bold">My Cart ({cart.length})</h1>
      </div>

      <main className="pb-40 px-4 py-4">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link to="/" className="text-sm font-semibold text-accent">Continue Shopping →</Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.product.id} className="flex gap-3 py-3 border-b border-border">
                <Link to={`/product/${item.product.id}`} className="w-20 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.product.name}</p>
                  <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                  <p className="text-sm font-bold text-sale mt-1">₹{item.product.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 border border-border rounded flex items-center justify-center">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold">{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 border border-border rounded flex items-center justify-center">
                      <Plus className="w-3 h-3" />
                    </button>
                    <button onClick={() => removeFromCart(item.product.id)} className="ml-auto">
                      <Trash2 className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Summary */}
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">₹{total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="font-semibold">{total >= 990 ? "FREE" : "₹99"}</span>
              </div>
              <div className="flex justify-between text-base font-bold border-t border-border pt-2">
                <span>Total</span>
                <span>₹{total + (total >= 990 ? 0 : 99)}</span>
              </div>
            </div>
          </>
        )}
      </main>

      {cart.length > 0 && (
        <div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-background border-t border-border p-3 z-30">
          <Link
            to="/checkout"
            className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold text-sm"
          >
            CHECKOUT · ₹{total + (total >= 990 ? 0 : 99)}
          </Link>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default CartPage;
