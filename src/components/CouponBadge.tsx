import { useState } from "react";
import { X } from "lucide-react";

const CouponBadge = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed right-2 bottom-36 z-30 animate-fade-in">
      <button onClick={() => setShow(false)} className="absolute -top-1 -right-1 bg-background rounded-full p-0.5 shadow">
        <X className="w-3 h-3" />
      </button>
      <div className="bg-sale text-sale-foreground rounded-lg p-2 text-center shadow-lg">
        <p className="text-[8px] font-bold">COUPON</p>
        <p className="text-lg font-bold leading-none">25%</p>
        <p className="text-[10px] font-bold">OFF</p>
      </div>
    </div>
  );
};

export default CouponBadge;
