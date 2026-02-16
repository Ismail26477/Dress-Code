import { ArrowLeft, Bell } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { User, ShoppingBag, Heart, MapPin, CreditCard, HelpCircle, LogOut } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { useStore } from "@/store/useStore";

const items = [
  { icon: ShoppingBag, label: "My Orders", to: "/" },
  { icon: Heart, label: "Wishlist", to: "/wishlist" },
  { icon: MapPin, label: "Saved Addresses", to: "/" },
  { icon: CreditCard, label: "Payment Methods", to: "/" },
  { icon: HelpCircle, label: "Help & Support", to: "/" },
];

const AccountPage = () => {
  const navigate = useNavigate();
  const { notificationPrefs, toggleNotification } = useStore();

  return (
    <div className="app-shell">
      <div className="sticky top-0 z-40 bg-background flex items-center gap-3 px-4 h-12 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5" /></button>
        <h1 className="font-display text-lg font-bold">My Account</h1>
      </div>

      <main className="pb-20">
        <div className="p-6 flex flex-col items-center border-b border-border">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
            <User className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="mt-3 font-semibold">Guest User</p>
          <p className="text-xs text-muted-foreground">Sign in for the best experience</p>
          <button className="mt-3 bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold">
            Sign In
          </button>
        </div>

        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center gap-4 px-6 py-4 hover:bg-muted"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
          <button className="flex items-center gap-4 px-6 py-4 hover:bg-muted w-full text-left text-sale">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Log Out</span>
          </button>
        </div>

        {/* Notification Preferences */}
        <div className="px-6 py-4 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="w-5 h-5" />
            <h3 className="font-display text-sm font-bold">Notification Preferences</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm">Restock Alerts</span>
              <button
                onClick={() => toggleNotification("restock")}
                className={`w-10 h-6 rounded-full transition-colors ${notificationPrefs.restock ? "bg-accent" : "bg-muted"}`}
              >
                <div className={`w-4 h-4 bg-background rounded-full transition-transform mx-1 ${notificationPrefs.restock ? "translate-x-4" : ""}`} />
              </button>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Price Drop Alerts</span>
              <button
                onClick={() => toggleNotification("priceDrop")}
                className={`w-10 h-6 rounded-full transition-colors ${notificationPrefs.priceDrop ? "bg-accent" : "bg-muted"}`}
              >
                <div className={`w-4 h-4 bg-background rounded-full transition-transform mx-1 ${notificationPrefs.priceDrop ? "translate-x-4" : ""}`} />
              </button>
            </label>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">
            You can also tap the bell icon on any product to get alerts for that item.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default AccountPage;
