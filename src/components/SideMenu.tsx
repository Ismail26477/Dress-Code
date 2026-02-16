import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

const SideMenu = ({ open, onClose }: SideMenuProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-foreground/40" onClick={onClose} />
      <div className="relative w-72 bg-background h-full animate-fade-in shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-display text-lg font-bold">Shivam</span>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>

        <nav className="py-2">
          <Link to="/" onClick={onClose} className="block px-6 py-3 text-sm font-medium hover:bg-muted">HOME</Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              onClick={onClose}
              className={`block px-6 py-3 text-sm font-medium hover:bg-muted ${cat.color || ""}`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <Link to="/account" onClick={onClose} className="block py-2 text-sm">My Account</Link>
          <Link to="/wishlist" onClick={onClose} className="block py-2 text-sm">Wishlist</Link>
          <Link to="/cart" onClick={onClose} className="block py-2 text-sm">Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
