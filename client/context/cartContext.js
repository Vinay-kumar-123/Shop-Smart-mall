"use client";

import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/api.js";
import { useAuth } from "./AuthContext.js";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { user, authLoading } = useAuth();
  const [cart, setCart] = useState(null);
  const [cartLoading, setCartLoading] = useState(false);

  const fetchCart = async () => {
    if (!user) {
      setCart(null);
      return;
    }
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      setCartLoading(true);
      const res = await api.get("/api/auth/cart/carts");
      setCart(res.data.cart);
    } catch (error) {
      console.error(error);
      setCart(null);
    } finally {
      setCartLoading(false);
    }
  };

  const addToCart = async ({ productId, size, quantity }) => {
    const res = await api.post("/api/auth/cart/add", {
      productId,
      size,
      quantity,
    });
    setCart(res.data.cart);
  };

  const removeFromCart = async (cartItemId) => {
    const res = await api.delete(`/api/auth/cart/remove/${cartItemId}`);
    setCart(res.data.cart);
  };

  const updateCartItemQty = async (cartItemId, quantity) => {
    const res = await api.patch(`/api/auth/cart/update/${cartItemId}`, {
      quantity,
    });
    setCart(res.data.cart);
  };
  useEffect(() => {
    if (!authLoading) fetchCart();
  }, [user, authLoading]);

  const cartCount = cart?.totalItem || 0;

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          cartCount,
          cartLoading,
          fetchCart,
          addToCart,
          removeFromCart,
          updateCartItemQty,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export const useCart = () => useContext(CartContext);
