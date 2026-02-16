import { Home, Search, Heart, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "@/store/useStore";

const BottomNav = () => {
  const location = useLocation();
  const cartCount = useStore((s) => s.cartCount());
  const path = location.pathname;

  const items = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/search", icon: Search, label: "Search" },
    { to: "/wishlist", icon: Heart, label: "Wishlist" },
    { to: "/cart", icon: ShoppingBag, label: "Cart", badge: cartCount },
    { to: "/account", icon: User, label: "Account" },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-background border-t border-border z-40 pb-safe">
      <div className="flex items-center justify-around h-14">
        {items.map((item) => {
          const active = path === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 text-[10px] relative ${
                active ? "text-accent" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
              {item.badge ? (
                <span className="absolute -top-1 right-0 bg-accent text-accent-foreground text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
