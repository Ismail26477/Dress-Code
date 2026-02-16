import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FlashSale = () => {
  const [time, setTime] = useState({ hours: 35, minutes: 43, seconds: 22 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        let { hours, minutes, seconds } = t;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const saleProducts = products.filter((p) => p.badge?.includes("OFF")).slice(0, 4);

  return (
    <section className="px-4 py-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-sale fill-current" />
          <h2 className="font-display text-lg font-bold">LIMITED TIME STEALS</h2>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="text-muted-foreground">Ends in</span>
          <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-mono font-bold">
            {String(time.hours).padStart(2, "0")}
          </span>
          <span className="font-bold">:</span>
          <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-mono font-bold">
            {String(time.minutes).padStart(2, "0")}
          </span>
          <span className="font-bold">:</span>
          <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-mono font-bold">
            {String(time.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {saleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
