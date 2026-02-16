import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import HeroSlider from "@/components/HeroSlider";
import SpecialOffers from "@/components/SpecialOffers";
import CategorySection from "@/components/CategorySection";
import FlashSale from "@/components/FlashSale";
import ProductCard from "@/components/ProductCard";
import MembershipBar from "@/components/MembershipBar";
import PromoPopup from "@/components/PromoPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import CouponBadge from "@/components/CouponBadge";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const Index = () => {
  const featured = products.slice(0, 6);
  const youMightLike = products.slice(6);

  return (
    <div className="app-shell">
      <Header />

      <main className="pb-32">
        {/* Hero */}
        <HeroSlider />

        {/* Special Offers */}
        <SpecialOffers />

        {/* Hot Categories */}
        <CategorySection />

        {/* Flash Sale */}
        <FlashSale />

        {/* In Everyone's Cart */}
        <section className="px-4 py-5">
          <h2 className="font-display text-lg font-bold text-center mb-3">IN EVERYONE'S CART RN</h2>
          <div className="grid grid-cols-3 gap-2">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} compact />
            ))}
          </div>
        </section>

        {/* What's New */}
        <section className="px-4 py-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-lg font-bold">WHAT'S NEW & LOVED</h2>
            <Link to="/category/sale" className="text-xs font-semibold text-accent">View all →</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {youMightLike.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* You Might Also Like */}
        <section className="px-4 py-5">
          <h2 className="font-display text-lg font-bold mb-3">You might also like</h2>
          <div className="grid grid-cols-2 gap-3">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

      <MembershipBar />
      <BottomNav />
      <WhatsAppButton />
      <CouponBadge />
      <PromoPopup />
    </div>
  );
};

export default Index;
