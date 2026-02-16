import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/useStore";
import BottomNav from "@/components/BottomNav";

const steps = ["Address", "Payment", "Confirm"];

const CheckoutPage = () => {
  const [step, setStep] = useState(0);
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const total = cartTotal();
  const shipping = total >= 990 ? 0 : 99;

  if (step === 2) {
    return (
      <div className="app-shell">
        <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
          <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">Order Confirmed!</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Thank you for shopping with Shivam Kapad & Readymade
          </p>
          <button
            onClick={() => { clearCart(); navigate("/"); }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm"
          >
            Continue Shopping
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="sticky top-0 z-40 bg-background flex items-center gap-3 px-4 h-12 border-b border-border">
        <button onClick={() => (step > 0 ? setStep(step - 1) : navigate(-1))}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-display text-lg font-bold">Checkout</h1>
      </div>

      {/* Steps */}
      <div className="flex items-center justify-center gap-2 py-3 border-b border-border">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1">
            <div className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
              i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {i + 1}
            </div>
            <span className={`text-xs ${i <= step ? "font-semibold" : "text-muted-foreground"}`}>{s}</span>
            {i < steps.length - 1 && <div className="w-6 h-px bg-border" />}
          </div>
        ))}
      </div>

      <main className="pb-32 px-4 py-4">
        {step === 0 && (
          <div className="space-y-3">
            <input className="w-full border border-border rounded-lg px-3 py-2.5 text-sm" placeholder="Full Name" />
            <input className="w-full border border-border rounded-lg px-3 py-2.5 text-sm" placeholder="Phone Number" />
            <input className="w-full border border-border rounded-lg px-3 py-2.5 text-sm" placeholder="Address Line 1" />
            <input className="w-full border border-border rounded-lg px-3 py-2.5 text-sm" placeholder="City" />
            <div className="flex gap-3">
              <input className="flex-1 border border-border rounded-lg px-3 py-2.5 text-sm" placeholder="State" />
              <input className="flex-1 border border-border rounded-lg px-3 py-2.5 text-sm" placeholder="PIN Code" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <label className="flex items-center gap-3 border border-border rounded-lg p-3 cursor-pointer">
              <input type="radio" name="payment" defaultChecked className="accent-accent" />
              <span className="text-sm">Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-3 border border-border rounded-lg p-3 cursor-pointer">
              <input type="radio" name="payment" className="accent-accent" />
              <span className="text-sm">UPI / Online Payment</span>
            </label>

            <div className="mt-6 space-y-2">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-3 items-center">
                  <div className="w-10 h-12 rounded bg-muted overflow-hidden">
                    <img src={item.product.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                  </div>
                  <p className="text-xs font-bold">₹{item.product.price * item.quantity}</p>
                </div>
              ))}
              <div className="border-t border-border pt-2 flex justify-between font-bold text-sm">
                <span>Total</span>
                <span>₹{total + shipping}</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-background border-t border-border p-3 z-30">
        <button
          onClick={() => setStep(step + 1)}
          className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold text-sm"
        >
          {step === 0 ? "CONTINUE TO PAYMENT" : "PLACE ORDER · ₹" + (total + shipping)}
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default CheckoutPage;
