import { create } from "zustand";
import type { Product } from "@/data/products";

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface NotificationPrefs {
  restock: boolean;
  priceDrop: boolean;
  productIds: number[];
}

interface StoreState {
  cart: CartItem[];
  wishlist: number[];
  recentlyViewed: number[];
  notificationPrefs: NotificationPrefs;
  addToCart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  cartTotal: () => number;
  cartCount: () => number;
  addToRecentlyViewed: (productId: number) => void;
  toggleNotification: (type: "restock" | "priceDrop") => void;
  toggleProductAlert: (productId: number) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  wishlist: [],
  recentlyViewed: [],
  notificationPrefs: { restock: false, priceDrop: false, productIds: [] },
  addToCart: (product, quantity, size, color) =>
    set((state) => {
      const existing = state.cart.find((i) => i.product.id === product.id && i.size === size);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.product.id === product.id && i.size === size
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, { product, quantity, size, color }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({ cart: state.cart.filter((i) => i.product.id !== productId) })),
  updateCartQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.product.id === productId ? { ...i, quantity: Math.max(1, quantity) } : i
      ),
    })),
  clearCart: () => set({ cart: [] }),
  toggleWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.includes(productId)
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId],
    })),
  isInWishlist: (productId) => get().wishlist.includes(productId),
  cartTotal: () =>
    get().cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  cartCount: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),
  addToRecentlyViewed: (productId) =>
    set((state) => ({
      recentlyViewed: [productId, ...state.recentlyViewed.filter((id) => id !== productId)].slice(0, 20),
    })),
  toggleNotification: (type) =>
    set((state) => ({
      notificationPrefs: { ...state.notificationPrefs, [type]: !state.notificationPrefs[type] },
    })),
  toggleProductAlert: (productId) =>
    set((state) => ({
      notificationPrefs: {
        ...state.notificationPrefs,
        productIds: state.notificationPrefs.productIds.includes(productId)
          ? state.notificationPrefs.productIds.filter((id) => id !== productId)
          : [...state.notificationPrefs.productIds, productId],
      },
    })),
}));
