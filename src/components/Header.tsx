import { Menu, Search, User, Heart, ShoppingBag, RotateCcw, Zap, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import SideMenu from "./SideMenu";

const Header = () => {
  const cartCount = useStore((s) => s.cartCount());
  const wishlist = useStore((s) => s.wishlist);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="flex items-center justify-between px-4 h-12">
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(true)} aria-label="Menu">
              <Menu className="w-6 h-6" />
            </button>
            <button onClick={() => navigate("/search")} aria-label="Search">
              <Search className="w-6 h-6" />
            </button>
          </div>

          <Link to="/" className="font-display text-xl font-bold tracking-wide">
            Dress Code
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/account" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="relative" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* USP Bar */}
        <div className="flex items-center justify-around py-1.5 border-t border-border text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <RotateCcw className="w-3 h-3" />
            <div>
              <div className="font-semibold text-foreground">Easy returns</div>
              <div>Free pick up</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            <div>
              <div className="font-semibold text-foreground">Fast delivery</div>
              <div>4000+ styles</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Truck className="w-3 h-3" />
            <div>
              <div className="font-semibold text-foreground">Free shipping</div>
              <div>For orders 990+</div>
            </div>
          </div>
        </div>
      </header>

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
