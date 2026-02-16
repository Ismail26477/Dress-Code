import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";

const slides = [
  { image: hero1, title: "New Collection", subtitle: "Items from ₹290", link: "/category/sale", cta: "Shop Now" },
  { image: hero2, title: "Tops & T-Shirts", subtitle: "Fresh styles for spring", link: "/category/tops", cta: "Shop Now" },
  { image: hero3, title: "Final Sale", subtitle: "Up to 70% Off", link: "/category/sale", cta: "Shop Now" },
  { image: hero4, title: "Ethnic Fusion", subtitle: "Traditional meets modern", link: "/category/tops", cta: "Explore" },
  { image: hero5, title: "Summer Dresses", subtitle: "Bright & breezy looks", link: "/category/dresses", cta: "Shop Now" },
  { image: hero6, title: "Wedding Collection", subtitle: "Bridal & festive wear", link: "/category/dresses", cta: "Discover" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[380px]">
        {slides.map((slide, i) => (
          <Link
            to={slide.link}
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-4 right-4">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-3 inline-block">
                <p className="font-display text-lg font-bold">{slide.title}</p>
                <p className="text-xs text-muted-foreground">{slide.subtitle}</p>
                <span className="text-xs font-semibold text-accent mt-1 inline-block">
                  {slide.cta} →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 rounded-full p-1"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 rounded-full p-1"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-accent" : "bg-background/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
