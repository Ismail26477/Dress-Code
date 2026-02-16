import { Link } from "react-router-dom";

const SpecialOffers = () => {
  return (
    <section className="px-4 py-5">
      <h2 className="font-display text-lg font-bold text-center mb-3">SPECIAL OFFERS</h2>
      <div className="grid grid-cols-2 gap-3">
        <Link
          to="/category/sale"
          className="bg-pink rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[120px]"
        >
          <p className="text-xs font-semibold">ALL AT</p>
          <p className="font-display text-3xl font-bold text-sale">₹390</p>
          <p className="text-[10px] font-semibold text-accent mt-1">BOUJEE & ICONIC PICKS</p>
          <span className="mt-2 text-[10px] font-bold bg-background rounded-full px-3 py-1">SHOP NOW</span>
        </Link>
        <Link
          to="/category/sale"
          className="bg-pink rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[120px]"
        >
          <p className="text-xs font-bold">FAST DELIVERY</p>
          <p className="font-display text-2xl font-bold">Delivered in</p>
          <p className="font-display text-3xl font-bold text-accent">1-3 Days</p>
          <span className="mt-2 text-[10px] font-bold bg-background rounded-full px-3 py-1">SHOP NOW</span>
        </Link>
      </div>

      <Link
        to="/category/sale"
        className="block mt-3 bg-gradient-to-r from-pink to-secondary rounded-xl p-5 text-center"
      >
        <p className="font-display text-xl font-bold text-sale">Final Sale</p>
        <p className="font-display text-2xl font-bold">UP TO 70% OFF</p>
        <span className="mt-2 inline-block text-xs font-bold bg-background rounded-full px-4 py-1.5">SHOP NOW</span>
      </Link>
    </section>
  );
};

export default SpecialOffers;
