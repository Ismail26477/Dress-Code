import { X } from "lucide-react";
import { useState, useEffect } from "react";
import promoImage from "@/assets/promo-popup.jpg";

const PromoPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setShow(false);
    sessionStorage.setItem("promo_dismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-foreground/50" onClick={close} />
      <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl animate-slide-up max-w-sm w-full">
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 bg-background/80 rounded-full p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <img src={promoImage} alt="Special offer" className="w-full h-48 object-cover" />

        <div className="p-5 text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">
            NEW USERS ONLY
          </p>
          <h3 className="font-display text-2xl font-bold mb-1">25% OFF</h3>
          <p className="text-sm text-muted-foreground mb-3">
            On your first order! Use code:
          </p>
          <div className="bg-secondary rounded-lg py-2 px-4 inline-block mb-4">
            <span className="font-bold text-lg tracking-wider">SHIVAM25</span>
          </div>
          <button
            onClick={close}
            className="block w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
